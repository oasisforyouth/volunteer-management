myApp.service('TrainingService', function($http, $location) {
    // console.log('training service loaded');
    var self = this;

    self.trainings = { list: [] };
    self.volunteerTrainings = { list: [] };
    self.completedTrainings = { list: [] };
    // OBTAINS TRAINING EVENTS FROM DB
    self.getTrainings = function() {
        self.trainings.list = [];
        // console.log('getTraining hit');
        $http.get('/training').then(function(response) {
            self.trainings.list = response.data;
            console.log('trainings get response', self.trainings.list);
        });
    };
    self.getVolunteerTrainings = function() {
        //self.volunteerTraining.list = [];
        // console.log('getTraining hit');
        $http.get('/training/volunteers').then(function(response) {
            self.volunteerTrainings.list = response.data;
            console.log('training get response', self.volunteerTrainings.list);
        });
    };

    self.getCompletedTrainings = function(traineeId) {
        $http.get('/completedTrainings/' + traineeId).then(function(response) {
            self.completedTrainings.list = response.data;
            console.log('completedTrainings response', response.data);
        })
    }

    self.updateCompletedTraining = function(traineeId, trainingId, completionDate) {
        let updateTrainingDate = { traineeId: traineeId, trainingId: trainingId, completionDate: completionDate }
        $http.post('/completedTrainings', updateTrainingDate).then(function(response) {
            self.getCompletedTrainings(traineeId);
        })
    }

    // DELETES TRAINING FROM DATABASE
    self.deleteTraining = function(trainingId) {
        //console.log('deleteTraining hit', trainingId);
        $http.delete('/training/' + trainingId).then(function (response) {

            self.getTrainings();
        });
    };

    // EDITS FROM TRAINING.HTML TO DATABASE
    self.updateTraining = function(trainingId) {
        // console.log('updateTraining hit', trainingId);
        $http.put('/training/' + trainingId.id, trainingId).then(function (response) {
            self.getTrainings();

        })
    };

    // ADD A NEW TRAINING TO THE DATABASE
    self.addTraining = function(newTraining) {

        console.log(newTraining);
        $http.post('/training', newTraining).then(function(response) {
            console.log('service post was returned: ', response);

            self.getTrainings();
        });
    };
});