function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let choicePosn = Math.floor((Math.random() * 3));
    return choices[choicePosn]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 0.5;
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
               playerSelection === "Paper" && computerSelection === "Rock" ||
               playerSelection === "Scissors" && computerSelection === "Paper"){
        return 1;
    } else {
        return -1;
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        let pChoice = prompt();
        let playerChoice =  pChoice.charAt(0).toUpperCase() + pChoice.slice(1).toLowerCase();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        if (result === 0.5){
            playerScore += 0.5;
            computerScore += 0.5;
            console.log(`Tie!`);

        } else if (result === 1){
            playerScore++;
            console.log(`You Win! ${playerChoice} beats ${computerChoice}`);

        } else {
            computerScore++;
            console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);

        }
    }
    
    if (playerScore === computerScore){
        console.log("Tie!");
    } else if (playerScore > computerScore){
        console.log(`You win ${playerScore} to ${computerScore}!`);
    } else {
        console.log(`You lose ${playerScore} to ${computerScore}`);
    }
}

playGame()
