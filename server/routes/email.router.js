let express = require('express');
let router = express.Router();
let passport = require('passport');
let path = require('path');
let nodemailer = require('nodemailer');

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
    // } else {
    //     console.log('not logged in');
    //     res.sendStatus(403);
    // }
});


router.post('/user', (req, res, next) => {
    var email = req.body;
    console.log('post req.body', email);
    // create reusable transporter object using the default SMTP transport

    if (req.isAuthenticated()) {
        console.log('logged in email', req.user);

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
            text: 'Please click the following link: ' + process.env.DB_HOST, // plain text body
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