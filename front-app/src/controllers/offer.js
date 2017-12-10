angular.module('MyApp')
  .controller('OfferCtrl', function($scope, $auth, toastr, Offers, $state) {
    $scope.projectId = $state.params.id;
    console.log($state.params.id)
    $scope.offers = [] ;
    $scope.loading = true;

    // Load offers list
    Offers.getAll().then((response)=>{
      $scope.offers = response.data;
      $scope.loading = false;
    },(response)=>{
      $scope.loading = false;
      toastr.error(response.data.message);
    });
    $scope.offers = [
      {
        sender: 's1',
        description: 'First offer'
      }, {
        sender: 's2',
        description: 'Second offer'
      }, {
        sender: 's3',
        description: '3rd offer'
      }
    ]
    $scope.viewOffer = function(id){

    };

  });
