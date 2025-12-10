function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0) {
        return 'Rock';
    } else if (num === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}


function getHumanChoice() {
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


function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        if (humanChoice === null) {
            console.log('Game cancelled by the user.');
            return;
        }

        let result = playRound(humanChoice, computerChoice);

        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert('Its a tie!');
            return 'tie';
        } else if (
            (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
            (humanChoice === 'Paper' && computerChoice === 'Rock') ||
            (humanChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            alert('You win!');
            return 'human';
        } else {
            alert('You lose!');
            return 'computer';
        }
    }

    console.log(`Final score — You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer won the game!");
    } else {
        console.log("The game ended in a tie!");
    }
}