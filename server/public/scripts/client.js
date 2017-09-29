var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    console.log('myApp -- config')
    $routeProvider
        .when('/home', {
            templateUrl: '/views/templates/home.html',
            controller: 'LoginController as lc',
        })
        .when('/login', {
            templateUrl: '/views/templates/login.html',
            controller: 'LoginController as lc',
        })
        .when('/register', {
            templateUrl: '/views/templates/register.html',
            controller: 'LoginController as lc'
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
            controller: 'LoginController as lc',
        })
        .when('/volunteerDetail', {
            templateUrl: '/views/templates/volunteerDetail.html',
            controller: 'LoginController as lc',
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
        .when('/manageadmin', {
            templateUrl: '/views/manageadmin.html',
            controller: 'ManageAdminController as vm',
        })
        .when('/newadmin', {
            templateUrl: '/views/newadmin.html',
            controller: 'newAdminController as vm',
        })
        .when('/training', {
            templateUrl: '/views/training.html',
            controller: 'trainingController as vm',
        })
        .otherwise({
            redirectTo: 'home'
        });
});