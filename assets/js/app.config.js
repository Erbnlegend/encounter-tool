angular.module('encounterTool').
  config(['$locationProvider', '$routeProvider', '$localStorageProvider',
    function config($locationProvider, $routeProvider, $localStorageProvider) {

      $routeProvider.
        when('/', {
          templateUrl: './assets/js/views/players.html',
          controller: 'PlayerController'
        }).
        when('/license', {
          templateUrl: './assets/js/views/license.html'
        }).
        otherwise('/');
    }
  ]);
