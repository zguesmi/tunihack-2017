angular.module('MyApp')
  .factory('Offers', function($http) {
    return {
      get: function(id) {
        return $http.get(BASE_API + API.projects + '/' + id);
      },
      getAll: function(pojectId, offerId) {
        return $http.get(BASE_API + API.projects + '/' + id + '/' +API.offers);
      }
    };
  });
