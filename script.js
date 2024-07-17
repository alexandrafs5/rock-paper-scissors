let humanScore = 0;
let computerScore = 0;
let round = 1;

const computerImage = document.querySelector(".computerImage");
const results = document.querySelector(".results");
const explaining = document.querySelector(".explaining");
const scorePlayer = document.querySelector(".scorePlayer");
const scoreComputer = document.querySelector(".scoreComputer");
const rounds = document.querySelector(".rounds");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerImage = document.querySelector(".playerImage");
const selector = document.querySelector(".selector");
const child = document.querySelector(".child");
const buttons = document.querySelector(".buttons");
const textRounds = document.querySelector(".textRounds");

function getComputerChoice(min, max) {
    let computerChoice = Math.floor(Math.random() * (max - min + 1) ) + min;
    if (computerChoice === 1) {
        computerImage.setAttribute("src", "../rock-paper-scissors/images/rock.png");
        computerImage.setAttribute("width", "225px");
        computerImage.setAttribute("height", "225px");
        return "Rock";
    } else if (computerChoice === 2) {
        computerImage.setAttribute("src", "../rock-paper-scissors/images/paper.png");
        computerImage.setAttribute("width", "225px");
        computerImage.setAttribute("height", "225px");
        return "Paper";
    } else {
        computerImage.setAttribute("src", "../rock-paper-scissors/images/scissors.png");
        computerImage.setAttribute("width", "225px");
        computerImage.setAttribute("height", "225px");
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        results.textContent = "That's a draw!";
        explaining.textContent = "";
    } else  if ((computerChoice === "Rock" && humanChoice === "Paper") || 
                (computerChoice === "Paper" && humanChoice === "Scissors") || 
                (computerChoice === "Scissors" && humanChoice === "Rock")) {
        results.textContent = "You win!";
        explaining.textContent = "";
        humanScore += 1;
    } else {
        results.textContent = "You lose!";
        explaining.textContent = "";
        computerScore += 1;
    }

    scorePlayer.textContent = "Player: " + humanScore;
    scoreComputer.textContent = "Computer: " + computerScore;
    round += 1;
    rounds.textContent = round;

    if (humanScore == 5) {
        results.textContent = "YOU WON THE GAME!!!!!";
        const removeImages = selector.removeChild(child);
        scoreComputer.textContent = "Player won " + humanScore + ":" + computerScore;
        computerImage.setAttribute("src", "../rock-paper-scissors/images/player.png");
        while (buttons.firstChild) {
            buttons.removeChild(buttons.firstChild);
        }
        rounds.textContent = "";
        textRounds.textContent = "";
        const playAgain = document.createElement("button");
        playAgain.textContent = "PLAY AGAIN";
        buttons.appendChild(playAgain);

        playAgain.addEventListener("click", function() {
            location.reload();
        });
    } else if (computerScore == 5) {
        results.textContent = "YOU LOST THE GAME!!!!!";
        const removeImages = selector.removeChild(child);
        scoreComputer.textContent = "Computer won " + computerScore + ":" + humanScore;
        computerImage.setAttribute("src", "../rock-paper-scissors/images/robot.jpg");
        while (buttons.firstChild) {
            buttons.removeChild(buttons.firstChild);
        }
        rounds.textContent = "";
        textRounds.textContent = "";
        const playAgain = document.createElement("button");
        playAgain.textContent = "PLAY AGAIN";
        buttons.appendChild(playAgain);

        playAgain.addEventListener("click", function() {   
            location.reload();
        });
    }
}

rock.addEventListener("click", function() {   
    playerImage.setAttribute("src", "../rock-paper-scissors/images/rock.png");
    playerImage.setAttribute("width", "225px");
    playerImage.setAttribute("height", "225px");
    const humanSelection = "Rock";
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
});
paper.addEventListener("click", function() {
    playerImage.setAttribute("src", "../rock-paper-scissors/images/paper.png");
    playerImage.setAttribute("width", "225px");
    playerImage.setAttribute("height", "225px");
    const humanSelection = "Paper";
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
});
scissors.addEventListener("click", function() {
    playerImage.setAttribute("src", "../rock-paper-scissors/images/scissors.png");
    playerImage.setAttribute("width", "225px");
    playerImage.setAttribute("height", "225px");
    const humanSelection = "Scissors";
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
});