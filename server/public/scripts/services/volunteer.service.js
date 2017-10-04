myApp.service('VolunteerService', function ($http, $location) {
    console.log('volunteer service loaded');
    var self = this;
    self.allVolunteers = { list: [] };

    var volunteerInterestsObject = { //volunteer interests for each volunteer
        tutor_opportunity: 'Tutoring',
        dropin_opportunity: 'Drop-In Center',
        transportation_opportunity: 'Transportation',
        administration_opportunity: 'Administration',
        marketing_opportunity: 'Marketing',
        supplies_donations_opportunity: 'Supplies/Donations',
        fundraising_events_opportunity: 'Fundraising/Events'
    };

    self.postNewVolunteer = function (newVolunteer) {
        console.log('new volunteer object', newVolunteer);
        $http.post('/volunteer', newVolunteer).then(function (response) {
            console.log('completed the post route', response);
        });
    };

    self.getAllVolunteers = function () {
        $http.get('/volunteer').then(function (response) {
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
        });
    };

});