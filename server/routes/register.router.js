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
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

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
            } else {
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
            }
        });
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
});

// DO THIS AGAIN TO COMPARE USER NAME AND MD5
router.put('/:id', function(req, res, next) {
    var adminId = req.params.id;
    var active = false;
    console.log('req.body', req.body)
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
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
                        // MATCHES HASH WITH ROUTE PARAMS, IF THE SAME WE CAN PROCEED
                    } else if (result.rows.length < 1) {
                        res.sendStatus(500);
                    } else {
                        pool.connect(function(err, client, done) {
                            if (err) {
                                console.log("Error connecting: ", err);
                                res.sendStatus(500);
                            }
                            // CHANGES ACTIVE TO FALSE, EFFECTIVELY TURNING OFF THE HASH
                            client.query("SELECT * FROM crypto WHERE md5=$1;", [adminId],
                                function(err, result) {
                                    console.log('result.rows: ', result.rows);
                                    client.end();
                                    if (err) {
                                        console.log('error selecting from crypto', err)
                                    } else {
                                        pool.connect(function(err, client, done) {
                                            if (err) {
                                                console.log("Error connecting: ", err);
                                                res.sendStatus(500);
                                            } else {
                                                client.query("UPDATE crypto SET active=FALSE WHERE md5=$1 AND active=TRUE returning md5;", [adminId],
                                                    function(err, result) {
                                                        client.end();
                                                        console.log('result: ', result);
                                                        if (adminId == result.rows[0].md5) {
                                                            // console.log('HOOORAY');
                                                            pool.connect(function(err, client, done) {
                                                                var saveUser = {
                                                                    firstname: req.body.firstName,
                                                                    lastname: req.body.lastName,
                                                                    username: req.body.username,
                                                                    email: req.body.email,
                                                                    password: encryptLib.encryptPassword(req.body.password),
                                                                    position: req.body.position,
                                                                };
                                                                console.log('saveUser: ', saveUser)

                                                                if (err) {
                                                                    // console.log("Error connecting post: ", err);
                                                                    res.sendStatus(500);
                                                                } else {


                                                                    client.query("INSERT INTO users (first_name, last_name, user_name, email, password, position) VALUES ($1, $2, $3, $4, $5, $6);", [saveUser.firstname, saveUser.lastname, saveUser.username, saveUser.email, saveUser.password, saveUser.position], function(err, result) {
                                                                        console.log('result: ', result.rows);
                                                                        client.end();

                                                                        if (err) {
                                                                            console.log("Error inserting data: ", err);
                                                                            res.sendStatus(500);
                                                                        } else {
                                                                            res.sendStatus(201);
                                                                        }

                                                                    });
                                                                }
                                                            });
                                                        }
                                                        // res.sendStatus(201);

                                                    });

                                            }

                                        });
                                    }
                                })

                        }); // end pool.connect

                    }
                });
        }); // end pool . connect
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
}); // end router.put

router.put('/reset/:id', function(req, res, next) {
    // console.log('adminID - Params: ', req.params.id);
    var user = {
        md5: req.params.id,
        password: encryptLib.encryptPassword(req.body.password),
    }
    console.log('new password:', user);
    // pool.connect(function(err, client, done) {
    //     if (err) {
    //         console.log("Error connecting: ", err);
    //         res.sendStatus(500);
    //     }
    //     client.query("UPDATE pword_reset SET route_params=$1 WHERE md5=$2 RETURNING id;", [adminId, adminId],
    //         function(err, result) {
    //             client.end();

    //         }); // end pool.connect

}); // end router.put


module.exports = router;