function getComputerChoice(min, max) {
    let computerChoice = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (computerChoice === 1) {
        console.log("Computer choice: Rock");
        return "Rock";
    } else if (computerChoice === 2) {
        console.log("Computer choice: Paper");
        return "Paper";
    } else {
        console.log("Computer choice: Scissors");
        return "Scissors";
    }
}

function getHumanChoice() {
    let userChoice = prompt("What do you choose? Rock, paper or scissors. ");
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
    console.log("Your choice: " + userChoice);
    return userChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice === "Rock" && humanChoice === "Rock") {
            console.log("That's a draw!");
        } else if (computerChoice === "Rock" && humanChoice === "Paper") {
            console.log("You win!");
            humanScore += 1;
        } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
            console.log("You lose!");
            computerScore += 1;
        } else if (computerChoice === "Paper" && humanChoice === "Rock") {
            console.log("You lose!");
            computerScore += 1;
        } else if (computerChoice === "Paper" && humanChoice === "Paper") {
            console.log("That's a draw!");
        } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
            console.log("You win!");
            humanScore += 1;
        } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
            console.log("You win!");
            humanScore += 1;
        } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
            console.log("You lose!");
            computerScore += 1;
        } else if (computerChoice === "Scissors" && humanChoice === "Scissors") {
            console.log("That's a draw!");
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(1, 3);
        playRound(humanSelection, computerSelection);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
}

playGame();