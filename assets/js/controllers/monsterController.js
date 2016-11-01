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
    var index = $scope.user.length;
    $scope.user.push(
      {
        "id": index,
        "monsterArray": selectedMonster
      }
    );
    $localStorage.user.push({
      "id": index,
      "monsterArray": selectedMonster
    }
  );
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
      var index = $scope.user.indexOf(player);
      $localStorage.user[index][field] = user[field];
    };


}]);
