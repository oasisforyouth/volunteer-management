
myApp.controller('VolunteerDetailController', 'VolunteerService', 'UserService', '$routeParams', function($http, $location, UserService, $routeParams, VolunteerService) {
    console.log('VolunteerDetailController created');
    var self = this;
    VolunteerService.getAllVolunteers($routeParams.id);
    self.currentVolunteerId = $routeParams.id;
});