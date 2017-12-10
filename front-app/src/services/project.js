angular.module('MyApp')
  .factory('Projects', function($http, BASE_API, API) {
    return {
      get: function(id) {
        return $http.get(BASE_API + API.projects + '/' + id);
      },
      getAll: function() {
        return $http.get(BASE_API + API.projects);
      },
      add : function(project){
          return $http.post(BASE_API + API.projects, project);
      }
    };
  });
