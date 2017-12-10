angular.module('MyApp')
  .controller('SignupCtrl', function($scope, $location, $auth, toastr, $rootScope) {
    $scope.signup = function() {

      if ($scope.user.email == 'admin@admin.com'){
          $location.path('/');
          $rootScope.authenticated = true;
          toastr.info('You have successfully created a new account and have been signed-in');
      } else
          toastr.error(response.data.message);

    };
  });
