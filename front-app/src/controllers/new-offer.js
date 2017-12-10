angular.module('MyApp')
  .controller('NewOfferCtrl', function($scope, toastr, Offers, $state) {

    $scope.projectId = $state.params.id;
    $scope.offer = {};
    $scope.submit = function() {

      Offers.add($scope.projectId, $scope.offer).then((response)=>{
        toastr.success(response.data);
        $state.go('project', {} );
      },(response)=>{
        toastr.error(response.data);
      });

    };
  });
