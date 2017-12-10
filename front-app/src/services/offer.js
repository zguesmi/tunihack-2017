angular.module('MyApp')
  .factory('Offers', function($http, BASE_API, API) {
    return {
      getAll: function(projectId) {
        return $http.post(BASE_API + API.projects + '/' + projectId + '/' + API.offers);
      },
      add: function(projectId, offer) {
        return $http.get(BASE_API + API.projects + '/' + projectId + '/' +API.offers, offer);
      }
    };
  });
