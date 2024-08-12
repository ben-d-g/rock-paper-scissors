function getComputerChoice(){
    let a = Math.random();
    if (a < (1/3)){
        return "rock";
    }
    else if (a < (2/3)){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    return prompt("Please choose one of: rock, paper, scissors.");
}



function playGame(){
    let humanScore = 0,
        computerScore = 0;

    function playRound(humanChoice, computerChoice){
        let humanChoiceLower = humanChoice.toLowerCase()
        if (humanChoiceLower === computerChoice){
            console.log("It's a draw!");
        }
        else if ("rockscissorspaperrock".includes(humanChoiceLower + computerChoice)){
            console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
            humanScore++;
        }
        else {
            console.log("You Lose! " + computerChoice + " beats " + humanChoice + "!");
            computerScore++;
        }    
    }

    for (let i = 0; i <= 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
        console.log("The current scores are:")
        console.log("User: " + humanScore);
        console.log("Computer: " + computerScore);
    }

    if (humanScore > computerScore){
        console.log("Well done! You won!");
    }
    else if (computerScore > humanScore){
        console.log("Tough luck! The computer won!");
    }
    else{
        console.log("It was a draw! We should play again.")
    }

}