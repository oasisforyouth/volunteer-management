myApp.controller('HomeController', function ($location, UserService) {
  console.log('HomeController created');
  var vm = this;

  //directs user to login if they click the admin button on home page  
  vm.goToLogin = function () {
    $location.path('/login');
  }

  //directs user to volunteer application if they click the volunteer button on home page 
  vm.goToApplication = function () {
    $location.path('/application');
  }

});