var app = angular.module('encounterTool', []);

app.controller('PlayerController', ['$scope', '$http', function($scope, $http){

  $scope.players = null;
  $http.get('assets/js/data/players.json')
      .success(function(data) {
          $scope.players = data;
      })
      .error(function(data,status,error,config){
          $scope.players = [{heading:"Error",description:"Could not load json data"}];
      });
      
});
