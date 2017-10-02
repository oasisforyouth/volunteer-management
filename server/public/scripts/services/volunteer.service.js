myApp.service('VolunteerService', function ($http, $location) {
    console.log('volunteer service loaded');
    var self = this;

    self.postNewVolunteer = function(){
        $http.get('/volunteer').then(function(response){
            console.log('completed the post route', response);
        })
    }

})