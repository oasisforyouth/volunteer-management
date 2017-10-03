myApp.service('TrainingService', function($http, $location) {
    // console.log('training service loaded');
    var self = this;

    self.training = { list: [] };

    // OBTAINS TRAINING EVENTS FROM DB
    self.getTraining = function() {
        // console.log('getTraining hit');
        $http.get('/training').then(function(response) {
            self.training.list = response.data;
            // console.log('get response', self.training.list);
        });
    };

    // DELETES TRAINING FROM DATABASE
    self.deleteTraining = function(trainingId) {
        // console.log('deleteTraining hit', trainingId);
        $http.delete('/training/' + trainingId).then(function(response) {
            self.getTraining();
        });
    };

    self.updateTraining = function(trainingId) {
        // console.log('updateTraining hit', trainingId);
        $http.put('/training/' + trainingId.id, trainingId).then(function(response) {
            self.getTraining();
        })
    };

});