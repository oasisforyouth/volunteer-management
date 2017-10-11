myApp.controller('TrainingController', ['TrainingService', '$http', '$location', function(TrainingService, $http, $location) {
    console.log('TrainingController created');

    var self = this;

    self.toggle = false;
    self.newTrainingToggle = false;
    self.trainings = TrainingService.trainings;
    TrainingService.getTrainings();

    // ADDS NEW TRAININGS
    self.addTraining = function() {
        console.log('addTraining button was clicked', self.newTraining);
        self.newTrainingToggle = false;
        self.toggle = false;
        TrainingService.addTraining(self.newTraining);
        self.newTraining = {};
    };

    // DELETES TRAINING
    self.deleteTraining = function(trainingId) {
        console.log('delete training was clicked', trainingId);
        TrainingService.deleteTraining(trainingId);
    };

    // EDIT TRAINING
    self.updateTraining = function(trainingId) {
        // console.log('updateTraining button was clicked', trainingId);
        TrainingService.updateTraining(trainingId);
        self.toggle = false;
    };
}]);