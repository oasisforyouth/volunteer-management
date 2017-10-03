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

    // EDITS FROM TRAINING.HTML TO DATABASE
    self.updateTraining = function(trainingId) {
        // console.log('updateTraining hit', trainingId);
        $http.put('/training/' + trainingId.id, trainingId).then(function(response) {
            self.getTraining();
        })
    };

    // ADD A NEW TRAINING TO THE DATABASE
    self.addTraining = function(newTraining) {
        console.log(newTraining);
        $http.post('/training', newTraining).then(function(response) {
            console.log('service post was returned: ', response);
            self.getTraining();
        });
    };
});