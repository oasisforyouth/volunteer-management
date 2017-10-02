myApp.controller('OverviewController', function($http, $location, VolunteerService) {
    console.log('OverviewController created');
    var self = this;
    self.allVolunteers = VolunteerService.allVolunteers;

    VolunteerService.getAllVolunteers();
});