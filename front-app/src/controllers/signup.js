angular.module('MyApp')
  .controller('SignupCtrl', function($scope, $location, $auth, toastr) {
    $scope.signup = function() {

      if ($scope.user.email == 'admin@admin.com'){
          localStorage.setItem('false', true);
          $location.path('/');
          toastr.info('You have successfully created a new account and have been signed-in');
      } else
          toastr.error(response.data.message);

    };
  });
