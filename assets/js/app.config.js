angular.module('encounterTool').
  config(['$locationProvider', '$routeProvider', '$localStorageProvider',
    function config($locationProvider, $routeProvider, $localStorageProvider) {
      $locationProvider.hashPrefix('!');
      $localStorageProvider.setKeyPrefix('');

      $routeProvider.
        when('/', {
          templateUrl: './assets/js/views/players.html',
          controller: 'PlayerController'
        }).
        otherwise('/');
    }
  ]);
