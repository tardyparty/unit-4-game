// global variables 
var kylo = {
    name: "KYLO",
    HP : "100",
    attack : "170",
}

var rey = {
    name: "REY",
    HP : "100",
    attack : "150",
}
   
var luke = {
    name: "LUKE",
    HP : "100",
    attack : "140",
}

var yoda = {
    name: "YODA",
    HP : "100",
    attack : "160",
}

// gameplay variables

var userChar = "";
var hasChar = false;
var currentOpp = "";
var hasOpp = false;

// resets all game variables to start new game
var resetGame = function(){

    // kylo reset
    kylo.HP = "100";
    kylo.attack = "170";
    $("#kylo").html("<img class='firstImg' src='assets/images/ren.png'>");
    $("#nameKylo").html(kylo.name);
    $("#kyloStats").html("HP: " + kylo.HP + " Attack: " + kylo.attack);

    // rey reset
    rey.HP = "100";
    rey.attack = "150";
    $("#rey").attr("src", "assets/images/starwars_PNG41.png");
    $("#nameRey").html(rey.name);
    $("#reyStats").html("HP: " + rey.HP + " Attack: " + rey.attack);

    // luke reset 
    luke.HP = "100";
    luke.attack = "140";
    $("#luke").attr("src", "assets/images/starwars_PNG5.png");
    $("#nameLuke").html(luke.name);
    $("#lukeStats").html("HP: " + luke.HP + " Attack: " + luke.attack);

    // yoda reset
    yoda.HP = "100";
    yoda.attack = "160";
    $("#yoda").attr("src", "assets/images/yoda.png");
    $("#nameYoda").html(yoda.name);
    $("#yodaStats").html("HP: " + yoda.HP + " Attack: " + yoda.attack);

    // gameplay reset
    userChar = "";
    hasChar = false;
    currentOpp = "";
    hasOpp = false;

    startGame();

}

// used to select userChar and Opp
var startGame = function(){
    $("#kylo").on("click", function(){
        if (!hasChar){
            // adding kylo stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/ren.png'>");
            $("#userStats").html("HP: " + kylo.HP + " Attack: " + kylo.attack);
            $("#userName").html(kylo.name)

            // removing kylo from old div
            $("#kylo").remove();
            $("#kyloStats").remove();
            $("#nameKylo").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = kylo
        });
    }
    $("#rey").on("click", function(){
        if (!hasChar){
            // adding rey stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/starwars_PNG41.png'>");
            $("#userStats").html("HP: " + rey.HP + " Attack: " + rey.attack);
            $("#userName").html(rey.name);

            // removing rey from old div
            $("#rey").remove();
            $("#reyStats").remove();
            $("#nameRey").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = rey;
        });
    }
    $("#luke").on("click", function(){
        if (!hasChar){
            // adding luke stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/starwars_PNG5.png'>");
            $("#userStats").html("HP: " + luke.HP + " Attack: " + luke.attack);
            $("#userName").html(luke.name);

            // removing luke from old div
            $("#luke").remove();
            $("#lukeStats").remove();
            $("#nameLuke").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = luke;
        });
    }
    $("#yoda").on("click", function(){
        if (!hasChar){
            // adding luke stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/yoda.png'>");
            $("#userStats").html("HP: " + yoda.HP + " Attack: " + yoda.attack);
            $("#userName").html(yoda.name);

            // removing luke from old div
            $("#yoda").remove();
            $("#yodaStats").remove();
            $("#nameYoda").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = yoda;
        });
    }
    
};

// The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.

// The player chooses an opponent by clicking on an enemy's picture.

// Once the player selects an opponent, that enemy is moved to a defender area.

// The player will now be able to click the attack button.

// Whenever the player clicks attack, their character damages the defender. The opponent will lose HP (health points). These points are displayed at the bottom of the defender's picture. 

// The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their HP. These points are shown at the bottom of the player character's picture.

// The player will keep hitting the attack button in an effort to defeat their opponent.

// When the defender's HP is reduced to zero or below, remove the enemy from the defender area. The player character can now choose a new opponent.

// The player wins the game by defeating all enemy characters. The player loses the game the game if their character's HP falls to zero or below.

// Option 2 Game design notes

// Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

// Each time the player attacks, their character's Attack Power increases by its base Attack Power. 

// For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).

// The enemy character only has Counter Attack Power. 

// Unlike the player's Attack Points, Counter Attack Power never changes.

// The Health Points, Attack Power and Counter Attack Power of each character must differ.

// No characters in the game can heal or recover Health Points. 

// A winning player must pick their characters wisely by first fighting an enemy with low Counter Attack Power. This will allow them to grind Attack Power and to take on enemies before they lose all of their Health Points. Healing options would mess with this dynamic.

// Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.