
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
    self.updateCompletedTraining = function(completedDate, trainingId){
        TrainingService.updateCompletedTraining($routeParams.id, trainingId, completedDate);
        console.log('completed date data controller, ', $routeParams.id, trainingId, completedDate);
    }
    self.udpateVolunteer = function(){
        console.log('update volunteer', self.volunteerDetail);
        VolunteerService.updateVolunteer(self.volunteerDetail.list);
    }
}]);