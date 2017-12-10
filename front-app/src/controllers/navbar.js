angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth) {
    $scope.isAuthenticated = function() {
      return localStorage.getItem('auth') == 'true' ;
    };
  });
