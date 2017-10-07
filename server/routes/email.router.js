let express = require('express');
let router = express.Router();
let passport = require('passport');
let path = require('path');
let nodemailer = require('nodemailer');

<<<<<<< HEAD
router.post('/', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DB_USER,
            pass: process.env.DB_PASS
        }
    });
=======
    router.post('/', (req, res, next) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.DB_USER, 
                pass: process.env.DB_PASS 
            }
        });
>>>>>>> 9e45a2cfc9e36a1e110bb925410bb5a77d61fbf7

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Administrator" <pm.oasisforyouth@gmail.com>', // sender address  NEEDS ADDRESS
        to: 'nicbade@me.com', // list of receivers NEEDS ADDRESS
        subject: 'Volunteer Application', // Subject line
        text: 'A new Volunteer application has been submitted', // plain text body
    };

<<<<<<< HEAD
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.sendStatus(500);
            return console.log(error);
        } else {
            res.sendStatus(200);
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        }

    });
});

// AUTHENTICATE ME
router.post('/user', (req, res, next) => {
    let email = req.body;
    console.log('post req.body', email);
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DB_USER,
            pass: process.env.DB_PASS
        }
    });
=======
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.sendStatus(500);
                return console.log(error);
            } else {
                res.sendStatus(200);
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            }

        });
    });
// AUTHENTICATE ME
    router.post('/user', (req, res, next) => {
        var email = req.body;
        console.log('post req.body', email);
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.DB_USER,
                pass: process.env.DB_PASS 
            }
        });
>>>>>>> 9e45a2cfc9e36a1e110bb925410bb5a77d61fbf7

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Administrator" <pm.oasisforyouth@gmail.com>', // sender address  NEEDS ADDRESS
        // HOW TO DO THIS DYNAMICALLY
        to: email.email, // list of receivers NEEDS ADDRESS
        subject: 'New Admin', // Subject line
        text: 'Please click the following link: ' + 'http://localhost:5000/#/newAdmin ', // plain text body
    };

<<<<<<< HEAD
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
=======
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
>>>>>>> 9e45a2cfc9e36a1e110bb925410bb5a77d61fbf7
    });

module.exports = router;