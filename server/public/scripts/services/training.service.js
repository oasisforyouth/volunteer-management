myApp.service('TrainingService', function($http, $location) {
    // console.log('training service loaded');
    var self = this;

    self.training = { list: [] };

    // OBTAINS TRAINING EVENTS FROM DB
    self.getTraining = function() {
        // console.log('getTraining hit');
        $http.get('/training').then(function(response) {
            self.training.list = response.data;
            console.log('get response', self.training.list);
        });
    };

});