var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    router.post('/', function(req, res, next) {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.DB_USER, // generated ethereal user
                pass: process.env.DB_PASS // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Administrator" <pm.oasisforyouth@gmail.com>', // sender address  NEEDS ADDRESS
            to: 'nicbade@me.com', // list of receivers NEEDS ADDRESS
            subject: 'Volunteer Application', // Subject line
            text: 'A new Volunteer application has been submitted', // plain text body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
});

module.exports = router;