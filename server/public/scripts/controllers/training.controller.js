myApp.controller('TrainingController', ['TrainingService', '$http', '$location', function(TrainingService, $http, $location) {
    console.log('TrainingController created');

    var self = this;

    self.TrainingService = TrainingService;
    TrainingService.getTraining();

    // ADDS NEW TRAININGS
    // self.addTraining = function() {
    //     console.log('addTraining button was clicked');
    // };
}]);