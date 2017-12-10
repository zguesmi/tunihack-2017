angular.module('MyApp')
  .controller('ProjectCtrl', function($scope, $auth, toastr, Projects, $state) {
    $scope.projects = []
    $scope.loading = true;
    $scope.projects = [
      {
        id: '1',
        callForTender: {
          deadline: '2016-11-11T12:15',
          offers: [
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
        },
        description: 'First project',
        deadline: '2017-11-30T00:00',
        affectedTo: '2',
        state: 'Finished',
        expenses: '1000DT Ciment, 5000DT Materiels'
      },{
        id: '2',
        callForTender: {
          deadline: '2017-11-11T12:15',
          offers: [
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
        },
        description: 'Second project',
        deadline: '2017-12-30T00:00',
        affectedTo: '5',
        state: 'Affected',
        expenses: '255DT Papiers, 4000DT Materiels'
      },{
        id: '3',
        callForTender: {
          deadline: '2018-01-11T12:15',
          offers: [
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
        },
        description: 'Third project',
        deadline: '2018-04-14T00:00',
        affectedTo: '5',
        state: 'Open',
        expenses: '300DT Equipements, 10000DT Ordinateurs'
      },{
        id: '4',
        callForTender: {
          deadline: '2017-09-11T12:15',
          offers: [
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
        },
        description: 'Fourth project',
        deadline: '2018-04-14T00:00',
        affectedTo: '5',
        state: 'Affected',
        expenses: '300DT Equipements, 10000DT Ordinateurs'
      }
    ];
    $scope.typeProject  = "";
    /*/ Load project list
    Projects.getAll().then((response)=>{
      //$scope.projects = response.data;
      $scope.loading = false;
    },(response)=>{
      $scope.loading = false;
      toastr.error(response.data.message);
    });*/

    $scope.formatDate = function(string){
       var date = new Date(string);
       return date.toString();
    }
    $scope.filterSelect = function(type){
      $scope.typeProject = type;
    }
    $scope.viewOffers = function(id){
      console.log(id)
      $state.go('offer', { projectId : id } );
    };

  });
