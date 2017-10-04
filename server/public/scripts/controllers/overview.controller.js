myApp.controller('OverviewController', ['$http', '$location', 'UserService', 'VolunteerService', function ($http, $location, UserService, VolunteerService) {
    var self = this;
    console.log('OverviewController created');
    self.allVolunteers = VolunteerService.allVolunteers;

    VolunteerService.getAllVolunteers();  
}]);