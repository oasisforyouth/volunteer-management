myApp.controller('UserController', function(UserService) {
    console.log('UserController created');
    var self = this;
    self.userService = UserService;
    self.userObject = UserService.userObject;

    // POST ROUTE FOR NEW ADMIN SIGN-UP
    self.addAdmin = function() {
        console.log('Submit was clicked', self.newAdmin);
        UserService.addAdmin(self.newAdmin);
        // self.newAdmin = {};
    };


});