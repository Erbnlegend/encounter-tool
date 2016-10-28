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

  $scope.rotatingBKGD = function() {
    var newImage = '';
    for (i = 0; i < $scope.BKGDimages.length; i++) {
      var newImage = '';
      newImage = $scope.BKGDimages[i];
      console.log('did this work?');
    }
    return newImage
  };

  $scope.BKGDimages = [
    'assets/img/evil_monastery_by_klauspillon-d83rh7b.jpg',
    'assets/img/acaratus___city_of_veturoth___by_klauspillon-d8hkywg.jpg',
    'assets/img/rise_of_the_kage___city_of_ryu___by_klauspillon-d83mi6s.jpg',
    'assets/img/ur_ghom__city_of_caves_by_klauspillon-d83rgvo.jpg',
    'assets/img/55-410176.jpg',
    'assets/img/dragon_s_castle_by_klauspillon-d8fmohg.jpg'
  ];

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
