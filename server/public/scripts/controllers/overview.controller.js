myApp.controller('OverviewController', function($http, $location, UserService) {
    console.log('OverviewController created');
    var self = this;
    self.allVolunteers = VolunteerService.allVolunteers;

    VolunteerService.getAllVolunteers();
});