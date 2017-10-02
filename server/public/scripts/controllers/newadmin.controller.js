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
}]);