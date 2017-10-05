myApp.controller('VolunteerDetailController', function($http, $location, UserService, TrainingService) {
    console.log('VolunteerDetailController created');
    var self = this;
    self.trainings = TrainingService.volunteerTraining;
    TrainingService.getVolunteerTrainings();
    console.log('trainings on controller,', self.trainings);
});