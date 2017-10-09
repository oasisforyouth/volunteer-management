var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMap']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'HomeController as hc',
        })
        .when('/login', {
            templateUrl: '/views/templates/login.html',
            controller: 'LoginController as lc',
        })
        .when('/application', {
            templateUrl: '/views/templates/application.html',
            controller: 'ApplicationController as ac',
        })
        .when('/user', {
            templateUrl: '/views/templates/user.html',
            controller: 'UserController as uc',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/overview', {
            templateUrl: '/views/templates/overview.html',
            controller: 'OverviewController as oc',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/newAdmin', {
            templateUrl: '/views/templates/newAdmin.html',
            controller: 'LoginController as lc',
            // DO I NEED THIS?
            // resolve: {
            //     getuser: function(UserService) {
            //         return UserService.getuser();
            //     }
            // }
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
            controller: 'ManageAdminController as mc',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/training', {
            templateUrl: '/views/templates/training.html',
            controller: 'TrainingController as tc',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/newAdminLogin', {
            templateUrl: '/views/templates/newAdminLogin.html',
            controller: 'LoginController as lc',
            resolve: {
                getuser: function(UserService) {
                    return UserService.getuser();
                }
            }
        })
        .when('/volunteerDetail/:id', {
            templateUrl: '/views/templates/volunteerDetail.html',
            controller: 'VolunteerDetailController as vc',
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
});