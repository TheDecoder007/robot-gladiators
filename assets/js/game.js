
//Game states
// WIN - player robot has defeated all enemy robots
//   *fight all enemy robots
//      *defeat each enemy robot

// LOSE - player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// console.log(enemyNames);
// console.log(enemyNames[0]);
// console.log(enemyNames[1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

for(var i = 0; i < enemyNames.length; i++) {
   
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}

var fight = function(enemyName) {

    while(enemyHealth > 0) {

// alert players they are starting the round
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
 

if (promptFight === "FIGHT" || promptFight === "fight") {
    

//subtract the value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable
    enemyHealth = enemyHealth - playerAttack;

//log a resulting message to the console so we know it worked
console.log(
    playerName + " attacked " + enemyNames + ". " + enemyName + " now has " + enemyHealth + " health remaining "
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
}
};

for(var i =0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}