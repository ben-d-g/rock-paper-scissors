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

        return "draw";
    }
    else if ("rockscissorspaperrock".includes(humanChoiceLower + computerChoice)){
        console.log("You Win! " + humanChoice + " beats " + computerChoice + "!");
        //humanScore++;

        return "human";
    }
    else {
        console.log("You Lose! " + computerChoice + " beats " + humanChoice + "!");
        //computerScore++;

        return "computer";
    }    
}

let humanScore = 0,
    computerScore = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        //play round
        let roundResult = playRound(e.srcElement.id, getComputerChoice());

        const roundResultDisplay = document.querySelector("#roundResultDisplay");
    
        //remove all children of roundResultDisplay
        while (roundResultDisplay.firstChild){
            roundResultDisplay.firstChild.remove();
        }

        //display results of round
        const resultDisplay = document.createElement("p")
        resultDisplay.textContent = roundResult;
        roundResultDisplay.appendChild(resultDisplay);
    });
});