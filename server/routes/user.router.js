var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js');

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
    console.log('get /user route');
    // check if logged in
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
        var userInfo = {
            user_name: req.user.user_name
        };
        console.log('userinfo,', userInfo);
        res.send(userInfo);
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.sendStatus(403);
    }
});
router.get('/allusers', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
        pool.connect(function(errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                res.sendStatus(500);
            } else {
                client.query('SELECT first_name ,last_name, position, user_name, email, id FROM users', function(errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
            }
        })
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.sendStatus(403);
    }
});

// clear all server session information about this user
router.get('/logout', function(req, res) {
    // Use passport's built-in method to log out the user
    console.log('Logged out');
    req.logOut();
    res.sendStatus(200);
});

//delete route
router.delete('/:id', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
        console.log('delete hit', req.params.id);
        pool.connect(function(err, db, done) {
            if (err) {
                console.log('delete error: ', err);
                res.sendStatus(500);
            } else {
                db.query('DELETE FROM users WHERE id=$1', [req.params.id], function(errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('error with put', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                })
            }
        })
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.sendStatus(403);
    }
}); //end delete route


//admin edit route//

router.put('/', function(req, res) {
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);
        console.log('put hit', req.body);
        pool.connect(function(err, db, done) {
            if (err) {
                console.log('remove error: ', err);
                res.sendStatus(500);
            } else {
                db.query('UPDATE users SET first_name=$1, last_name=$2, position=$3, email=$4 WHERE id=$5', [req.body.first_name, req.body.last_name, req.body.position, req.body.email, req.body.id], function(errorMakingQuery, result) {
                    done();
                    if (errorMakingQuery) {
                        console.log('error with put', errorMakingQuery);
                        res.sendStatus(500);
                    } else {
                        res.sendStatus(200);
                    }
                })
            }
        })
    } else {
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
        res.sendStatus(403);
    }
});
//end admin edit route//

module.exports = router;