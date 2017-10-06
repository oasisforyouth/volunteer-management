myApp.controller('NewAdminController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('NewAdminController created');
    var self = this;
    self.UserService = UserService;

    // POST ROUTE FOR NEW ADMIN SIGN-UP
    self.addAdmin = function() {
        console.log('Submit was clicked', self.newAdmin);
        UserService.addAdmin(self.newAdmin);
        // self.newAdmin = {};
    };

    self.registerUser = function() {
        console.log('LoginController -- registerUser');
        if (self.user.username === '' || self.user.password === '') {
            self.message = "Choose a username and password!";
        } else {
            console.log('LoginController -- registerUser -- sending to server...', self.user);
            $http.post('/register', self.user).then(function(response) {
                console.log('LoginController -- registerUser -- success');
                $location.path('/login');
            }).catch(function(response) {
                console.log('LoginController -- registerUser -- error');
                self.message = "Please try again."
            });
        }
    }
}]);