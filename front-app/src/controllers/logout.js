angular.module('MyApp')
  .controller('LogoutCtrl', function($location, $auth, toastr) {

    $rootScope.authenticated = false;
    toastr.info('You have been logged out');
    $location.path('/');

  });
