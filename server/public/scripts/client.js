var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

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
            controller: 'OverviewController as oc',
        })
        .when('/volunteerDetail', {
            templateUrl: '/views/templates/volunteerDetail.html',
            controller: 'VolunteerDetailController as vc',
        })
        .when('/newAdmin', {
            templateUrl: '/views/templates/newAdmin.html',
            controller: 'NewAdminController as nc',
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
        })
        .when('/training', {
            templateUrl: '/views/templates/training.html',
            controller: 'TrainingController as tc',
        })
        .otherwise({
            redirectTo: 'home'
        });
});