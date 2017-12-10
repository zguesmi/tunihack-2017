angular.module('MyApp')
  .controller('ProjectCtrl', function($scope, $auth, toastr, Projects, $state) {

    $scope.showForm = function () {
      $state.go('newProject', {} );
    };
    $scope.projects = []
    $scope.loading = true;

    $scope.typeProject  = "";
    // Load project list
    Projects.getAll().then((response)=>{
      console.log(response.data)
      $scope.projects = response.data.data;
      $scope.loading = false;
    },(response)=>{
      $scope.loading = false;
      toastr.error(response.data);
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
