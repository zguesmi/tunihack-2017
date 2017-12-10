angular.module('MyApp')
  .controller('LoginCtrl', function($scope, $location, $auth, toastr) {
    $scope.login = function() {
      if ($scope.user.email == 'admin@admin.com') {
          toastr.success('You have successfully signed in!');
          $location.path('/');
      } else
          toastr.error(error.data.message, error.status);
    };
    
  });
