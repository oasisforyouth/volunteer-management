myApp.controller('LoginController', function($http, $location, $routeParams, UserService, $mdDialog, $scope) {
    console.log('LoginController created');
    var self = this;
    self.currentAdminId = $routeParams.id;
    self.currentPage = "login";
    console.log("current Admin ID: ", self.currentAdminId);
    self.user = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: ''
    };

    self.message = '';

    $scope.badAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Your code has been rejected')
            .textContent('Contact the Program Manager for a new email link')
            .ariaLabel('registration complete dialog')
            .ok('Ok')
            .targetEvent(ev)
        );
    };
    $scope.showAlert = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title('Your registration is complete!')
            .textContent('You now have access to the Oasis Volunteer Management System')
            .ariaLabel('registration complete dialog')
            .ok('Got it!')
            .targetEvent(ev)
        );
    };

    self.login = function() {
        console.log('LoginController -- login');
        if (self.user.username === '' || self.user.password === '') {
            self.message = "Enter your username and password!";
        } else {
            console.log('LoginController -- login -- sending to server...', self.user);
            $http.post('/', self.user).then(function(response) {
                if (response.data.user_name) {
                    console.log('LoginController -- login -- success: ', response.data);
                    // location works with SPA (ng-route)
                    $location.path('/overview'); // http://localhost:5000/#/overview
                } else {
                    console.log('LoginController -- login -- failure: ', response);
                    self.message = "Wrong!!";
                }
            }).catch(function(response) {
                console.log('LoginController -- registerUser -- failure: ', response);
                self.message = "Wrong!!";
            });
        }
    };

    // ADMIN SIGN UP POST ROUTE
    self.registerUser = function() {
        console.log('LoginController -- registerUser');
        if (self.user.username === '' || self.user.password === '') {
            self.message = "Choose a username and password!";
        } else {
            console.log('LoginController -- registerUser -- sending to server...', self.user);

            $http.put('/register/' + self.currentAdminId, self.user).then(function(response) {
                //         console.log('update response: ', response.status, response.data[0].active);
                //     if (response.status == 200 && response.data[0].active == true) {
                //         $http.post('/register', self.user).then(function(response) {
                //             console.log('LoginController -- registerUser -- success');
                //             $scope.showAlert();
                //             $location.path('/login');
                //         }).catch(function(response) {
                //             console.log('LoginController -- registerUser -- error');
                //             self.message = "Please try again."
                //         });
                //     } else {
                //         $scope.badAlert();
                //         self.message = "Link is inactive!!";
                //         console.log('No Admin fo you!');
                //     }
            }).catch(function(response) {
                console.log('LoginController -- registerUser -- error');
                self.message = "Please try again."
            });
        }

    }
    self.passwordReset = function() {
        console.log('LoginController -- registerUser');
        if (self.reset.username === '' || self.reset.password === '') {
            self.message = "Enter a username and NEW password!";
        } else {
            console.log('LoginController -- registerUser -- sending to server...', self.reset);

            $http.put('/register/reset/' + self.currentAdminId).then(function(response) {
                console.log('update response: ', response);
                // if (response.status == 200 && response.data[0].active == true) {
                //     $http.post('/register', self.user).then(function(response) {
                //         console.log('LoginController -- registerUser -- success');
                //         $scope.showAlert();
                //         $location.path('/login');
                //     }).catch(function(response) {
                //         console.log('LoginController -- registerUser -- error');
                //         self.message = "Please try again."
                //     });
                // } else {
                //     $scope.badAlert();
                //     self.message = "Link is inactive!!";
                //     console.log('No Admin fo you!');
                // }
            });
        }

    }

});