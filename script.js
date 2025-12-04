function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
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


