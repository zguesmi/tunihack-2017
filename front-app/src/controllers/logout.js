angular.module('MyApp')
  .controller('LogoutCtrl', function($location, $auth, toastr) {
    localStorage.setItem('auth', false);
    toastr.info('You have been logged out');
    $location.path('/');

  });
