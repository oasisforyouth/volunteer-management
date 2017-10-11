myApp.controller('ManageAdminController', ['$http', '$location', 'UserService', '$mdDialog', '$scope', function($http, $location, UserService, $mdDialog, $scope) {
    console.log('ManageAdminController created');
    var self = this;
    var toggle = false;
    self.status = '';
    // result = '';

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
    self.sendEmail = function(result) {
        console.log('email admin clicked', result);
        UserService.sendEmail(result);
    };

    self.promptDialog = function(ev) {
        var confirm = $mdDialog.prompt()
            .title('Enter their email address.')
            .placeholder('bob@bob.com')
            .ariaLabel('email address')
            .ok('Send Email')
            .cancel('Cancel');

        $mdDialog.show(confirm).then(function(result) {
            self.status = 'The email you entered was ' + result;
            console.log('result: ', result)
            self.sendEmail(result);
        }, function() {
            self.status = 'You didn\'t enter an email address.';

        });
    };


}]);