function getComputerChoice (){
    let x = Math.random();
    console.log(x);
    if (x >=0 && x < (1/3)) return "Rock";
    else if (x >= (1/3) && x < (2/3)) return "Paper";
    else return "Scissors";
    
}

let compChoice = getComputerChoice();
console.log(compChoice);