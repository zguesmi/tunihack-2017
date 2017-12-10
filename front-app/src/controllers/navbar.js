angular.module('MyApp')
  .controller('NavbarCtrl', function($scope, $auth, $rootScope) {
    $scope.isAuthenticated = function() {
      return $rootScope.authenticated ;
    };
  });
