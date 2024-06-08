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


function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) console.log("It's a tie!!!!!");
    else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Rock")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    }
    else {
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        humanScore += 1;
    } 
    console.log(humanScore, computerScore);
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

if ((humanScore == 5) || (computerScore == 5))
    console.log(`The final score is Human: ${humanScore} |||||| Computer: ${computerScore}`);
else
    button_set.forEach((buttons) => {buttons.addEventListener("click", () => playGame(buttons.textContent))});  

// console.log(Math.floor(Math.random() * 3));