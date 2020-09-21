/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore , activePlayer , gamePlaying , count , firstDice1 , secondDice1 , firstDice2 , secondDice2 ,  winScore , name1 , name2 , enterScore;

init();

/*scores = [0,0];
roundScore = 0;
activePlayer = 0; // 0 for user1 , 1 for user2;*/

// Entering the name of the players manually.
/*player1 = prompt("Enter name of Player 1?");
player2 = prompt("Enter name of Player 2?");

document.getElementById("name-0").textContent = player1;
document.getElementById("name-1").textContent = player2;*/


/*
document.querySelector(".dice").style.display = "none";


document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";*/

document.querySelector(".btn-roll").addEventListener("click" , function() {
    // This is the way we use Anonymous Function.
    
    if (gamePlaying) 
        {
         
            // 1. We need a Random Number.
            var dice1 = Math.floor((Math.random() * 6) + 1);
            var dice2 = Math.floor((Math.random() * 6) + 1);

            // 2. Display the result
            var diceDOM1 = document.querySelector(".dice1");
            var diceDOM2 = document.querySelector(".dice2");
            diceDOM1.style.display = "block";
            diceDOM2.style.display = "block";
            diceDOM1.src = "dice-" + dice1 + ".png";
            diceDOM2.src = "dice-" + dice2 + ".png";

            count += 1;
            if (count%2===0)
                {
                    secondDice1 = dice1;
                    secondDice2 = dice2;
                }
            else if (count%2!==0)
                {
                    firstDice1 = dice1;
                    firstDice2 = dice2;
                    
                }
            
            if ((firstDice1 + secondDice1)===12 || (firstDice2 + secondDice2)===12)
                {
                    // 1. the active player loses the entire score.
                    document.getElementById("current-0").textContent = 0;
                    document.getElementById("current-1").textContent = 0;
                    document.getElementById("score-" + activePlayer).textContent = 0;
                    
                    // 2. Turn goes to the next Player.
                    nextPlayer();
                }


            // 3. Update the round score If the rolled number was not 1.
            if ((dice1 !== 1) && (dice2!==1))
                {
                    // Add the score
                    roundScore  = roundScore + dice1 + dice2;
    
                    //show the roundScore of the active user.
                    document.querySelector("#current-" + activePlayer).textContent = roundScore;
                }
            else
                {
                    // Next Player
                    nextPlayer();
                    /*
                    activePlayer = 1-activePlayer;
                    roundScore = 0;
                    // when hit 1 on the dice , the active player loses the current score;
                    document.getElementById("current-" + (1-activePlayer)).textContent = roundScore;
                    //document.getElementById("current-0").textContent = 0;
                    //document.getElementById("current-1").textContent = 0;

                    // To show the change of the active player , the UI also need to be changed which depends on class named "active" which is initially on player-0-panel

                    document.querySelector(".player-0-panel").classList.toggle("active");
                    document.querySelector(".player-1-panel").classList.toggle("active");
                    //document.querySelector(".player-0-panel").classList.remove("active");
                    //document.querySelector(".player-1-panel").classList.add("active");


                    // to hide the dice when the active player hits 1 so that the next active player can start from 0 once again
                    document.querySelector(".dice").style.display = "none";*/

                }
            
        }    
    
});


document.querySelector(".btn-hold").addEventListener("click" , function() {
    
    if (gamePlaying)
        {
          
            // 1. Update the roundScore to the Main Score on the top
            scores[activePlayer] += roundScore;
            document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
            
    
    
            // 2. Check if player won the game
            if(scores[activePlayer] >= enterScore)
                {
                    //Make the gamePlaying false so that all the buttons would stop working after winner 
                    gamePlaying = false;
                    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
                    document.querySelector(".dice1").style.display = "none";
                    document.querySelector(".dice2").style.display = "none";
                    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
                    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
            
                }
            else
                {
                    // 3. Change the active Player and reset the score to zero(which we only want if only the active player's score doesn't exceed 100)
                    nextPlayer();
                }
            
            count = 0;
            firstDice1 = 0;
            secondDice1 = 0;
            firstDice2 = 0;
            secondDice2 = 0;
        }
        
});


function nextPlayer() {
    
    activePlayer  = 1-activePlayer;
    roundScore = 0;
    count = 0;
    firstDice1 = 0;
    firstDice2 = 0;
    secondDice1 = 0;
    secondDice2 = 0;
    document.querySelector("#current-" + (1-activePlayer)).textContent = roundScore;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";
    
}


document.querySelector(".btn-new").addEventListener("click" , init);

// this function is used so that we can use it up when new game button is used.
function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    firstDice1 = 0;
    secondDice1 = 0;
    firstDice2 = 0;
    secondDice2 = 0;
    count = 0;
    
    name1 = prompt("Enter your name , Player1?");
    name2 = prompt("Enter your name , Player2?");
    enterScore = parseInt(prompt("Enter the winning score?"));
    
    
    document.getElementById("name-0").textContent = name1;
    document.getElementById("name-1").textContent = name2;
        
    document.querySelector(".dice1").style.display = "none";
    document.querySelector(".dice2").style.display = "none";


    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    
    
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    
    // set the value of SCORE input field to the entered score
    document.getElementById("winning-score").value = enterScore;
}



/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/










