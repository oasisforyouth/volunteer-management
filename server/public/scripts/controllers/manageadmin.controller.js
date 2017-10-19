myApp.controller('ManageAdminController', ['$http', '$location', 'UserService', '$mdDialog', '$scope', function($http, $location, UserService, $mdDialog, $scope) {
    console.log('ManageAdminController created');
    var self = this;
    self.currentPage = "manageAdmin";

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


    // DELETE ADMINISTRATOR
    self.deleteAdmin = function (ev, id) {
        
        let confirm = $mdDialog.confirm()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Delete administrator?')
            .textContent('If you delete, this administrator will no longer have access to the system.')
            .ariaLabel('Delete Dialog')
            .ok('Delete Administrator')
            .cancel('Cancel')
            .targetEvent(ev)
        $mdDialog.show(confirm).then(function () {
            console.log('delete confirmed')
            UserService.deleteAdmin(id);
        }, function(){
            console.log('delete cancelled')
        });
    }


    // RESET PASSWORD 
    self.resetPassword = function(result) {
        console.log('reset password username: ', result);
        UserService.resetPassword(result);
        console.log('result: ', result);
    };

    // self.resetPrompt = function(ev) {
    //     var confirm = $mdDialog.prompt()
    //         .title('Enter their username')
    //         .placeholder('Username')
    //         .ariaLabel('username')
    //         .ok('Send Email')
    //         .cancel('Cancel')

    //     $mdDialog.show(confirm).then(function(result) {
    //         self.status = 'An reset password link has been sent to ' + result;
    //         console.log('result: ', result)
    //         self.resetPassword(result);
    //     }, function() {
    //         self.status = 'You didn\'t enter a username.';
    //     });
    // };

    // SEND NEW ADMIN SIGN UP EMAIL LINK
    self.sendEmail = function(result) {
        console.log('email admin clicked', result);
        UserService.sendEmail(result);
    };
    // ADD ADMIN EMAIL
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