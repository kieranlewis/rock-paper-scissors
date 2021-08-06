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
    //console.log(`You made it, you played ${playerSelection} and the computer plays ${computerSelection}`);
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

            //plays a best of 5 game and reports who wins at the end
            /*
            function game() {
                let playerSelection, round;
                let playerWins = 0;
                let computerWins = 0;

                for(i = 0; i < 5; i++) {
                    playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase();
                    round = playRound(playerSelection, computerPlay());
                    console.log(round);

                    if (round.substring(0,9) == 'You Lose!') {
                        computerWins++;
                    } else if (round.substring(0,8) == 'You Win!') {
                        playerWins++;
                    }
                //}

                console.log(`You have won ${playerWins} times; the computer has won ${computerWins} times`);
                if (playerWins > computerWins) {
                    console.log('You Have Won the Game! CONGRATULATIONS!');
                } else if (computerWins > playerWins) {
                    console.log('You Lose! Better Luck Next Time!');
                } else {
                    console.log('It\'s a Tie!');
                }
            }*/