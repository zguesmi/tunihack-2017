angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr, $rootScope) {
    $scope.login = function() {
      if ($scope.user.email == 'admin@admin.com') {
          $rootScope.authenticated = true;
          toastr.success('You have successfully signed in!');
          $location.path('/');
      } else
          toastr.error('Wrong email or password');
    };

  });
