var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js');
var encryptLib = require('../modules/encryption');

// Handles request for HTML file
router.get('/', function(req, res, next) {
    console.log('get /register route');
    res.sendFile(path.resolve(__dirname, '../public/views/templates/register.html'));
});

// Handles POST request with new user data
router.post('/', function(req, res, next) {
    console.log("routeParams", req.params.id);
    var saveUser = {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: encryptLib.encryptPassword(req.body.password),
        position: req.body.position,
    };
    console.log('new user:', saveUser);

    pool.connect(function(err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("INSERT INTO users (first_name, last_name, user_name, email, password, position) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id", [saveUser.firstname, saveUser.lastname, saveUser.username, saveUser.email, saveUser.password, saveUser.position],
            function(err, result) {
                client.end();

                if (err) {
                    console.log("Error inserting data: ", err);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    });

});

router.put('/:id', function(req, res, next) {
    var adminId = req.params.id;
    pool.connect(function(err, client, done) {
        if (err) {
            console.log("Error connecting: ", err);
            res.sendStatus(500);
        }
        client.query("UPDATE crypto SET route_params=$1 WHERE md5=$2 RETURNING id;", [adminId, adminId],
            function(err, result) {
                client.end();

                if (err) {
                    console.log("Error inserting data: ", err);
                    res.sendStatus(500);
                } else if (result < 1) {
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    });

});


module.exports = router;