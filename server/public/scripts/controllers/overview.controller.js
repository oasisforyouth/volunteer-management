myApp.controller('OverviewController', ['VolunteerService', function(VolunteerService, $http, $location, UserService) {
    console.log('OverviewController created');
    var vm = this;
    vm.volunteerData = VolunteerService.volunteerData;


    vm.getVolunteers = function(){
        VolunteerService.getVolunteers();
    }


    vm.getVolunteers();
}]);