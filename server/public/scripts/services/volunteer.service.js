myApp.service('VolunteerService', function($http, $location) {
    // console.log('volunteer service loaded');
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

    self.postNewVolunteer = function(newVolunteer) {
        console.log('new volunteer object', newVolunteer);
        $http.post('/volunteer', newVolunteer).then(function(response) {
            console.log('completed the post route', response);
        });
    };

    self.getVolunteerDetail = function(currentVolunteerId) {
        console.log('Hit volunteer detail request');
        $http.get('/volunteer/' + currentVolunteerId).then(function(response) {
            console.log('response from current volunteer get', response.data);
            self.volunteerDetail.list = response.data[0];
        })
    }
    self.updateVolunteer = function(updatedVolunteer) {
        $http.put('/volunteer/update', updatedVolunteer).then(function(response) {
            self.getVolunteerDetail(updatedVolunteer.id);
        })
    }
    self.getAllVolunteers = function() {
        $http.get('/volunteer').then(function(response) {
            // console.log('all volunteers from server', response.data);
            self.allVolunteers.list = response.data;

            for (var i = 0; i < self.allVolunteers.list.length; i++) { //loop through allVolunteers.list array

                var orientation = new Date(self.allVolunteers.list[i].orientation_date);
                var today = new Date();
                var months;
                months = (today.getFullYear() - orientation.getFullYear()) * 12;
                months -= orientation.getMonth() + 1;
                months += today.getMonth();
                if (months < 0) {
                    months = 0;
                }
                self.allVolunteers.list[i].months = months;
                console.log('months data', self.allVolunteers.list[i].months);

                var volunteerInterests = ''; //variable to hold a list of volunteer interests as a string
                for (var property in self.allVolunteers.list[i]) { // for in loop goes through properties in each object of the allVolunteers.list array
                    if (volunteerInterestsObject[property]) { // is the property (from self.allVolunteers) also in volunteerInterestsObject      
                        if (self.allVolunteers.list[i][property] == true) { //is the property a variable that we define in the for loop - need to use brackets instead of dot notation
                            volunteerInterests += volunteerInterestsObject[property] + ', '; //add them to volunteerIntersts variable
                        }
                    }
                }
                volunteerInterests = volunteerInterests.substring(0, volunteerInterests.length - 2) // removes the comma and space from the end of the string 
                self.allVolunteers.list[i].volunteerInterests = volunteerInterests; //sets a new property for each object within allVolunteers.list array equal to the new string
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