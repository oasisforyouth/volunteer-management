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

    self.editAdmin = function() {
        console.log('edit admin hit');
        self.newField = {};
        self.editing = false;

        self.editAppKey = function(field) {
            self.editing = self.appkeys.indexOf(field);
            self.newField = angular.copy(field);
        }

        self.saveField = function(index) {
            if (self.editing !== false) {
                self.appkeys[self.editing] = self.newField;
                self.editing = false;
            }
        };

        self.cancel = function(index) {
            if (self.editing !== false) {
                self.appkeys[self.editing] = self.newField;
                self.editing = false;
            }
        };
    }


}]);