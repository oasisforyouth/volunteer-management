myApp.service('VolunteerService', function($http, $location) {
    console.log('volunteer service loaded');
    var self = this;
    self.allVolunteers = { list: [] };
    self.volunteerDetail = { list: {} };

    var volunteerInterestsObject = { //volunteer interests for each volunteer
        tutor_opportunity: 'Tutoring',
        dropin_opportunity: 'Drop-In Center',
        transportation_opportunity: 'Transportation',
        administration_opportunity: 'Administration',
        marketing_opportunity: 'Marketing',
        supplies_donations_opportunity: 'Supplies/Donations',
        fundraising_events_opportunity: 'Fundraising/Events'
    };

    var volunteerSkillsObject = { //volunteer skills for each volunteer
        tutoring_skill: 'Tutoring',
        cooking_skill: 'Cooking',
        art_skill: 'Art',
        health_wellness_skill: 'Health & Wellness',
        career_jobs_skill: 'Career Training'
    }

    self.emailProgramManager = function() {
        $http.post('/email').then(function(response) {
            console.log('email sent', response.data);
        });

    };

    self.postNewVolunteer = function(newVolunteer) {
        console.log('new volunteer object', newVolunteer);
        $http.post('/volunteer', newVolunteer).then(function(response) {
            console.log('completed the post route', response);
            self.emailProgramManager();
        });
    };

    self.getVolunteerDetail = function(currentVolunteerId){
        console.log('Hit volunteer detail request');
        $http.get('/volunteer/'+currentVolunteerId).then(function(response){
            console.log('response from current volunteer get', response.data);
            self.volunteerDetail.list = response.data[0];
        })
    }

    self.getAllVolunteers = function() {
        $http.get('/volunteer').then(function(response) {
            console.log('all volunteers from server', response.data);
            self.allVolunteers.list = response.data;
            for (var i = 0; i < self.allVolunteers.list.length; i++) {
                var volunteerInterests = ''; //variable to hold a list of volunteer interests as a string
                for (var property in self.allVolunteers.list[i]) { // for in loop goes through properties in each object of the allVolunteers.list array
                    if (volunteerInterestsObject[property]) { // is this property (from self.allVolunteers) in volunteerInterestsObject       
                        if (self.allVolunteers.list[i][property] == true) { //property is a variable that we define in the for loop - need to use brackets instead of dot notation
                            // volunteerInterests.push(volunteerInterestsObject[property]);
                            volunteerInterests += volunteerInterestsObject[property] + ', ';
                        }
                    }
                }
                volunteerInterests = volunteerInterests.substring(0, volunteerInterests.length - 2)
                self.allVolunteers.list[i].volunteerInterests = volunteerInterests;
            }
            for (var i = 0; i < self.allVolunteers.list.length; i++) {
                var volunteerSkills = '';
                for (var property in self.allVolunteers.list[i]) {
                    if (volunteerSkillsObject[property]) {
                        if (self.allVolunteers.list[i][property] == true) {
                            volunteerSkills += volunteerSkillsObject[property] + ', ';
                        }
                    }
                }
                volunteerSkills = volunteerSkills.substring(0, volunteerSkills.length - 2)
                self.allVolunteers.list[i].volunteerSkills = volunteerSkills;
            }
        });
    };

});







// {"list":[{"id":1,"first_name":"Troy","last_name":"Smith","middle_name":"T","maiden_name":null,

// "address":"123 Parkway Drive, Bloomington MN","time_at_address":"4",
// "primary_phone":"6512341234","secondary_phone":"6515431234",
// "email":"John.smith@themail.com",
// "preferred_contact":"Primary Phone",
// "emergency_name":"Terry Smith","emergency_phone":"6515431234","emergency_address":"123 Parkway Drive Bloomington MN","emergency_relationship":"Wife",

// "drivers_license":true,

// "reference_1_name":"James Peach","reference_1_address":"678 Skyway AVE","reference_1_phone":"6519871234","reference_1_email":"james.peach@themail.com","reference_1_years_known":"12","reference_1_relationship":"Childhood friend","reference_2_name":"Mary Houser","reference_2_address":"543","reference_2_phone":"6517652345","reference_2_email":"Mary.houser@themail.com","reference_2_years_known":"4","reference_2_relationship":"coworker",

// "volunteer_experience":"Big Brother program","additional_hobbies":"Spelunking","status":"Applied",




// "tutoring_skill":true,"cooking_skill":false,"art_skill":true,"health_wellness_skill":true,"career_jobs_skill":false,






// "tutor_opportunity":true,"dropin_opportunity":false,"transportation_opportunity":false,"administration_opportunity":false,"marketing_opportunity":true,"supplies_donations_opportunity":true,"fundraising_events_opportunity":true,"other_opportunity":null,

// "english":true,"spanish":false,"language_other":null,"hours_any":false,"hours_morning":false,"hours_afternoon":false,"hours_evening":true,"no_day_preference":true,"monday_preference":false,"tuesday_preference":false,"wednesday_preference":false,"thursday_preference":false,"friday_preference":false,"saturday_preference":false,"sunday_preference":false,"attended_orientation":true,"orientation_date":"2017-10-16T05:00:00.000Z","admin_notes":null,"volunteerInterests":"Tutoring, Marketing, Supplies/Donations, Fundraising/Events"}]}