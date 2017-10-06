myApp.controller('ManageAdminController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('ManageAdminController created');
    var self = this;
    var toggle = false;
    self.allUsers = UserService.allUsers;
    self.deleteAdmin = function(userId) {
        console.log('delete hit', userId);
        UserService.deleteAdmin(userId);
    }
    UserService.getAllUsers();

    self.updateAdmin = function(user) {
        console.log('updateAdmin was clicked', user);
        UserService.updateAdmin(user);
        self.toggle = false;
    };

    // SEND NEW ADMIN SIGN UP EMAIL LINK
    self.sendEmail = function() {
        console.log('email admin clicked', self.emailAdmin);
        UserService.sendEmail(self.emailAdmin);
    };
}]);