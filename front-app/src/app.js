angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer', 'ui.bootstrap'])
    // API Consts
  .constant('BASE_API','http://localhost:3000/api')
  .constant('API',{
    projects : '/projects',
    offres : '/offres'
  })
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    localStorage.setItem('auth', false);
    /**
     * Helper auth functions
     */
    var skipIfLoggedIn = ['$q', function($q) {
      var deferred = $q.defer();
      if (localStorage.getItem('auth') == 'true') {
        deferred.reject();
      } else {
        deferred.resolve();
      }
      return deferred.promise;
    }];

    var loginRequired = ['$q', '$location', function($q, $location ) {
      var deferred = $q.defer();
      if (localStorage.getItem('auth') == 'true') {
        deferred.resolve();
      } else {
        $location.path('/login');
      }
      return deferred.promise;
    }];
    /**
     * App routes
     */
    $stateProvider
      .state('home', {
        url: '/',
        controller: 'HomeCtrl',
        templateUrl: 'partials/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl',
        resolve: {
          skipIfLoggedIn: skipIfLoggedIn
        }
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('offer', {
        url: '/offers/{projectId}',
        templateUrl: 'partials/offer.html',
        controller: 'OfferCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('project', {
        url: '/projects',
        templateUrl: 'partials/project.html',
        controller: 'ProjectCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('newProject', {
        url: '/newProject',
        templateUrl: 'partials/new-project.html',
        controller: 'NewProjectCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      })
      .state('newOffer', {
        url: '/newOffer',
        templateUrl: 'partials/new-offer.html',
        controller: 'NewOfferCtrl',
        resolve: {
          loginRequired: loginRequired
        }
      });

    $urlRouterProvider.otherwise('/');


  });
