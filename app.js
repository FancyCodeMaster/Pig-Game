
var scores , roundScore , activePlayer , gamePlaying , player1 , player2 , askScore;

init();

// when we click roll dice button

document.querySelector(".btn-roll").addEventListener("click" , function() {
 
    if (gamePlaying)
        {
            // first create a random number generator from 1 to 6

            var dice = Math.floor((Math.random() * 6) + 1);

            // show the dice image acccording to the score.

            document.querySelector(".dice").style.display = "block";
            document.querySelector(".dice").src = "dice-" + dice + ".png";  

            if (dice!==1)
                {
                    // add the random score to the current score box

                    roundScore += dice;
                    document.getElementById("current-" + activePlayer).textContent  = roundScore;


                }

            else
                {   
                    nextPlayer();

                }   
                }
    
});

function nextPlayer() 
    {   
        // current score will be zero
        roundScore = 0;
        document.querySelector("#current-0").textContent = 0;
        document.querySelector("#current-1").textContent = 0;
        
        // dice will be hidden
        document.querySelector(".dice").style.display = "none";
        
        // active class will be toggled and active player will be changed
        activePlayer = 1-activePlayer;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
    }



document.querySelector(".btn-hold").addEventListener("click" , function() {
    
    // 1. Update current score to the Global score
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];


    // 2. Check if the player has won the game

    if (scores[activePlayer] >=askScore)
        {
            //set the gamePlaying to false
            gamePlaying = false;
            
            // Remove the active class
            document.querySelector(".player-0-panel").classList.remove("active");
            document.querySelector(".player-1-panel").classList.remove("active");

            // Add the winner class on the active player panel
            document.querySelector(".player-" + (1-activePlayer) + "-panel").classList.remove("winner");
            document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");

            // remove the active player name and just show the message winner
            document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";

            // hide the dice
            document.querySelector(".dice").style.display = "none";



        }
    else
        {
            // 3. Change the active player and toggle the active player
            nextPlayer();   
        }   
    
});

document.querySelector(".btn-new").addEventListener("click" , init);

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; // 0 for player1 , 1 for player2.
    gamePlaying = true;
    
    // asking the users for their name
    player1 = prompt("Enter your name , player1?");
    player2 = prompt("Enter your name , player2?");
    document.getElementById("name-0").textContent = prompt("Enter your name , player1?");
    document.getElementById("name-1").textContent = prompt("Enter your name , player2?");

    // setting all the score to zero at the beginning
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    // hiding the dice at the beginning
    document.querySelector(".dice").style.display = "none";
    
    // set player1 as the initial active player
    document.querySelector(".player-0-panel").classList.remove("active");// removing and adding the active class in 0 panel so that active wouldn't be added multiple times.
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    
    // remove the winner class from both player panel and set the name as initial
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    
    // Asking the user for the maximum score to be put
    askScore = parseInt("Enter the maximum score to be added?");
}


// state variable : it is the variable which tells the condition of the system.



