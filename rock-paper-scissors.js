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

function playRound(humanChoice, computerChoice){
    let humanChoiceLower = humanChoice.toLowerCase()
    if (humanChoiceLower === computerChoice){
        console.log("It's a draw!");
    }
    else if ("rockscissorspaperrock".includes(humanChoiceLower + computerChoice)){
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
        //humanScore++;
    }
    else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + "!");
        //computerScore++;
    }    
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        //console.log(e.srcElement.id)
        playRound(e.srcElement.id, getComputerChoice());
    });
});