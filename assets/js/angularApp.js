var app = angular.module('encounterTool', ['ngRoute','ngStorage']);

app.controller('PlayerController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){



  $scope.players = [];

  var updatePlayers = function() {
    if ($localStorage.players == undefined) {
      $localStorage.players = [];
    } else {
      for (i = 0; i < $localStorage.players.length; i++) {
        $scope.players.push($localStorage.players[i])
      }
    }
  };

  updatePlayers();

  console.log('testing: '+$localStorage.platestyers);
  console.log('testing: '+$localStorage.players);


  $scope.addNewPlayer = function(playerName, playerArmorClass, playerInitiative) {
    $scope.players.push(
      {
      	name: playerName,
      	ac: playerArmorClass,
      	initiative: playerInitiative
      }
    );

    $localStorage.players.push(
      {
      	name: playerName,
      	ac: playerArmorClass,
      	initiative: playerInitiative
      }
    );

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

}]);
