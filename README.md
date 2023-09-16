# RockPaperScissors

# Understand

The game is rock paper scissors. This game is going to be played by the user against the computer. 
If the user says rock and the computer says rock, the score will be draw
if the user says rock and the computer says scissors, user wins
if the user says rock and computer says paper, computer wins
If the user says scissors and the computer says scissors, it will be draw
if the user says scissors and computer says rock, computer wins
if the user says scissors and computer says paper, user wins
if the user says paper and computer says paper, the score will be draw
if the user says paper and computer says rock , the user wins
if the user says paper and computer says scissors, user wins

The game is going to be played 5 rounds and the one which has the highest score at the end of 5 rounds wins

# Plan 

-user interface: there will be 3 button for each choices. there will also be a section to display the results( the 
running score, who wins in that round and the final winner after 5 rounds)
-inputs: the user will be allowed to click the buttons based on his choice
-output: the users choice will be evaluated with the randomly generated choice of the computer. Based on this the choice, output will 
         given like this "you loose! paper beats rock" followed by the current score of the user and the computer. After 5 rounds, the 
         player with the highest score wins and the output will be 'Player wins!'

# Psuedocode
-create 3 buttons for rock paper scissors
-create a section to display the results
-create 3 variables rock, paper and scissors and assign the curresponding buttons from the document into this
-attach click event listeners to each of the buttons
-playerSelection=undefined;
    if rock button is clicked, assign the playerSelection to 'rock'
    if paper button is clicked, assign playerSelection to paper
    if scissor button is clicked, playerSelection to scissors.
-create a variable called computerSelection and store undefined into this
 create a variable called userScore=0;
 create a variable called computerScore=0;
-create a functiion called playRound() 
        if rock and computerSelection=='rock'; result 'draw' 
        call monitorScore();
        if rock and computerSelection=='paper'; result 'You loose! Paper beats rock!'
        monitorScore();
        if rock and computerSelection==scissors; result 'You win! Rock beats scissors!'
        monitorScore();
        if paper, computerSelection=paper; result draw
        monitorScore();
        if paper and computerSelection=rock; result 'You win! Paper beats rock!'
        monitorScore();
        if paper and computerSelection=scissors' result 'you loose! Scissors beat paper!'
        monitorScore();
        if scissors and computerSelection=scissors; result draw
        monitorScore();
        if scissors and computerSelection=rock; result 'You loose!Rock beats scissors!'
        monitorScore();
        if scissors and computerSelection=paper; result 'you win! Scissors beat paper!'
        monitorScore();
        return result
    
-create a function called computerChoice()
    create a variable called number and assing math.random() to it
    if number<0.34{
        return 'rock';
    }
    if number < 0.67{
        return paper;
    }
    else return scissors


-creata a function called game() that plays the game 5 times and declares who is the winner{
    -create for loop. the loop should execute 5 times{
        -ask the user for prompt and store it inside userSelection
            if the ans aint valid, display a message: enter a valid choice!
        -call the getComputerchoice() and store the result in computerSelection
        -call get playRound(userSelection, computerSelection) and store the result in getResult;
        -display roundResult in console
    }


    -display final score:
    if userScore> computerScore 
        display user wins
    else 
        display computer wins

}

