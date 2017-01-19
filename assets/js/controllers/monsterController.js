app.controller('MonsterController', ['$scope', '$http', '$localStorage', 'monstersFactory', function($scope, $http, $localStorage, monstersFactory){

  $scope.monsters = monstersFactory;

  $scope.user = [];

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

    var monsterJson = angular.toJson(selectedMonster);
    var monsterObject = jQuery.parseJSON(monsterJson);

    $scope.user.push(monsterObject);
    $localStorage.user.push(monsterObject);
    setTimeout(function() {
      $scope.adjust($('.adjustText'), 20, 5, 500);
      $scope.adjust($('.adjustNum'), 30, 5, 50);
    }, 500);
  };

  $scope.addPlayerMonster = function(name, ac, initRoll, hit, dex) {
    var roundDex = Math.floor((dex -10)/2);
    if(roundDex < 0) {
      roundDex = 0;
    }
    var addRoll = roundDex + initRoll;
    $scope.addNewPlayer(name, ac, hit, addRoll);
  };

  //Limits the number of monster results
  $scope.numLimit = 30;


  $scope.showMonsterList = false;
  //toggle btn for monsters list
  $scope.toggleMonsterList = function() {
    if($scope.showMonsterList == false) {
      $scope.showMonsterList = true;
    }else {
      $scope.showMonsterList = false;
    }
  };

  $scope.emptyUserCheck = function() {
    if($scope.user.length == 0) {
      return true
    }else {
      return false
    }
  };

  $scope.removeMonster = function(item) {
    var index = $scope.user.indexOf(item);
    $scope.user.splice(index, 1);
    $localStorage.user.splice(index, 1);
  };

  // Update the input values on change
  // Needed so that changes are kept on change of initial monster creation
  // Fixes issue with updating local storage right after monster is created
    $scope.change = function(user, field) {
      var index = $scope.user.indexOf(user);
      $localStorage.user[index][field] = user[field];
    };

// Change Input width
var adjustOnload = function(){
  setTimeout(function() {
    $scope.adjust($('.adjustText'), 20, 5, 500);
    $scope.adjust($('.adjustNum'), 30, 5, 50);
  },500);
};
adjustOnload();

}]);
