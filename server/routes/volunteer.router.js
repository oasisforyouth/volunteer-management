var express = require('express');
var router = express.Router();
var path = require('path');
var pool = require('../modules/pool.js')


router.post('/', function(req, res) {
    let volunteer = req.body;
    console.log('post route hit server', volunteer)

    pool.connect(function(errorconnecting, client, done) {
        if (errorconnecting) {
            console.log('error connecting to databse,', errorconnecting)
            res.sendStatus(500)
        } else {
            client.query(`INSERT INTO volunteers (first_name,last_name, middle_name, maiden_name, address, time_at_address, primary_phone,secondary_phone ,email, preferred_contact,emergency_name,  emergency_phone, emergency_address, emergency_relationship, drivers_license , reference_1_name ,reference_1_address, reference_1_phone,reference_1_email, reference_1_years_known,reference_1_relationship,reference_2_name , reference_2_address ,reference_2_phone , reference_2_email , reference_2_years_known , reference_2_relationship , volunteer_experience , additional_hobbies , status, tutoring_skill, cooking_skill,art_skill, health_wellness_skill,career_jobs_skill, tutor_opportunity,dropin_opportunity,transportation_opportunity,administration_opportunity, marketing_opportunity, supplies_donations_opportunity, fundraising_events_opportunity, other_opportunity,english, spanish,language_other, hours_any,hours_morning,hours_afternoon, hours_evening, no_day_preference, monday_preference,tuesday_preference,wednesday_preference,thursday_preference,friday_preference,saturday_preference, sunday_preference, attended_orientation, orientation_date, frequency)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39,$40,$41,$42,$43,$44,$45,$46,$47,$48,$49,$50,$51,$52,$53,$54,$55,$56,$57,$58,$59,$60,$61)`, [volunteer.firstName, volunteer.lastName, volunteer.middleName, volunteer.maidenName, volunteer.address, volunteer.timeAtAddress, volunteer.primaryPhone, volunteer.secondaryPhone, volunteer.email, volunteer.preferredContact, volunteer.emergencyName, volunteer.emergencyPhone, volunteer.emergencyAddress, volunteer.emergencyRelationship, volunteer.driversLicense, volunteer.reference1Name, volunteer.reference1Address, volunteer.reference1Phone, volunteer.reference1Email, volunteer.reference1YearsKnown, volunteer.reference1Relationship, volunteer.reference2Name, volunteer.reference2Address, volunteer.reference2Phone, volunteer.reference2Email, volunteer.reference2YearsKnown, volunteer.reference2Relationship, volunteer.volunteerExperience, volunteer.additionalHobbies, volunteer.status, volunteer.tutoringSkill, volunteer.cookingSkill, volunteer.artSkill, volunteer.healthWellnessSkill, volunteer.careerJobsSkill, volunteer.tutorOpportunity, volunteer.dropinOpportunity, volunteer.transportationOpportunity, volunteer.administrationOpportunity, volunteer.marketingOpportunity, volunteer.suppliesDonationsOpportunity, volunteer.fundraisingEventsOpportunity, volunteer.otherOpportunity, volunteer.english, volunteer.spanish, volunteer.languageOther, volunteer.hoursAny, volunteer.hoursMorning, volunteer.hoursAfternoon, volunteer.hoursEvening, volunteer.noDayPreference, volunteer.mondayPreference, volunteer.tuesdayPreference, volunteer.wednesdayPreference, volunteer.thursdayPreference, volunteer.fridayPreference, volunteer.saturdayPreference, volunteer.sundayPreference, volunteer.attendedOrientation, volunteer.orientationDate, volunteer.frequency],
                function(errormakingquery, result) {
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

})
router.get('/:id', function(req, res) {
    let volunteerId = req.params.id;
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

        console.log('current volunteer route reached,', volunteerId);
        pool.connect(function(errorconnecting, client, done) {
            if (errorconnecting) {
                res.sendStatus(500);
            } else {
                client.query('SELECT * FROM volunteers WHERE id = $1', [volunteerId], function(errormakingquery, result) {
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
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
})

router.get('/', function(req, res) {
    console.log('Volunteer get route reached');
    if (req.isAuthenticated()) {
        // send back user object from database
        console.log('logged in', req.user);

        pool.connect(function(errorconnecting, client, done) {
            if (errorconnecting) {
                res.sendStatus(500);
            } else {
                client.query('SELECT * FROM volunteers;', function(errormakingquery, result) {
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
        // failure best handled on the server. do redirect here.
        console.log('not logged in');
        res.sendStatus(403);
    }
})



module.exports = router;