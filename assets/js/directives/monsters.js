app.directive('monsters', function() {
  return {
      restrict: 'E',
      templateUrl: './assets/js/views/monsters.html',
      controller: 'MonsterController'
  };
});

app.directive('monstersSearch', function() {
  return {
      restrict: 'E',
      templateUrl: './assets/js/views/monstersSearch.html'
  };
});

app.directive('monsterCage', function() {
  return {
      restrict: 'E',
      templateUrl: './assets/js/views/monsterCage.html'
  };
});

app.directive('challenge', function() {
  return {
      restrict: 'E',
      templateUrl: './assets/js/views/challenge.html',
      controller: 'ChallengeController'
  };
});
