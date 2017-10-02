myApp.controller('OverviewController', function($http, $location, UserService) {
    console.log('OverviewController created');
    self.allVolunteers = VolunteerService.allVolunteers;

    VolunteerService.getAllVolunteers();
});