myApp.controller('OverviewController', function($http, $location, UserService) {
    console.log('OverviewController created');
    var vm = this;
    // vm.volunteerData = VolunteerService.volunteerData;
    vm.volunteerData = ['chip','john','jane']

    // vm.getVolunteers = function(){
    //     VolunteerService.getVolunteers();
    // }


    // vm.getVolunteers();
});