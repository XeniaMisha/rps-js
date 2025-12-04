let computerScore = 0;
let humanScore = 0;

function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


function getHumanChoice () {
    let humanAnswer = '';
    while (true) {
        const raw = prompt('Enter your choice: rock, paper, or scissors', 'scissors');
        if (raw === null) {
            return null;
        }
        humanAnswer = raw.toLowerCase();
        if (humanAnswer === 'rock' || humanAnswer === 'paper' || humanAnswer === 'scissors') {
            break;
        }
        alert('Oops! Please enter rock, paper, or scissors.');
    }
    return humanAnswer.charAt(0).toUpperCase() + humanAnswer.slice(1).toLowerCase();
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert ('Its a tie!');
        return 'Its a tie!';
    } else if (humanChoice === 'Rock' && computerChoice === 'Scissors' || humanChoice === 'Paper' && computerChoice === 'Rock' || humanChoice === 'Scissors' && computerChoice === 'Paper') {
        humanScore++;
        alert ('You win!');
        return 'You win!';
    } else {
        computerScore++;
        alert ('You lose!');
        return 'You lose!';
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let round = playRound(humanSelection, computerSelection);

if (round === null) {
    console.log('Game cancelled by the user.');
} else {
    console.log(round);
}

