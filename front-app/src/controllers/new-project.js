angular.module('MyApp')
  .controller('NewProjectCtrl', function($scope, $auth, toastr, Projects, $state) {
    $scope.project = {};
    $scope.submit = function() {
      Projects.add($scope.project).then((response)=>{
        toastr.success(response.data);
        $state.go('project', {} );
      },(response)=>{
        toastr.error(response.data);
      });

    };
  });
