myApp.controller('OverviewController',['NgMap', '$http', '$location', 'UserService', 'VolunteerService', function(NgMap, $http, $location, UserService,VolunteerService) {
    var self = this;
    console.log('OverviewController created');
    self.allVolunteers = VolunteerService.allVolunteers;

    self.placeChanged = function() {
        self.place = this.getPlace();
    }

    VolunteerService.getAllVolunteers();
}]);