myApp.controller('NewAdminController', function($http, $location, UserService) {
    console.log('NewAdminController created');
    var self = this;

    // self.newAdmin = {
    //     firstName: '',
    //     lastName: '',
    //     username: '',
    //     email: ''
    // };


    self.submitAdmin = function() {
        console.log('Submit was clicked', self.newAdmin);
        self.newAdmin = {};
    };
});