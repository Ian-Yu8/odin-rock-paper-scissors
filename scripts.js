function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choicePosn = Math.floor((Math.random() * 3));
    return choices[choicePosn]
}

function playRound(playerSelection, computerSelection){
    let pSelection =  playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let cSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();

    if (pSelection === cSelection){
        return "Tie!";
    } else if (pSelection === "Rock" && cSelection === "Scissors" ||
               pSelection === "Paper" && cSelection === "Rock" ||
               pSelection === "Scissors" && cSelection === "Paper"){
        return `You Win! ${pSelection} beats ${cSelection}`
    } else {
        return `You Lose! ${cSelection} beats ${pSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
