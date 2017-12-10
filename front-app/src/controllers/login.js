angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr) {
    $scope.login = function() {
      if ($scope.user.email == 'admin@admin.com') {
          localStorage.setItem('auth', 'true');
          toastr.success('You have successfully signed in!');
          $location.path('/');
      } else
          toastr.error('Wrong email or password');
    };

  });
