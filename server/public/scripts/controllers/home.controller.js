myApp.controller('HomeController', function($location, UserService, $mdDialog) {
    console.log('HomeController created');
    var self = this;

    //directs user to login if they click the admin button on home page  
    self.goToLogin = function() {
        $location.path('/login');
    }

    //directs user to volunteer application if they click the volunteer button on home page 
    self.showConfirm = function(ev) {
        var confirm = $mdDialog.confirm()
            .title('Are you 21 or over?')
            .textContent('If you are under the age of 21 you are not eligible to be a volunteer with Oasis for Youth.')
            .targetEvent(ev)
            .ok('I am 21+')
            .cancel('I am not 21');
        $mdDialog.show(confirm).then(function() {
            $location.path('/application');
            self.status = 'Thank you for volunteering!';
        }, function() {
            $location.path('/substituteorg');
            self.status = 'Try these organizations';
        });
    };


});