var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js')
var nodemailer = require('nodemailer');

router.post('/', function (req, res) {
    let volunteer = req.body;
    console.log('post route hit server', volunteer)

    pool.connect(function (errorconnecting, client, done) {
        if (errorconnecting) {
            console.log('error connecting to databse,', errorconnecting)
            res.sendStatus(500)
        } else {
            client.query(`INSERT INTO volunteers (first_name,last_name, middle_name, maiden_name, address, time_at_address, primary_phone,secondary_phone ,email, preferred_contact,emergency_name,  emergency_phone, emergency_address, emergency_relationship, drivers_license , reference_1_name ,reference_1_address, reference_1_phone,reference_1_email, reference_1_years_known,reference_1_relationship,reference_2_name , reference_2_address ,reference_2_phone , reference_2_email , reference_2_years_known , reference_2_relationship , volunteer_experience , additional_hobbies , status, tutoring_skill, cooking_skill,art_skill, health_wellness_skill,career_jobs_skill, tutor_opportunity,dropin_opportunity,transportation_opportunity,administration_opportunity, marketing_opportunity, supplies_donations_opportunity, fundraising_events_opportunity, other_opportunity,english, spanish,language_other, hours_any,hours_morning,hours_afternoon, hours_evening, no_day_preference, monday_preference,tuesday_preference,wednesday_preference,thursday_preference,friday_preference,saturday_preference, sunday_preference, attended_orientation, orientation_date, frequency, medical_concerns,over_21)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61,$62,$63)`, [volunteer.firstName, volunteer.lastName, volunteer.middleName, volunteer.maidenName, volunteer.address, volunteer.timeAtAddress, volunteer.primaryPhone, volunteer.secondaryPhone, volunteer.email, volunteer.preferredContact, volunteer.emergencyName, volunteer.emergencyPhone, volunteer.emergencyAddress, volunteer.emergencyRelationship, volunteer.driversLicense, volunteer.reference1Name, volunteer.reference1Address, volunteer.reference1Phone, volunteer.reference1Email, volunteer.reference1YearsKnown, volunteer.reference1Relationship, volunteer.reference2Name, volunteer.reference2Address, volunteer.reference2Phone, volunteer.reference2Email, volunteer.reference2YearsKnown, volunteer.reference2Relationship, volunteer.volunteerExperience, volunteer.additionalHobbies, volunteer.status, volunteer.tutoringSkill, volunteer.cookingSkill, volunteer.artSkill, volunteer.healthWellnessSkill, volunteer.careerJobsSkill, volunteer.tutorOpportunity, volunteer.dropinOpportunity, volunteer.transportationOpportunity, volunteer.administrationOpportunity, volunteer.marketingOpportunity, volunteer.suppliesDonationsOpportunity, volunteer.fundraisingEventsOpportunity, volunteer.otherOpportunity, volunteer.english, volunteer.spanish, volunteer.languageOther, volunteer.hoursAny, volunteer.hoursMorning, volunteer.hoursAfternoon, volunteer.hoursEvening, volunteer.noDayPreference, volunteer.mondayPreference, volunteer.tuesdayPreference, volunteer.wednesdayPreference, volunteer.thursdayPreference, volunteer.fridayPreference, volunteer.saturdayPreference, volunteer.sundayPreference, volunteer.attendedOrientation, volunteer.orientationDate, volunteer.frequency, volunteer.medicalConcerns, volunteer.over21],
                function (errormakingquery, result) {
                    done();
                    if (errormakingquery) {
                        console.log('error making query', errormakingquery);
                        res.sendStatus(500);
                    } else {

                        // NOTICE EMAIL SENT TO PROGRAM MANAGER
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            auth: {
                                user: process.env.DB_USER,
                                pass: process.env.DB_PASS
                            }
                        });
                        var mailOptions = {
                            from: '"Administrator"' + process.env.DB_EMAIL,
                            to: process.env.DB_EMAIL,
                            subject: 'Volunteer Application',
                            text: volunteer.firstName + ' ' + volunteer.lastName + ' has submitted a volunteer application.'
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) {
                                return console.log(error)
                            }
                            console.log('Message sent: %s', info.messageId);
                            console.log('Preview URL: %s', nodemailer.getTestMessageURL(info));
                        });
                    }
                }
            )
        }
    })
})

router.get('/:id', function (req, res) {
    let volunteerId = req.params.id;
    if (req.isAuthenticated()) {
        console.log('current volunteer route reached,', volunteerId);
        pool.connect(function (errorconnecting, client, done) {
            if (errorconnecting) {
                res.sendStatus(500);
            } else {
                client.query('SELECT * FROM volunteers WHERE id = $1', [volunteerId], function (errormakingquery, result) {
                    done();
                    if (errormakingquery) {
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
            }
        })
    } else {
        console.log('not logged in');
        res.sendStatus(403);
    } // end pool
}) //end router

router.get('/', function (req, res) {
    console.log('Volunteer get route reached');
    if (req.isAuthenticated()) {
        pool.connect(function (errorconnecting, client, done) {
            if (errorconnecting) {
                res.sendStatus(500);
            } else {
                client.query('SELECT * FROM volunteers;', function (errormakingquery, result) {
                    done();
                    if (errormakingquery) {
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                    }
                })
            }
        })
    } else {
        console.log('not logged in');
        res.sendStatus(403);
    }
})

router.put('/update', function (req, res) {
    let volunteer = req.body;
    console.log('update route hit server', volunteer)
    if (req.isAuthenticated()) {

        pool.connect(function (errorconnecting, client, done) {
            if (errorconnecting) {
                console.log('error connecting to database,', errorconnecting)
                res.sendStatus(500)
            } else {
                console.log('update route hit server', volunteer)
                client.query(`UPDATE volunteers SET first_name = $1,last_name = $2, middle_name = $3,maiden_name = $4,address = $5,time_at_address = $6,primary_phone = $7,secondary_phone = $8,email = $9,preferred_contact = $10,emergency_name = $11,emergency_phone = $12,emergency_address = $13,emergency_relationship = $14,drivers_license = $15,reference_1_name = $16,reference_1_address = $17,reference_1_phone = $18,reference_1_email = $19,reference_1_years_known = $20,reference_1_relationship = $21,    reference_2_name = $22,reference_2_address = $23,reference_2_phone = $24,reference_2_email = $25, reference_2_years_known = $26,reference_2_relationship = $27,    volunteer_experience = $28,additional_hobbies = $29,status = $30,tutoring_skill = $31,cooking_skill = $32,art_skill = $33,health_wellness_skill = $34,career_jobs_skill = $35,  tutor_opportunity = $36,dropin_opportunity = $37,transportation_opportunity = $38,administration_opportunity = $39,marketing_opportunity = $40,   supplies_donations_opportunity = $41,fundraising_events_opportunity = $42,other_opportunity = $43,english =$44,spanish = $45,language_other = $46,hours_any = $47,hours_morning = $48,hours_afternoon = $49,hours_evening = $50,no_day_preference = $51,monday_preference = $52,tuesday_preference = $53,wednesday_preference = $54,thursday_preference = $55,friday_preference = $56,saturday_preference = $57,sunday_preference = $58,attended_orientation = $59,orientation_date = $60,admin_notes = $61,  frequency = $62,medical_concerns = $63,over_21 = $64
             WHERE id = $65;`, [volunteer.first_name, volunteer.last_name, volunteer.middle_name, volunteer.maiden_name, volunteer.address, volunteer.time_at_address, volunteer.primary_phone, volunteer.secondary_phone, volunteer.email, volunteer.preferred_contact, volunteer.emergency_name, volunteer.emergency_phone, volunteer.emergency_address, volunteer.emergency_relationship, volunteer.drivers_license, volunteer.reference_1_name, volunteer.reference_1_address, volunteer.reference_1_phone, volunteer.reference_1_email, volunteer.reference_1_years_known, volunteer.reference_1_relationship, volunteer.reference_2_name, volunteer.reference_2_address, volunteer.reference_2_phone, volunteer.reference_2_email, volunteer.reference_2_years_known, volunteer.reference_2_relationship, volunteer.volunteer_experience, volunteer.additional_hobbies, volunteer.status, volunteer.tutoring_skill, volunteer.cooking_skill, volunteer.art_skill, volunteer.health_wellness_skill, volunteer.career_jobs_skill, volunteer.tutor_opportunity, volunteer.dropin_opportunity, volunteer.transportation_opportunity, volunteer.administration_opportunity, volunteer.marketing_opportunity, volunteer.supplies_donations_opportunity, volunteer.fundraising_events_opportunity, volunteer.other_opportunity, volunteer.english, volunteer.spanish, volunteer.language_other, volunteer.hours_any, volunteer.hours_morning, volunteer.hours_afternoon, volunteer.hours_evening, volunteer.no_day_preference, volunteer.monday_preference, volunteer.tuesday_preference, volunteer.wednesday_preference, volunteer.thursday_preference, volunteer.friday_preference, volunteer.saturday_preference, volunteer.sunday_preference, volunteer.attended_orientation, volunteer.orientation_date, volunteer.admin_notes, volunteer.frequency, volunteer.medical_concerns, volunteer.over_21, volunteer.id],
                    function (errormakingquery, result) {
                        done();
                        if (errormakingquery) {
                            console.log('error making query', errormakingquery);
                            res.sendStatus(500);
                        } else {
                            res.sendStatus(200);
                        }
                    }
                )
            }
        })
    } else {
        console.log('not logged in');
        res.sendStatus(403);
    }

})

router.delete('/delete/:id', function(req,res){
    let ID = req.params.id;
    if (req.isAuthenticated()) {
        console.log('reached delete route,', ID);
    }else{

    }
})

module.exports = router;