angular.module('MyApp')
  .factory('Porjects', function($http) {
    return {
      get: function(id) {
        return $http.get(BASE_API + API.projects + '/' + id);
      },
      getAll: function(profileData) {
        return $http.get(BASE_API + API.projects);
      },
      add : function(project){
          return $http.post(BASE_API + API.projects);
      }
    };
  });
