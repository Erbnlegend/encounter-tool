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

// Update the input values on change
// Needed so that changes are kept on change of initial player creation
// Fixes issue with updating local storage right after player is created
  $scope.change = function(player, field) {
    var index = $scope.players.indexOf(player);
    $localStorage.players[index][field] = player[field];
  };

  $scope.emptyPlayersCheck = function() {
    if($scope.players.length == 0) {
      return true
    }else {
      return false
    }
  };

  $scope.dupePlayer = function(name, armor, health, initiative) {
    $scope.addNewPlayer(name, armor, health, initiative);
  };

  $scope.removePlayer = function(item) {
    var index = $scope.players.indexOf(item);
    $scope.players.splice(index, 1);
    $localStorage.players.splice(index, 1);
  };

}]);
