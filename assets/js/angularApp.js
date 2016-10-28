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


  $scope.addNewPlayer = function(playerName, playerArmorClass, playerHealth, playerInitiative) {
    $scope.players.push(
      {
      	"name": playerName,
      	"ac": playerArmorClass,
        "health": playerHealth,
      	"initiative": playerInitiative
      }
    );

    $localStorage.players.push(
      {
      	"name": playerName,
      	"ac": playerArmorClass,
        "health": playerHealth,
      	"initiative": playerInitiative
      }
    );

    //clear out fields
    $scope.playerName = '';
    $scope.playerArmorClass = '';
    $scope.playerHealth = '';
    $scope.playerInitiative = '';
  };

  $scope.emptyPlayersCheck = function() {
    if($scope.players.length == 0) {
      return true
    }else {
      return false
    }
  }

}]);

app.controller('MonsterController', ['$scope', '$http', '$localStorage', function($scope, $http, $localStorage){

  $scope.monsters = null;
  $scope.user = [];

  $http.get('assets/js/data/monsters.json')
      .success(function(data) {
          $scope.monsters = data;
      })
      .error(function(data,status,error,config){
          $scope.monsters = [{heading:"Error",description:"Could not load json data"}];
      });

  var updateMonsters = function() {
    if ($localStorage.user == undefined) {
      $localStorage.user = [];
    } else {
      for (i = 0; i < $localStorage.user.length; i++) {
        $scope.user.push($localStorage.user[i])
      }
    }
  };

  updateMonsters();

  $scope.addMonster = function(selectedMonster) {
    //Add Monster to user Array
    $scope.user.push(selectedMonster);

    $localStorage.user.push(selectedMonster);
  };

  $scope.addPlayerMonster = function(name, ac, initRoll, hit, dex) {
    var roundDex = Math.floor((dex -10)/2);
    if(roundDex < 0) {
      roundDex = 0;
    }
    var addRoll = roundDex + initRoll;

    $scope.addNewPlayer(name, ac, hit, addRoll);

  };

  $scope.numLimit = 30;

  $scope.showMonsterList = false;
  //toggle btn for monsters list
  $scope.toggleMonsterList = function() {
    if($scope.showMonsterList == false) {
      $scope.showMonsterList = true
    }else {
      $scope.showMonsterList = false
    }
  };

}]);
