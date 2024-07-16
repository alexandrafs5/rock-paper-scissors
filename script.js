function getComputerChoice(min, max) {
    let computerChoice = Math.floor(Math.random() * (max - min + 1) ) + min;
    const computerImage = document.querySelector(".computerImage");
    if (computerChoice === 1) {
        //console.log("Computer choice: Rock");
        computerImage.setAttribute("src", "../rock-paper-scissors/images/rock.png");
        computerImage.setAttribute("width", "225px");
        computerImage.setAttribute("height", "225px");
        return "Rock";
    } else if (computerChoice === 2) {
        //console.log("Computer choice: Paper");
        computerImage.setAttribute("src", "../rock-paper-scissors/images/paper.png");
        computerImage.setAttribute("width", "225px");
        computerImage.setAttribute("height", "225px");
        return "Paper";
    } else {
        //console.log("Computer choice: Scissors");
        computerImage.setAttribute("src", "../rock-paper-scissors/images/scissors.png");
        computerImage.setAttribute("width", "225px");
        computerImage.setAttribute("height", "225px");
        return "Scissors";
    }
}

//function getHumanChoice() {
    //let userChoice = prompt("What do you choose? Rock, paper or scissors. ");
    //userChoice = userChoice.toLowerCase();
    //userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
    //console.log("Your choice: " + userChoice);
    //return userChoice;
//}

//function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    let round = 1;

    function playRound(humanChoice, computerChoice) {
        const results = document.querySelector(".results");
        const explaining = document.querySelector(".explaining");

        const scorePlayer = document.querySelector(".scorePlayer");
        const scoreComputer = document.querySelector(".scoreComputer");

        const rounds = document.querySelector(".rounds");
        
        if (computerChoice === humanChoice) {
            results.textContent = "That's a draw!";
            explaining.textContent = "";

            round += 1;
            rounds.textContent = round;
            //console.log("That's a draw!");
        } else  if ((computerChoice === "Rock" && humanChoice === "Paper") || 
                    (computerChoice === "Paper" && humanChoice === "Scissors") || 
                    (computerChoice === "Scissors" && humanChoice === "Rock")) {
            results.textContent = "You win!";
            explaining.textContent = "";

            //console.log("You win!");
            humanScore += 1;
            scorePlayer.textContent = "Player: " + humanScore;

            round += 1;
            rounds.textContent = round;
        } else if ((computerChoice === "Rock" && humanChoice === "Scissors") || 
                   (computerChoice === "Paper" && humanChoice === "Rock") || 
                   (computerChoice === "Scissors" && humanChoice === "Paper")) {
            results.textContent = "You lose!";
            explaining.textContent = "";

            //console.log("You lose!");
            computerScore += 1;
            scoreComputer.textContent = "Computer: " + computerScore;

            round += 1;
            rounds.textContent = round;
        }
    }

    //for (let i = 0; i < 5; i++) {
        //console.log("ROUND: " + (i + 1));
        //const humanSelection = getHumanChoice();
        //const computerSelection = getComputerChoice(1, 3);
        //playRound(humanSelection, computerSelection);
        //console.log("Your score: " + humanScore);
        //console.log("Computer score: " + computerScore);
    //}
//}
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const playerImage = document.querySelector(".playerImage");

rock.addEventListener("click", function() {   
    //console.log("Your choice: Rock");
    playerImage.setAttribute("src", "../rock-paper-scissors/images/rock.png");
    playerImage.setAttribute("width", "225px");
    playerImage.setAttribute("height", "225px");
    const humanSelection = "Rock";
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
});
paper.addEventListener("click", function() {
    //console.log("Your choice: Paper");
    playerImage.setAttribute("src", "../rock-paper-scissors/images/paper.png");
    playerImage.setAttribute("width", "225px");
    playerImage.setAttribute("height", "225px");
    const humanSelection = "Paper";
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
});
scissors.addEventListener("click", function() {
    //console.log("Your choice: Scissors");
    playerImage.setAttribute("src", "../rock-paper-scissors/images/scissors.png");
    playerImage.setAttribute("width", "225px");
    playerImage.setAttribute("height", "225px");
    const humanSelection = "Scissors";
    const computerSelection = getComputerChoice(1, 3);
    playRound(humanSelection, computerSelection);
});

//console.log("WELCOME TO ROCK, PAPER, SCISSORS!!!!!!!!!");
//playGame();