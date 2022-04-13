var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


var fight = function(enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

       if (promptFight === "skip" || promptFight === "SKIP") {
          var confirmSkip = window.confirm("Are you sure you'd like to quit?");

         if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Sucka!');
    
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// function to start a new game

    var startGame = function() {
      //reset player stats
      playerHealth = 100;
      playerAttack = 10;
      playerMoney = 10;

// fight each enemy-robot by looping over them and fighting them one at a time
for (var i = 0; i < enemyNames.length; i++) {
  // if player is still alive, keep fighting
  if (playerHealth > 0) {
       window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

      var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
    enemyHealth = 50;

    fight(pickedEnemyName);

    //if we're not at the last enemy in the array
    if (playerHealth > 0 && i < enemyNames.length - 1) {

  // ask if player wants to use the store before next round
      var storeConfirm = window.confirm("Visit the store before next round?");

  //if yes, take them to the store function
        if (storeConfirm) {
        shop();
     }
    }
  }
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
//after loop, player either wins or loses
endGame();
};
//function to end the entire game
    var endGame = function() {
      if (playerHealth > 0) {
        window.alert("Great job, you survived the game. Your score is " + playerMoney + ".")
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
          if (playerMoney > 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
//increase health and decrease money
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
          }
          else {
            window.alert("You're too broke for that item!");
          }
          break;

          case "upgrade":
          case "UPGRADE":
          if (playerMoney > 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
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
