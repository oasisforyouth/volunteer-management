var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js')

router.get('/:id', function(req,res){
    if (req.isAuthenticated()) {
        let traineeId = req.params.id;
        pool.connect(function(err, client, done) {
            if (err) {
                console.log("Error connecting: ", err);
                res.sendStatus(500);
            }
            client.query(`SELECT trainings.title, completed_trainings.date_completed FROM volunteers
            JOIN completed_trainings ON completed_trainings.trainee_id = volunteers.id AND volunteers.id=$1
            RIGHT OUTER JOIN trainings ON completed_trainings.training_id = trainings.id
            WHERE trainings.volunteers = TRUE;`, [traineeId],
                function(err, result) {
                    done();
    
                    if (err) {
                        console.log("Error Making Query", err);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                });
        });
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
})


module.exports = router;