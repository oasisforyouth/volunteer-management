myApp.controller('HomeController', function($location, UserService, $mdDialog) {
    console.log('HomeController created');
    var self = this;

    //directs user to login if they click the admin button on home page  
    self.goToLogin = function() {
        $location.path('/login');
    }

    //directs user to volunteer application if they click the volunteer button on home page 
    self.showConfirm = function(ev) {
        
            $location.path('/application');
            self.status = 'Thank you for volunteering!';
        }
    


});