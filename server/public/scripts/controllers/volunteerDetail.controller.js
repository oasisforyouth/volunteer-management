
myApp.controller('VolunteerDetailController', ['VolunteerService', 'UserService', '$routeParams', 'TrainingService','$http', '$location', function(VolunteerService, UserService, $routeParams, TrainingService, $http, $location,) {
    console.log('VolunteerDetailController created');
    var self = this;
    self.trainings = TrainingService.volunteerTrainings;
    self.volunteerDetail = VolunteerService.volunteerDetail;
    self.completedTrainings = TrainingService.completedTrainings;
    self.currentVolunteerId = $routeParams.id;//filters to the current user from the whole list of users instead of running another query
    VolunteerService.getVolunteerDetail($routeParams.id);
    TrainingService.getCompletedTrainings($routeParams.id);
    TrainingService.getVolunteerTrainings();
}]);