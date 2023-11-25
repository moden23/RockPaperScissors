let scorePlayer = 0;
let scoreComputer = 0;
let roundResults = "";

function getComputerChoice() {
    let choises = ["Rock","Paper","Scissor"];
    return choises[Math.floor(Math.random() * 3)];
}
    const paraPlayerScore = document.querySelector(".playerScore");
    const paraComputerScore = document.querySelector(".computerScore");
    const paraResultsPerRound = document.querySelector(".resultsPerRound");

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log("The computer choose:" +computerSelection);
   
    if(playerSelection == "rock" && computerSelection =="rock")
    {
        paraResultsPerRound.textContent = "No one wins,rock ties with rock";
        return "No one wins,rock ties with rock";
    }
    else if(playerSelection == "rock" && computerSelection =="scissor")
    {
        paraResultsPerRound.textContent = "You won,rock beats scissor";
        return "You won,rock beats scissor";
    }
    else if(playerSelection == "rock" && computerSelection =="paper")
    {
        paraResultsPerRound.textContent = "You lost,paper beats rock";
        return "You lost,paper beats rock";
    }

    if(playerSelection == "scissor" && computerSelection =="scissor")
    {
        paraResultsPerRound.textContent = "No one wins,scissor ties with scissor";
        return "No one wins,scissor ties with scissor";
    }
    else if(playerSelection == "scissor" && computerSelection =="rock")
    {
        paraResultsPerRound.textContent = "You lost,rock beats scissor"
        return "You lost,rock beats scissor";
    }
    else if(playerSelection == "scissor" && computerSelection =="paper")
    {
        paraResultsPerRound.textContent = "You won,scissor beats paper"
        return "You won,scissor beats paper";
    }

    if(playerSelection == "paper" && computerSelection =="paper")
    {
        paraResultsPerRound.textContent = "No one wins,paper ties with paper"
        return "No one wins,paper ties with paper";
    }
    else if(playerSelection == "paper" && computerSelection =="scissor")
    {
        paraResultsPerRound.textContent = "You lost,scissor beats paper"
        return "You lost,scissor beats paper";
    }
    else if(playerSelection == "paper" && computerSelection =="rock")
    {
        paraResultsPerRound.textContent= "You won,paper beats rock"
        return "You won,paper beats rock";
    }

  }

    let rock_btn = document.querySelector(".rock");
    let paper_btn = document.querySelector(".paper");
    let scissor_btn = document.querySelector(".scissor");

    rock_btn.addEventListener("click",() => {
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection);
    })

    paper_btn.addEventListener("click",() => {
        let playerSelection = "paper";
        let computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection);
    })

    scissor_btn.addEventListener("click",() => {
        let playerSelection = "scissor";
        let computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection);
    })

    
       
         
    if(roundResults.slice(0,7) == "You won")
        {
            console.log(roundResults);
            scorePlayer++;
    
        }
    else if(roundResults.slice(0,7) == "You los")
        {
            console.log(roundResults);
            scoreComputer++;
        }
    else if(roundResults.slice(0,6) == "No one")
        {
            console.log(roundResults);
        }
        console.log(roundResults.slice(0,7));
        console.log("The score is you vs the computer: " + scorePlayer + "-" + scoreComputer);
    paraComputerScore.textContent+= scoreComputer;
    paraPlayerScore.textContent+= scorePlayer;
    
    if(scorePlayer>scoreComputer)
    {
        console.log("You won");
    }
    else if(scorePlayer<scoreComputer) {
        console.log("You lost")
    }
    else {
        console.log("Tie");
    }
 