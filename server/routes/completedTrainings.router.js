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
            client.query("SELECT * FROM Completed_trainings WHERE trainee_id = $1", [traineeId],
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