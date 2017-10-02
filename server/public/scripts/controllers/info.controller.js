myApp.controller('InfoController', function(UserService) {
  console.log('InfoController created');
  var self = this;
  self.userService = UserService;
});
