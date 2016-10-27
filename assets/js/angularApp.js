var app = angular.module('encounterTool', ['ngRoute', 'checklist-model']);

app.controller('PlayerController', ['$scope', '$http', function($scope, $http){

  $scope.players = null;
  $http.get('assets/js/data/players.json')
      .success(function(data) {
          $scope.players = data;
      })
      .error(function(data,status,error,config){
          $scope.players = [{heading:"Error",description:"Could not load json data"}];
      });

  $scope.addNewPlayer = function(playerName, playerArmorClass, playerInitiative) {
console.log($scope.players);
    $scope.players.push(
      {
      	"name": playerName,
      	"ac": playerArmorClass,
      	"initiative": playerInitiative
      }
    )
    //clear out fields
    $scope.playerName = '';
    $scope.playerArmorClass = '';
    $scope.playerInitiative = '';

  };

}]);

app.controller('MonsterController', ['$scope', '$http', function($scope, $http){

  $scope.monsters = null;
  $http.get('assets/js/data/monsters.json')
      .success(function(data) {
          $scope.monsters = data;
      })
      .error(function(data,status,error,config){
          $scope.monsters = [{heading:"Error",description:"Could not load json data"}];
      });

      $scope.user = {
          roles: [$scope.monsters]
        };
        $scope.checkAll = function() {
          $scope.user.monsters = angular.copy($scope.monsters);
        };
        $scope.uncheckAll = function() {
          $scope.user.monsters = [];
        };
        $scope.checkFirst = function() {
          $scope.user.monsters = [];
          $scope.user.monsters.push($scope.monsters[0]);
        };
        $scope.setToNull = function() {
          $scope.user.monsters = null;
        };

}]);
