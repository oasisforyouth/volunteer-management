myApp.service('UserService', ['$http', '$location', function($http, $location) {
    console.log('UserService Loaded');
    var self = this;
    var userObject = {};
    self.allUsers = { list: [] };


    self.getAllUsers = function() {
        console.log('UserService -- getAllUsers')
        $http.get('/user/allusers').then(function(response) {
            console.log('all users route response', response);
            self.allUsers.list = response.data;
        })
    }

    self.getuser = function() {
        console.log('UserService -- getuser');
        $http.get('/user').then(function(response) {
            if (response.data.user_name) {
                // user has a curret session on the server
                userObject.userName = response.data.user_name;
                console.log('UserService -- getuser -- User Data: ', userObject.userName);
            } else {
                console.log('UserService -- getuser -- failure');
                // user has no session, bounce them back to the login page
                $location.path("/login");
            }
        }, function(response) {
            console.log('UserService -- getuser -- failure: ', response);
            $location.path("/login");
        });
    }

    self.logout = function() {
        console.log('UserService -- logout');
        $http.get('/user/logout').then(function(response) {
            console.log('UserService -- logout -- logged out');
            $location.path("/login");
        });
    }

    // EMAILS NEW ADMIN SIGNUP LINK
    self.sendEmail = function(email) {
        console.log('sendemail', { email: email });
        $http.post('/email/user', { email: email }).then(function(response) {
            console.log('email sent to new Admin: ', response);
        });
    };

    //RESET PASSWORD ROUTE
    self.resetPassword = function(username) {
        console.log('reset password username: ', username);
        $http.post('/email/password', username).then(function(response) {
            console.log(' response resetPassword --', response);
        });
    };

    self.deleteAdmin = function(id) {
        $http({
            method: 'DELETE',
            url: '/user/' + id,
            success: function(response) {
                console.log('DeleteService response:', response);
            }
        })
        self.getAllUsers();
    };

    self.updateAdmin = function(user) {
        // console.log('updateAdmin hit', user);
        $http.put('/user/', user).then(function(response) {
            self.getAllUsers();
        })
    };

}]);