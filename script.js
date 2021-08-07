let computerWins = 0;
let playerWins = 0;

game();

function game() {
    const rockBtn = document.querySelector('#rock-btn');
    rockBtn.addEventListener('click', () => getResult('rock'));

    const paperBtn = document.querySelector('#paper-btn');
    paperBtn.addEventListener('click', () => getResult('paper'));

    const scissorsBtn = document.querySelector('#scissors-btn');
    scissorsBtn.addEventListener('click', () => getResult('scissors'));
}

function getResult(playerSelection) {
    let round = playRound(playerSelection, computerPlay());

    const resultsDiv = document.querySelector('#div-results');
    resultsDiv.textContent = round;

    const playerScore = document.querySelector('#p-score');
    const computerScore = document.querySelector('#c-score');

    if (round.substring(0,9) == 'You Lose!') {
        computerWins++;
        computerScore.textContent = `Computer: ${computerWins}`;

        if(computerWins >= 5) {
            resultsDiv.textContent += `\r\nYou have lost ${playerWins}-${computerWins}. Better luck next time`
            playerWins = 0; computerWins = 0;

            computerScore.textContent = "Computer: " + computerWins;
            playerScore.textContent = "You: " + playerWins;
        }
        return 'lose';
    } else if (round.substring(0,8) == 'You Win!') {
        playerWins++;
        playerScore.textContent = `You: ${playerWins}`;

        if(playerWins >= 5) {
            resultsDiv.textContent += `\r\nYou have won ${playerWins}-${computerWins}. Congratulations!`
            playerWins = 0; computerWins = 0;

            computerScore.textContent = "Computer: " + computerWins;
            playerScore.textContent = "You: " + playerWins;
        }
        return 'win';
    } else {
        return 'draw';
    }
}

//calculates a random number between 0 and 2 and depending on this number returns either rock, paper, or scissors
function computerPlay() {
    let computerMove = Math.floor(Math.random()*3);

    if(computerMove == 0) {
        return 'rock';
    } else if (computerMove == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//figures out who wins between the player and computer by comparing their selections
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock';
        } else if (computerSelection == 'scissors') {
            return 'You Win! Rock beats Scissors';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock';
        }
    } else {
        if (computerSelection == 'rock') {
            return 'You Lose! Rock beats Scissors';
        } else if (computerSelection == 'paper') {
            return 'You Win! Scissors beats Paper';
        }
    }
                
    return 'You Draw!';
}