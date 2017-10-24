myApp.controller('TrainingController', ['TrainingService', '$http', '$location','$mdDialog', function (TrainingService, $http, $location,$mdDialog) {
    console.log('TrainingController created');

    var self = this;
    self.currentPage = "training";
    self.toggle = false;
    self.newTrainingToggle = false;
    self.trainings = TrainingService.trainings;
    TrainingService.getTrainings();

    // ADDS NEW TRAININGS
    self.addTraining = function () {
        console.log('addTraining button was clicked', self.newTraining);
        self.newTrainingToggle = false;
        self.toggle = false;
        TrainingService.addTraining(self.newTraining);
        self.newTraining = {};
    };

    // DELETES TRAINING
    self.deleteTraining = function (ev, trainingId) {
        var confirm = $mdDialog.confirm()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Delete training?')
            .textContent('If you delete, all of this volunteer\'s training data will be lost.')
            .ariaLabel('Delete Dialog')
            .ok('Delete Training')
            .cancel('Cancel')
            .targetEvent(ev)
        $mdDialog.show(confirm).then(function () {
            console.log('delete training was clicked', trainingId);
            TrainingService.deleteTraining(trainingId);
        }, function(){
            console.log('delete cancelled')
        });
    }

    // EDIT TRAINING
    self.updateTraining = function (trainingId) {

        // console.log('updateTraining button was clicked', trainingId);
        TrainingService.updateTraining(trainingId);
        self.toggle = false;
    };


}]);