function getComputerChoice (){
    let x = Math.random();
    if (x >=0 && x < (1/3)) return "Rock";
    else if (x >= (1/3) && x < (2/3)) return "Paper";
    else return "Scissors";
}


function getHumanChoice (){
    let input = prompt("Please enter your choice from these: 'Rock', 'Paper', or 'Scissors'");
    switch (input.toLowerCase()){
        case "rock":
            return "Rock";
         
        case "paper":
            return "Paper";
        
        case "scissors":
            return "Scissors";
        
        default:
            alert ("Enter a valid choice");
    }
}


function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice) console.log("It's a tie!!!!!");
    else if ((humanChoice == "Rock" && computerChoice == "Paper") || (humanChoice == "Paper" && compChoice == "Scissors") || (humanChoice == "Scissors" && compChoice == "Rock")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore += 1;
    }
    else  console.log(`You Win! ${humanChoice} beats ${computerChoice}.`); humanScore += 1;
}



let humanScore, computerScore;
humanScore = computerScore = 0;


let compChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(humanChoice, compChoice);
// console.log(Math.floor(Math.random() * 3));