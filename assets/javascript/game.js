// global variables 
var kylo = {
    name: "KYLO",
    HP: "170",
}

var rey = {
    name: "REY",
    HP: "150",
}
   
var luke = {
    name: "LUKE",
    HP: "140",
}

var yoda = {
    name: "YODA",
    HP: "160"
}

// gameplay variables

var userChar = "";
var hasChar = false;
var currentOpp = "";
var hasOpp = false;

// resets all game variables to start new game
var resetGame = function(){

    // kylo reset
    kylo.HP = "170";
    $("#kylo").attr("src", "assets/images/ren.png");
    $("#kyloStats").html(kylo.name + " HP: " + kylo.HP);

    // rey reset
    rey.HP = "150";
    $("#rey").attr("src", "assets/images/starwars_PNG41.png");
    $("#reyStats").html(rey.name + " HP: " + rey.HP);

    // luke reset 
    luke.HP = "140";
    $("#luke").attr("src", "assets/images/starwars_PNG5.png");
    $("#lukeStats").html(luke.name + " HP: " + luke.HP);

    // yoda reset
    yoda.HP = "160";
    $("#yoda").attr("src", "assets/images/yoda.png");
    $("#yodaStats").html(yoda.name + " HP: " + yoda.HP);

    // gameplay reset
    userChar = "";
    hasChar = false;
    currentOpp = "";
    hasOpp = false;

    selectChar();

}

// used to select userChar and Opp
var selectChar = function(){
    $("#kylo").on("click", function(){
        if (!hasChar){
            // adding kylo stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/ren.png'>");
            $("#userStats").html(kylo.name + " HP: " + kylo.HP); 

            // removing kylo from old div
            $("#kylo").remove();
            $("#kyloStats").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = kylo
        }
    });

    $("#rey").on("click", function(){
        if (!hasChar){
            // adding rey stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/starwars_PNG41.png'>");
            $("#userStats").html(rey.name + " HP: " + rey.HP);

            // removing rey from old div
            $("#rey").remove();
            $("#reyStats").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = rey;
        }
    });

    $("#luke").on("click", function(){
        if (!hasChar){
            // adding luke stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/starwars_PNG5.png'>");
            $("#userStats").html(luke.name + " HP: " + luke.HP);

            // removing luke from old div
            $("#luke").remove();
            $("#lukeStats").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = luke;
        }
    });

    $("#yoda").on("click", function(){
        if (!hasChar){
            // adding luke stats to new div
            $("#userChar").html("<img id='myChar' src='assets/images/yoda.png'>");
            $("#userStats").html(yoda.name + " HP: " + yoda.HP);

            // removing luke from old div
            $("#yoda").remove();
            $("#yodaStats").remove();

            // updating gameplay variables
            hasChar = true;
            userChar = yoda;
        }
    });

  selectOpp(); 

};

var selectOpp = function(){
    $("#kylo").on("click", function(){
        if (hasChar){
            // adding kylo stats to new div
            $("#currentOpp").html("<img id='opp' src='assets/images/ren.png'>");
            $("#oppStats").html(kylo.name + " HP: " + kylo.HP); 

            // removing kylo from old div
            $("#kylo").remove();
            $("#kyloStats").remove();

            // updating gameplay variables
            hasOpp = true;
            currentOpp = kylo
        }
    });

    $("#rey").on("click", function(){
        if (hasChar){
            // adding rey stats to new div
            $("#currentOpp").html("<img id='opp' src='assets/images/starwars_PNG41.png'>");
            $("#oppStats").html(rey.name + " HP: " + rey.HP);

            // removing rey from old div
            $("#rey").remove();
            $("#reyStats").remove();

            // updating gameplay variables
            hasOpp = true;
            currentOpp = rey;
        }
    });

    $("#luke").on("click", function(){
        if (hasChar){
            // adding luke stats to new div
            $("#currentOpp").html("<img id='opp' src='assets/images/starwars_PNG5.png'>");
            $("#oppStats").html(luke.name + " HP: " + luke.HP);

            // removing luke from old div
            $("#luke").remove();
            $("#lukeStats").remove();

            // updating gameplay variables
            hasOpp = true;
            currentOpp = luke;
        }
    });

    $("#yoda").on("click", function(){
        if (hasChar){
            // adding luke stats to new div
            $("#currentOpp").html("<img id='opp' src='assets/images/yoda.png'>");
            $("#oppStats").html(yoda.name + " HP: " + yoda.HP);

            // removing luke from old div
            $("#yoda").remove();
            $("#yodaStats").remove();

            // updating gameplay variables
            hasOpp = true;
            currentOpp = yoda;
        }

    });
console.log(userChar);
    attack();

}


var attack = function(){
    $("#attackButton").on("click", function(){
        currentOpp.HP = currentOpp.HP - Math.floor(Math.random() * 28);;
        userChar.HP = userChar.HP - Math.floor(Math.random() * 28);;
    });

    attack();

}