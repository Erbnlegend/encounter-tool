angular.module('encounterTool').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          templateUrl: './assets/js/views/players.html',
          controller: 'PlayerController'
        }).
        otherwise('/');
    }
  ]);
