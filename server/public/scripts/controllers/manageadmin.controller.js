myApp.controller('ManageAdminController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('ManageAdminController created');
    var self = this;
    self.allUsers = UserService.allUsers;
    self.deleteAdmin = function(userId) {
        console.log('delete hit', userId);

        UserService.deleteAdmin(userId);
    }
    UserService.getAllUsers();


}]);