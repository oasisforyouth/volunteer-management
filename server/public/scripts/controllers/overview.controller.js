myApp.controller('OverviewController',['$http', '$location', 'UserService', 'VolunteerService', function($http, $location, UserService,VolunteerService) {

    console.log('OverviewController created');
    self.allVolunteers = VolunteerService.allVolunteers;

    VolunteerService.getAllVolunteers();
}]);