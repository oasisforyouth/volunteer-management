myApp.service('VolunteerService', function ($http, $location) {
    console.log('volunteer service loaded');
    var self = this;
    self.allVolunteers = {list:[]};

    self.postNewVolunteer = function(){
        $http.post('/volunteer').then(function(response){
            console.log('completed the post route', response);
        })
    }
    self.getAllVolunteers = function(){
        $http.get('/volunteer').then(function(response){
            console.log('all volunteers from server', response.data);
            self.allVolunteers.list = response.data;

        })
    }

})