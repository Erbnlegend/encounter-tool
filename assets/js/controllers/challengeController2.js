app.controller('ChallengeController', ['$scope', '$localStorage', function($scope, $localStorage) {
// Initialize variables
$scope.difficulty = 'Trivial';
$scope.challengeColor = '#2196F3';
$scope.xpTotal = 0;
$scope.adjustedChallenge = 0;

$scope.numPlayers = $localStorage;
$scope.levels = $localStorage;

  $scope.calculate =
  function(numPlayers, level) {
    $scope.xpTotal = 0;
    for(i=0;i<$scope.user.length; i++) {
      $scope.number = $scope.user[i].challenge_rating;
      $scope.xpTotal += $scope.number;
    }
    switch ($scope.user.length) {
      case 1:
        $scope.multiplier= 1;
        break;
      case 2:
        $scope.multiplier = 1.5;
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        $scope.multiplier = 2;
        break;
      case 7:
      case 8:
      case 9:
      case 10:
        $scope.multiplier = 2.5;
        break;
      case 11:
      case 12:
      case 13:
      case 14:
        $scope.multiplier = 3;
        break;
      default:
        $scope.multiplier = 4;
    }
    $scope.adjustedChallenge = Math.floor($scope.xpTotal * $scope.multiplier / numPlayers);

    switch (level) {
      case 1:
        if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 25) {
          $scope.challengeColor = '#2196F3';
          $scope.difficulty = 'Trivial';
        }
        if($scope.adjustedChallenge >= 26 && $scope.adjustedChallenge <= 49) {
          $scope.challengeColor = '#4CAF50';
          $scope.difficulty = 'Easy';
        }
        if($scope.adjustedChallenge >= 50 && $scope.adjustedChallenge <= 74) {
          $scope.challengeColor = '#FFEB3B';
          $scope.difficulty = 'Medium';
        }
        if($scope.adjustedChallenge >= 75 && $scope.adjustedChallenge <= 99) {
          $scope.challengeColor = '#FF9800';
          $scope.difficulty = 'Hard';
        }
        if($scope.adjustedChallenge >= 100) {
          $scope.challengeColor = '#FF5722';
          $scope.difficulty = 'Deadly';
        }
        break;
        case 2:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 49) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 50 && $scope.adjustedChallenge <= 99) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 100 && $scope.adjustedChallenge <= 149) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 150 && $scope.adjustedChallenge <= 199) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 200) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 3:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 74) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 75 && $scope.adjustedChallenge <= 149) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 150 && $scope.adjustedChallenge <= 224) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 225 && $scope.adjustedChallenge <= 399) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 400) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 4:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 124) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 125 && $scope.adjustedChallenge <= 249) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 250 && $scope.adjustedChallenge <= 374) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 375 && $scope.adjustedChallenge <= 499) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 500) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 5:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 249) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 250 && $scope.adjustedChallenge <= 499) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 500 && $scope.adjustedChallenge <= 749) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 750 && $scope.adjustedChallenge <= 1099) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 1100) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 6:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 299) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 300 && $scope.adjustedChallenge <= 599) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 600 && $scope.adjustedChallenge <= 899) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 900 && $scope.adjustedChallenge <= 1399) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 1400) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 7:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 349) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 350 && $scope.adjustedChallenge <= 749) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 750 && $scope.adjustedChallenge <= 1099) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 1100 && $scope.adjustedChallenge <= 1699) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 1700) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 8:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 449) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 450 && $scope.adjustedChallenge <= 899) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 900 && $scope.adjustedChallenge <= 1399) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 1400 && $scope.adjustedChallenge <= 2099) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 2100) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 9:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 549) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 550 && $scope.adjustedChallenge <= 1099) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 1100 && $scope.adjustedChallenge <= 1599) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 1600 && $scope.adjustedChallenge <= 2399) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 2400) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 10:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 599) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 600 && $scope.adjustedChallenge <= 1199) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 1200 && $scope.adjustedChallenge <= 1899) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 1900 && $scope.adjustedChallenge <= 2799) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 2800) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 11:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 799) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 800 && $scope.adjustedChallenge <= 1599) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 1600 && $scope.adjustedChallenge <= 2399) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 2400 && $scope.adjustedChallenge <= 3599) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 3600) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 12:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 999) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 1000 && $scope.adjustedChallenge <= 1199) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 2000 && $scope.adjustedChallenge <= 2999) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 3000 && $scope.adjustedChallenge <= 4499) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 4500) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 13:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 1099) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 1100 && $scope.adjustedChallenge <= 2199) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 2200 && $scope.adjustedChallenge <= 3399) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 3400 && $scope.adjustedChallenge <= 5099) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 5100) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 14:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 1249) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 1250 && $scope.adjustedChallenge <= 2499) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 2500 && $scope.adjustedChallenge <= 3799) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 3800 && $scope.adjustedChallenge <= 5699) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 5700) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 15:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 1399) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 1400 && $scope.adjustedChallenge <= 2799) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 2800 && $scope.adjustedChallenge <= 4299) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 4300 && $scope.adjustedChallenge <= 6399) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 6400) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 16:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 1599) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 1600 && $scope.adjustedChallenge <= 3199) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 3200 && $scope.adjustedChallenge <= 4799) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 4800 && $scope.adjustedChallenge <= 7199) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 7200) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 17:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 1999) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 2000 && $scope.adjustedChallenge <= 3899) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 3900 && $scope.adjustedChallenge <= 5899) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 5900 && $scope.adjustedChallenge <= 8799) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 8800) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 18:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 2099) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 2100 && $scope.adjustedChallenge <= 4199) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 4200 && $scope.adjustedChallenge <= 6299) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 6300 && $scope.adjustedChallenge <= 9499) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 9500) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 19:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 2399) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 2400 && $scope.adjustedChallenge <= 4899) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 4900 && $scope.adjustedChallenge <= 7299) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 7300 && $scope.adjustedChallenge <= 10899) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 10900) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
        case 20:
          if($scope.adjustedChallenge >= 0 && $scope.adjustedChallenge <= 2799) {
            $scope.challengeColor = '#2196F3';
            $scope.difficulty = 'Trivial';
          }
          if($scope.adjustedChallenge >= 2800 && $scope.adjustedChallenge <= 5699) {
            $scope.challengeColor = '#4CAF50';
            $scope.difficulty = 'Easy';
          }
          if($scope.adjustedChallenge >= 5700 && $scope.adjustedChallenge <= 8499) {
            $scope.challengeColor = '#FFEB3B';
            $scope.difficulty = 'Medium';
          }
          if($scope.adjustedChallenge >= 8500 && $scope.adjustedChallenge <= 12699) {
            $scope.challengeColor = '#FF9800';
            $scope.difficulty = 'Hard';
          }
          if($scope.adjustedChallenge >= 12700) {
            $scope.challengeColor = '#FF5722';
            $scope.difficulty = 'Deadly';
          }
          break;
    }
  }
$scope.calculate($scope.numPlayers.numPlayer, $scope.levels.level)
}]);
