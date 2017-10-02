myApp.controller('OverviewController', function($http, $location, VolunteerService) {
    console.log('OverviewController created');
    self.allVolunteers = VolunteerService.allVolunteers;

    VolunteerService.getAllVolunteers();
});