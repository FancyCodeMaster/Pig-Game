
var scores , roundScore , activePlayer;


scores = [0,0];
roundScore = 0;
activePlayer = 0; // 0 for player1 , 1 for player2.

// setting all the score to zero at the beginning
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

// hiding the dice at the beginning
document.querySelector(".dice").style.display = "none";

// when we click roll dice button

document.querySelector(".btn-roll").addEventListener("click" , function() {
 
    // first create a random number generator from 1 to 6

    var dice = Math.floor((Math.random() * 6) + 1);
    
    
    // add the random score to the current score box
    
    roundScore += dice;
    document.getElementById("current-" + activePlayer).textContent  = roundScore;
    
    // show thw dice image acccording to the score.
    
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "dice-" + dice + ".png";
    
});