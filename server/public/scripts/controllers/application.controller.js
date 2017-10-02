myApp.controller('ApplicationController', ['$http', '$location', 'UserService', 'VolunteerService',  function($http, $location, UserService, VolunteerService) {
    console.log('ApplicationController created');
    var self = this;

    VolunteerService.postNewVolunteer();

}]);