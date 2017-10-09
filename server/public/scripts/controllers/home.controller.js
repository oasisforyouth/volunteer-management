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
            .textContent('If under 21 you are not eligible to be a volunteer.')
            .targetEvent(ev)
            .ok('I am 21 or over 21')
            .cancel('I am under 21');
        $mdDialog.show(confirm).then(function() {
            $location.path('/application');
            self.status = 'Thank you for volunteering!';
        }, function() {
            $location.path('/substituteorg');
            self.status = 'Try these organizations';
        });
    };


});