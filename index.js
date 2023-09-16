
let playerSelection;
let computerSelection;
let playerScore=0;
let computerScore=0;

function game(){
    for(let i=0;i<5;i++){
        playerSelection=prompt('Enter any choice (rock/paper/scissors): ');
        if(playerSelection==='rock'|| playerSelection==='paper'|| playerSelection ==='scissors'){
            computerSelection=computerChoice();
            let getResult=playRound(playerSelection,computerSelection);
            console.log(getResult);
        }
        else {
            alert('enter a valid value!');
            --i;
            continue;
        }
    }
    console.log(getWinner(playerScore, computerScore));
}

function playRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase()==='rock' && computerSelection==='rock'){
        return 'draw';
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection==='paper'){
        computerScore++;
        return 'You loose! Paper beats Rock.';
    }
    else if(playerSelection.toLowerCase()==='rock' &&  computerSelection==='scissors'){
        playerScore++;
        return 'You win! Rock beats scissors';
    }
    else if(playerSelection.toLowerCase()==='paper' && computerSelection==='rock'){
        playerScore++;
        return 'You win! Paper beats rock';
    }
    else if(playerSelection.toLowerCase()==='paper'&& computerSelection==='paper'){
        return 'draw';
    }
    else if(playerSelection.toLowerCase()==='paper'&&computerSelection==='scissors'){
        computerScore++;
        return 'You loose! Scissors beat paper';
    }
    else if(playerSelection.toLowerCase()==='scissors'&&computerSelection==='rock'){
        computerScore++;
        return 'You loose! Rock beats scissors';
    }
    else if(playerSelection.toLowerCase()==='scissors' && computerSelection==='paper'){
        playerScore++;
        return 'You won! Scissors beat paper';
    }
    else{
        return 'draw';
    }
}

function computerChoice(){
    let number=Math.random();
    if(number<0.34){
        return 'rock';
    }
    else if (number<0.67){
        return 'paper';
    }
    else return 'scissors';
}

function getWinner(playerScore, computerScore){
   return (
    (playerScore>computerScore)? 
    'player wins!' : 
    'computer wins!');
}

game();


