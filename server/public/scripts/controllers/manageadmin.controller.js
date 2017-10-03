myApp.controller('ManageAdminController', ['$http', '$location', 'UserService', function($http, $location, UserService) {
    console.log('ManageAdminController created');
    var self = this;
    self.allUsers = UserService.allUsers;
    self.deleteAdmin = UserService.deleteAdmin;
    UserService.getAllUsers();


}]);