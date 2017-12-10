angular.module('MyApp')
  .controller('OfferCtrl', function($scope, $auth, toastr, Projects, $state) {
    $scope.showForm = function () {
      $state.go('newOffer');
    };
    $scope.projectId = $state.params.id;
    $scope.offers =[
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
    ] ;



    /*/ Load offers list
    Offers.getAll(projectId).then((response)=>{
      $scope.offers = response.data;
      $scope.loading = false;
    },(response)=>{
      $scope.loading = false;
      toastr.error(response.data.message);
    });*/

  });
