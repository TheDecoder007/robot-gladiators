

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
};

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
  while (playerInfo.health > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

       if (promptFight === "skip" || promptFight === "SKIP") {
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");

         if (confirmSkip) {
        window.alert(playerInfo.name + ' has decided to skip this fight. Sucka!');
    
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money);
        break;
      }
    }

 // remove enemy's health by subtracting the amount set in the playerInfo.attack variable

   var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

    enemyHealth = Math.max(0, enemyHealth - damage); 
    console.log(
      playerInfo.name + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerInfo.money = playerInfo.money + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    console.log(
      enemyName + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
    );

    // check player's health
    if (playerInfo.health <= 0) {
      window.alert(playerInfo.name + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health left.');
    }
  }
};

// function to start a new game

    var startGame = function() {
      //reset player stats
      playerInfo.health = 100;
      playerInfo.attack = 10;
      playerInfo.money = 10;

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerInfo.health > 0) {
       window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = randomNumber(40, 60);

    fight(pickedEnemyName);

    //if we're not at the last enemy in the array
    if (playerInfo.health > 0 && i < enemyNames.length - 1) {

  // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("Visit the store before next round?");

  //if yes, take them to the store function
        if (storeConfirm) {
        shop();
     }
    }
  }
  else {
    window.alert("You went out like a bitch and lost your robot");
    break;
  }
}
//after loop, player either wins or loses
endGame();
};
//function to end the entire game
    var endGame = function() {
      if (playerInfo.health > 0) {
        window.alert("Great job, you survived the game. Your score is " + playerInfo.money + ".")
      }
      else {
        window.alert("You went out like a bitch and lost your robot.");
      }
      var playAgainConfirm = window.confirm("Would you like to play again?");

      if (playAgainConfirm) {
        startGame();
      }
      else {
        window.alert("Thank you for playing Robot Gladiators!");
      }
    };

// shop to purchase things
    var shop = function() {

//ask player what theyd like to do
      var shopOptionPromt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?"
      );

//use switch to carry out action
        switch (shopOptionPromt) {
          case "refill":
          case "REFILL":
          if (playerInfo.money > 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
//increase health and decrease money
            playerInfo.health = playerInfo.health + 20;
            playerInfo.money = playerInfo.money - 7;
          }
          else {
            window.alert("You're too broke for that item!");
          }
          break;

          case "upgrade":
          case "UPGRADE":
          if (playerInfo.money > 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerInfo.attack = playerInfo.attack + 6;
            playerInfo.money = playerInfo.money - 7;
          }
          else {
            window.alert("You're too broke for that item!");
          }
          break;

          case "leave":
          case "LEAVE":
            window.alert("Leaving the store.");
            break;

          default:
            window.alert("You did not pick a valid option. Try again.");
//call shop again to force player to pick a valid option
            shop();
            break;
        }
    };

//start the game when the page loads
startGame();
