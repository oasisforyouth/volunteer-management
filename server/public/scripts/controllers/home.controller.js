myApp.controller('HomeController', function($location, UserService) { 
    console.log('HomeController created');
    var vm = this;

    //directs user to login if hey click the admin button on home page  
    vm.goToLogin = function(){
    $location.path('/login');
  }

});