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
    if rock button is clicked, assign the playerSelection to 'rock' and call playRound
    if paper button is clicked, assign playerSelection to paper and call playRound
    if scissor button is clicked, playerSelection to scissors. and call playRound

-create a variable called computerSelection and store undefined into this
 create a variable called userScore=0;
 create a variable called computerScore=0;

-create a function called playRound() 
        if playerSelection=rock and computerSelection=='rock'; result 'draw' 
        call monitorScore();
        if playerSelection=rock and computerSelection=='paper'; result 'You loose! Paper beats rock!'
        monitorScore();
        if playerSelection=rock and computerSelection==scissors; result 'You win! Rock beats scissors!'
        monitorScore();
        if playerSelection=paper, computerSelection=paper; result draw
        monitorScore();
        if playerSelection=paper and computerSelection=rock; result 'You win! Paper beats rock!'
        monitorScore();
        if playerSelection=paper and computerSelection=scissors' result 'you loose! Scissors beat paper!'
        monitorScore();
        if playerSelection=scissors and computerSelection=scissors; result draw
        monitorScore();
        if playerSelection=scissors and computerSelection=rock; result 'You loose!Rock beats scissors!'
        monitorScore();
        if playerSelection=scissors and computerSelection=paper; result 'you win! Scissors beat paper!'
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
        -if the round is final:
                create a h3 element
                add Final Round
                Add the element into the div section created for displaying results

        -allow the user to click the button and store the result in playerSelection
        -call the getComputerchoice() and store the result in computerSelection
        -call get playRound(playerSelection, computerSelection) and store the result in getResult;
            create a p element and store the getResult inside it
            append the element to the result section in the document
        -create a variable called finalWinner and store the result of getwinner inside it
            create h1 element 
            if final winner =player, store humanity wins! inside h1 element and append to the result section in document
            if final winner= computer, store humanity lost, ai revolution has begun and append to result section in document

    }


    -display final score:
    if userScore> computerScore 
        return user
    else 
        computer

}

