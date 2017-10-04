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

    self.addAdmin = function(newAdmin) {
        console.log('UserService -- addAdmin', newAdmin);
        $http.post('/user', newAdmin).then(function(response) {
            console.log('UserService post response:', response);
        });
    }
    self.deleteAdmin = function(id) {
<<<<<<< HEAD
        $http({
            method: 'DELETE',
            url: '/user/' + id,
            success: function(response) {
                console.log('DeleteService response:', response);
            }
        })
        self.getAllUsers();
=======
        console.log('delete hit!', id);

        $http({
            method: 'DELETE',
            url: '/user',
            success: function(response) {
                console.log('UserService delete response:', response);
            }

        })

>>>>>>> master
    };

    self.editAdmin = function(id) {
        $http({
            method: 'PUT',
            url: '/users',
        })
    }
}]);