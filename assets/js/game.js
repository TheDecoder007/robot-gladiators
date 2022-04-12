
var playerName = window.prompt("What is your robot's name?");

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;



var fight = function() {
// alert players they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
console.log(promptFight);

if (promptFight === "FIGHT" || promptFight === "fight") {
    

//subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

//log a resulting message to the console so we know it worked
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining "
);

//check enemies health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

//subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable
    playerHealth = playerHealth - enemyAttack;

//log a resulting message to the console so we know it worked
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " how has " + playerHealth + " health remaining "
    );

//check players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + "health left.");
        }

//if player chooses to skip
    } else if (promptFight === "skip" || promptFight == "SKIP") {
       var confirmSkip = window.confirm("Are you sure you'd like to quit?");

       if (confirmSkip) {
           window.alert(playerName + " has decided to skip this fight. Sucka!");
           playerMoney = playerMoney - 2;
       }
       else {
           fight();
       }
    
   } else {
       window.alert("You need to chose a valid option. Try again!");
   }
    
};

fight()