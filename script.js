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
        if (computerChoice === humanChoice) {
            console.log("That's a draw!");
        } else  if ((computerChoice === "Rock" && humanChoice === "Paper") || 
                    (computerChoice === "Paper" && humanChoice === "Scissors") || 
                    (computerChoice === "Scissors" && humanChoice === "Rock")) {
            console.log("You win!");
            humanScore += 1;
        } else if ((computerChoice === "Rock" && humanChoice === "Scissors") || 
                   (computerChoice === "Paper" && humanChoice === "Rock") || 
                   (computerChoice === "Scissors" && humanChoice === "Paper")) {
            console.log("You lose!");
            computerScore += 1;
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log("ROUND: " + (i + 1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(1, 3);
        playRound(humanSelection, computerSelection);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }
}

console.log("WELCOME TO ROCK, PAPER, SCISSORS!!!!!!!!!");
playGame();