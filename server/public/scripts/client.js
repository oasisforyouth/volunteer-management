var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMap', 'md.data.table']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController as hc',
        })
        .when('/login', {
            templateUrl: '/views/templates/login.html',
            controller: 'LoginController as vm',
        })
        .when('/application', {
            templateUrl: '/views/templates/application.html',
            controller: 'ApplicationController as vm',
        })
        .when('/user', {
            templateUrl: '/views/templates/user.html',
            controller: 'UserController as vm',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/overview', {
            templateUrl: '/views/templates/overview.html',
            controller: 'OverviewController as vm',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/newAdmin/:id', {
            templateUrl: '/views/templates/newAdmin.html',
            controller: 'LoginController as vm',
            // DO I NEED THIS?
            // resolve: {
            //     getuser: function(UserService) {
            //         return UserService.getuser();
            //     }
            // }
        })
        .when('/passwordReset/:id', {
            templateUrl: '/views/templates/passwordReset.html',
            controller: 'LoginController as vm',
        })
        .when('/info', {
            templateUrl: '/views/templates/info.html',
            controller: 'InfoController',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/manageAdmin', {
            templateUrl: '/views/templates/manageAdmin.html',
            controller: 'ManageAdminController as vm',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/training', {
            templateUrl: '/views/templates/training.html',
            controller: 'TrainingController as vm',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/newAdminLogin', {
            templateUrl: '/views/templates/newAdminLogin.html',
            controller: 'LoginController as vm',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/volunteerDetail/:id', {
            templateUrl: '/views/templates/volunteerDetail.html',
            controller: 'VolunteerDetailController as vm',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/substituteorg', {
            templateUrl: '/views/templates/substituteorg.html'
        })
        .otherwise({
            redirectTo: 'home'
        });
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange')
        .warnPalette('red');
});