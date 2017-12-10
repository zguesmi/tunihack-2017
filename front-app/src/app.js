angular.module('MyApp', ['ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'satellizer'])
    // API Consts
  .constant('BASE_API','http://localhost:3000/api')
  .constant('API',{
    projects : '/projects',
    offres : '/offres'
  })
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {
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
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'partials/signup.html',
        controller: 'SignupCtrl'

      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('offer', {
        url: '/offers/{projectId}',
        templateUrl: 'partials/offer.html',
        controller: 'OfferCtrl'
      })
      .state('project', {
        url: '/projects',
        templateUrl: 'partials/project.html',
        controller: 'ProjectCtrl'
      });
    $urlRouterProvider.otherwise('/');


  });
