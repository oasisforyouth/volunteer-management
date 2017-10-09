myApp.service('TrainingService', function($http, $location) {
    // console.log('training service loaded');
    var self = this;

    self.training = { list: [] };
    self.volunteerTraining = { list: [] };
    // OBTAINS TRAINING EVENTS FROM DB
    self.getTraining = function() {
        self.training.list = [];
        // console.log('getTraining hit');
        $http.get('/training').then(function(response) {
            self.training.list = response.data;
            console.log('training get response', self.training.list);
        });
    };
    self.getVolunteerTrainings = function() {
        self.volunteerTraining.list = [];
        // console.log('getTraining hit');
        $http.get('/training/volunteers').then(function(response) {
            self.volunteerTraining.list = response.data;
            console.log('training get response', self.volunteerTraining.list);
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