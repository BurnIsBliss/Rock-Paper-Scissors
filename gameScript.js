function getComputerChoice (){
    let x = Math.random();
    if (x >=0 && x < (1/3)) return "Rock";
    else if (x >= (1/3) && x < (2/3)) return "Paper";
    else return "Scissors";
}


// function getHumanChoice (){
//     let input = prompt("Please enter your choice from these: 'Rock', 'Paper', or 'Scissors'.");
//     if (input){

//         switch (input.toLowerCase()){
//             case "rock":
//                 return "Rock";
            
//             case "paper":
//                 return "Paper";
            
//             case "scissors":
//                 return "Scissors";
            
//             default:
//                 alert ("Enter a valid choice");
//                 return 0;
//         }
//     }
// }

function createDiv (computerC, humanC, statusNo){
    const divScore = document.createElement("div");
    divScore.style.textAlign = "center";
    divScore.style.color = "white";
    console.log(computerC,humanC,statusNo);
    if (statusNo == 1){
        divScore.innerHTML = `It's a tie!!!!!<br>Current Score: ${humanScore} - ${computerScore}`;
    }
    else if (statusNo == 2){
        divScore.innerHTML = `You lose! ${computerC} beats ${humanC}.<br>Current Score: ${humanScore} - ${computerScore}`;
    }
    else {
        divScore.innerHTML = `You Win! ${humanC} beats ${computerC}.<br>Current Score: ${humanScore} - ${computerScore}`;
    }
    document.querySelector(".button-set").appendChild(divScore);
}


function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) { 
        // console.log("It's a tie!!!!!");
        createDiv(computerChoice, humanChoice, 1)}
    else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")) {
        // console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
        createDiv(computerChoice, humanChoice, 2);
    }
    else {
        // console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
        createDiv(computerChoice, humanChoice, 3);
    } 
}


function playGame(buttonValue) {
    let compChoice = getComputerChoice();
    let humanChoice = buttonValue;

    // console.log(`The main function ${humanChoice} and comp: ${compChoice}`);

    playRound(humanChoice, compChoice);
    
}

let humanScore, computerScore;
humanScore = computerScore = 0;

const button_set = document.querySelectorAll("button");
// console.log(button_set);

// for (let i = 0; i < 5; i++){
//     console.log(`Round ${i+1}`);
//     playGame();
// }

button_set.forEach((buttons) => {buttons.addEventListener("click", () => {
if(computerScore == 5) alert("The WINNER is Computer");
else if (humanScore == 5) alert("The WINNER is Human");
else playGame(buttons.textContent);})});  

// console.log(Math.floor(Math.random() * 3));