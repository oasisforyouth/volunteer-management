var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js')

// GET ROUTES FOR TRAINING 
router.get('/', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

        pool.connect(function(err, db, done) {
            if (err) {
                console.log('Error connecting to the DB', err);
                res.sendStatus(500);
                done();
                return;
            } // end error
            else {
                db.query('SELECT * FROM trainings', function(errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    } // end if statement
                });
            } // end no error
        }); // end pool connect
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
}); // end get

//Get for volunteer trainings
router.get('/volunteers', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
        pool.connect(function(err, db, done) {
            if (err) {
                console.log('Error connecting to the DB', err);
                res.sendStatus(500);
                done();
                return;
            } // end error
            else {
                db.query('SELECT * FROM trainings WHERE volunteers = true', function(errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    } // end if statement
                });
            } // end no error
        }); // end pool connect
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
}); // end get
// DELETE ROUTE FOR TRAINING
router.delete('/:id', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

        var trainingId = req.params.id;
        console.log('training delete was hit!', trainingId);
        pool.connect(function(errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                // when connecting to database failed
                console.log('Error connecting to database', errorConnectingToDatabase);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query('DELETE FROM trainings WHERE id=$1;', [trainingId],
                    function(errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            res.sendStatus(200);
                        }
                    });
            }
        });
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
}); // end router.delete

// UPDATE/EDIT ROUTE FOR TRAINING
router.put('/:id', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

        var trainingId = req.params.id;
        console.log('training put was hit!', req.body);
        pool.connect(function(errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                // when connecting to database failed
                console.log('Error connecting to database', errorConnectingToDatabase);
                res.sendStatus(500);
            } else {
                // when connecting to database worked!
                client.query('UPDATE trainings SET title=$1, volunteers=$2, employees=$3 WHERE id=$4;', [req.body.title, req.body.volunteers, req.body.employees, trainingId],
                    function(errorMakingQuery, result) {
                        done();
                        if (errorMakingQuery) {
                            console.log('Error making database query', errorMakingQuery);
                            res.sendStatus(500);
                        } else {
                            res.sendStatus(200);
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

// POST ROUTE FOR NEW TRAINING
router.post('/', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

        var newTraining = req.body;
        console.log('addTraining post was hit');
        pool.connect(function(errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                //when connecting to database failed
                console.log('Error connecting to database', errorConnectingToDatabase);
                res.sendStatus(500);
            } else {
                // when connecting to database worked aka HAPPYPATH!
                client.query('INSERT INTO trainings (title, volunteers, employees) VALUES ($1, $2, $3);', [newTraining.title, newTraining.volunteers, newTraining.employees], function(errorMakingQuery, result) {
                    done(); //needed
                    if (errorMakingQuery) {
                        console.log('Error making database query', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(201);
                    }
                }); // end client.query
            }
        }); // end pool.connect
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
}); // end post route

module.exports = router;