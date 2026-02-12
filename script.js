console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let choice;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice == 0) {
    computerChoice = "rock";
    console.log("rock");
  } else if (computerChoice == 1) {
    computerChoice = "paper";
    console.log("paper");
  } else if (computerChoice == 2) {
    computerChoice = "scissors";
    console.log("scissors");
  }

  return computerChoice;
}

function getHumanChoice() {
  choice = prompt("rock, paper, or scissors? ").toLowerCase();

  return choice.trim();
}

function playRound(computerChoice, humanChoice) {
  for (let i = 1; i <= 5; i++) {
    console.log(`round: ${i}`);
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    console.log(`Round choices: ${humanSelection}, ${computerSelection}`);

    if (
      choice === "" ||
      (choice !== "rock" && choice !== "paper" && choice !== "scissors")
    ) {
      choice = prompt("rock, paper, or scissors? ").trim().toLowerCase();
    } else if (computerSelection === "rock" && humanSelection === "scissors") {
      computerScore++;
      console.log("Computer won this round");
    } else if (computerSelection === "paper" && humanSelection === "rock") {
      computerScore++;
      console.log("Computer won this round");
    } else if (computerSelection === "scissors" && humanSelection === "paper") {
      computerScore++;
      console.log("Computer won this round");
    } else if (humanSelection === computerSelection) {
      console.log("Tie!");
    } else {
      humanScore++;
      console.log("Human won!");
    }
  }
  console.log(humanScore + " " + computerScore);
}

function playGame() {
  playRound();
}

playGame();
