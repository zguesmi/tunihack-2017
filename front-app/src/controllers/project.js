angular.module('MyApp')
  .controller('ProjectCtrl', function($scope, $auth, toastr, Projects, $state) {
    $scope.projects = []
    $scope.loading = true;

    $scope.typeProject  = "";
    // Load project list
    Projects.getAll().then((response)=>{
      $scope.projects = response.data;
      $scope.loading = false;
    },(response)=>{
      $scope.loading = false;
      toastr.error(response.data.message);
    });

    // Get formated date
    $scope.formatDate = function(string){
       var date = new Date(string);
       return date.toString();
    }

    // Update filter
    $scope.filterSelect = function(type){

      $scope.typeProject = type;
    }

    // Go to offers route
    $scope.viewOffers = function(id){
      $state.go('offer', { projectId : id } );
    };

  });
