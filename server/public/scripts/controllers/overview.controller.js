myApp.controller('OverviewController', ['$http', '$location', 'UserService', 'VolunteerService', '$routeParams', function($http, $location, UserService, VolunteerService, $routeParams) {
    var self = this;
    console.log('OverviewController created');
    self.allVolunteers = VolunteerService.allVolunteers;
    VolunteerService.getAllVolunteers();

    
    self.showAllChecked = true
    self.showOnBoardingChecked = function() {
        self.showAllChecked = false;
        if (self.allVolunteers.status != 'Ready To Volunteer') {
            
        }
    }

    self.currentVolunteerId = $routeParams.id;
    

}]);