function getComputerChoice() {
	let x = Math.random();
	if (x >= 0 && x < 1 / 3) return "Rock";
	else if (x >= 1 / 3 && x < 2 / 3) return "Paper";
	else return "Scissors";
}

function createDiv(computerC, humanC, statusNo) {
	const divScore = document.createElement("div");
	divScore.style.textAlign = "center";
	divScore.style.color = "white";
	console.log(computerC, humanC, statusNo);
	if (statusNo == 1) {
		divScore.innerHTML = `It's a tie!!!!!<br>Current Score: ${humanScore} - ${computerScore}`;
	} else if (statusNo == 2) {
		divScore.innerHTML = `${playerName} Loses! ${computerC} beats ${humanC}.<br>Current Score: ${humanScore} - ${computerScore}`;
	} else {
		divScore.innerHTML = `${playerName} Wins! ${humanC} beats ${computerC}.<br>Current Score: ${humanScore} - ${computerScore}`;
	}
	document.querySelector(".button-set").appendChild(divScore);
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
		createDiv(computerChoice, humanChoice, 1);
	} else if (
		(humanChoice == "Rock" && computerChoice == "Paper") ||
		(humanChoice == "Paper" && computerChoice == "Scissors") ||
		(humanChoice == "Scissors" && computerChoice == "Rock")
	) {
		computerScore += 1;
		createDiv(computerChoice, humanChoice, 2);
	} else {
		humanScore += 1;
		createDiv(computerChoice, humanChoice, 3);
	}
}

function playGame(buttonValue) {
	let compChoice = getComputerChoice();
	let humanChoice = buttonValue;
	playRound(humanChoice, compChoice);
}

let humanScore, computerScore, playerName;
humanScore = computerScore = 0;
playerName = "";

const button_set = document.querySelectorAll("button");

button_set.forEach((buttons) => {
	buttons.addEventListener("click", () => {
		if (computerScore == 0 && humanScore == 0) {
			playerName = document.querySelector("#Name").value
				? document.querySelector("#Name").value
				: "No Name";
		}
		if (computerScore == 5) alert("The WINNER is Computer");
		else if (humanScore == 5) alert(`The WINNER is ${playerName}`);
		else playGame(buttons.textContent);
	});
});
