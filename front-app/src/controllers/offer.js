angular.module('MyApp')
  .controller('OfferCtrl', function($scope, $auth, toastr, Offers, $state) {
    $scope.projectId = $state.params.id;
    $scope.offers = [] ;
    $scope.loading = true;

    // Load offers list
    Offers.getAll(projectId).then((response)=>{
      $scope.offers = response.data;
      $scope.loading = false;
    },(response)=>{
      $scope.loading = false;
      toastr.error(response.data.message);
    });

  });
