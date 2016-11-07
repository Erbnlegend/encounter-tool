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

// auto adjusting width for input values
$scope.adjust =
      function(elements, offset, min, max) {
        // initialize parameters
        offset = offset || 0;
        min    = min    || 0;
        max    = max    || Infinity;
        elements.each(function() {
          var element = $(this);
          // add element to measure pixel length of text
          var id = btoa(Math.floor(Math.random() * Math.pow(2, 64)));
          var tag = $('<span id="' + id + '">' + element.val() + '</span>').css({
            'display': 'none',
            'font-family': element.css('font-family'),
            'font-size': element.css('font-size'),
          }).appendTo('body');
          // adjust element width on keydown
          function update() {
            // give browser time to add current letter
            setTimeout(function() {
              // prevent whitespace from being collapsed
              tag.html(element.val().replace(/ /g, '&nbsp'));
              // clamp length and prevent text from scrolling
              var size = Math.max(min, Math.min(max, tag.width() + offset));
              if (size < max)
                element.scrollLeft(0);
            // apply width to element
            element.width(size);
        }, 0);
      };
      update();
      element.keydown(update);
  });
}
// apply to our element
  $scope.adjust($('.adjustText'), 20, 5, 500);
  $scope.adjust($('.adjustNum'), 30, 5, 50);


}]);
