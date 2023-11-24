

function getComputerChoice() {
    let choises = ["Rock","Paper","Scissor"];
    return choises[Math.floor(Math.random() * 3)];
}




function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    console.log("The computer choose:" +computerSelection);
   
    
    if(playerSelection == "rock" && computerSelection =="rock")
    {

        return "No one wins,rock ties with rock";
    }
    else if(playerSelection == "rock" && computerSelection =="scissor")
    {
        
        return "You won,rock beats scissor";
    }
    else if(playerSelection == "rock" && computerSelection =="paper")
    {
    
        return "You lost,paper beats rock";
    }

    if(playerSelection == "scissor" && computerSelection =="scissor")
    {
        
        return "No one wins,scissor ties with scissor";
    }
    else if(playerSelection == "scissor" && computerSelection =="rock")
    {
        
        return "You lost,rock beats scissor";
    }
    else if(playerSelection == "scissor" && computerSelection =="paper")
    {
        
        return "You won,scissor beats paper";
    }

    if(playerSelection == "paper" && computerSelection =="paper")
    {
        
        return "No one wins,paper ties with paper";
    }
    else if(playerSelection == "paper" && computerSelection =="scissor")
    {
        
        return "You lost,scissor beats paper";
    }
    else if(playerSelection == "paper" && computerSelection =="rock")
    {
        
        return "You won,paper beats rock";
    }

  }



function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
   
     
        for(let i=0;i<5;i++) 
        {
            
            let playerSelection = prompt("Choose rock,paper or scissor");
            let computerSelection = getComputerChoice();
            let roundResults = playRound(playerSelection, computerSelection);
            
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
            console.log("The score is you vs the computer: " + scorePlayer + "-" + scoreComputer);
            if(scorePlayer == 3 || scoreComputer == 3)
            {
                break;
            }
        }
    
 
    
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
}

game();