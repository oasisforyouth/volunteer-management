let express = require('express');
let router = express.Router();
let passport = require('passport');
let path = require('path');
var pool = require('../modules/pool.js');
let nodemailer = require('nodemailer');
//let md5 = require('md5');
// let crypto = require('crypto');

// NEW VOLUNTEER APPLICAITON EMAIL
router.post('/', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    // if (req.isAuthenticated()) {
    //     console.log('logged in email', req.user);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DB_USER,
            pass: process.env.DB_PASS
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Administrator"' + process.env.DB_EMAIL, // sender address  
        // THIS WILL BE JESS' EMAIL ADDRESS
        to: process.env.DB_PM_EMAIL, // list of receivers 
        subject: 'Volunteer Application', // Subject line
        // JESS CAN PERSONALIZE THIS IF SHE WOULD LIKE US TO
        text: 'A new Volunteer application has been submitted', // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

});


router.post('/user', (req, res, next) => {
    let email = req.body;
    console.log('post req.body', email);
    // console.log('hash: ', md5(email.email));
    // let hash = md5(email.email);
    // create reusable transporter object using the default SMTP transport

    if (req.isAuthenticated()) {
        console.log('logged in email', req.user);
        // SEND EMAIL AND HASH TO DB
        pool.connect(function(errorConnectingToDatabase, client, done) {
            if (errorConnectingToDatabase) {
                //when connecting to database failed aka sadpath.
                console.log('Error connecting to database', errorConnectingToDatabase);
                res.sendStatus(500);
            } else {
                // when connecting to database worked aka HAPPYPATH!
                client.query('INSERT INTO crypto (email, md5) VALUES ($1, $2);', [email.email, hash], function(errorMakingQuery, result) {
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
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.DB_USER,
                pass: process.env.DB_PASS
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Administrator"' + process.env.DB_EMAIL, // sender address  NEEDS ADDRESS
            to: email.email, // list of receivers NEEDS ADDRESS
            subject: 'New Administrator', // Subject line
            text: 'Please click the following link: ' + process.env.DB_HOST + hash
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    } else {
        console.log('not logged in');
        res.sendStatus(403);
    }
});

module.exports = router;