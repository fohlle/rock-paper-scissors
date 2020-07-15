

function computerChoice(){
    let rand = Math.floor(Math.random() * 3) + 1;
    if(rand === 1){
        return "rock";
    }else if(rand === 2){
        return "paper";
    }else{
        return "scissors";
    }
}

function playerChoice(text){
    text = text.toLowerCase();
    while(!(text == "rock" || text == "paper" || text == "scissors")){
        text = prompt("rock, paper, scissors").toLowerCase();
    }
    return text;
}

const cp1 = computerChoice();
const player = playerChoice("scissors");

function round(cp1, player){
    console.log(cp1 + " " + player)
    if(cp1 == "rock" && player == "scissors"){
        return "You lose " + cp1 + " beats " + player;
    }
    if(cp1 == "paper" && player == "rock"){
        return "You lose " + cp1 + " beats " + player;
    }
    if(cp1 == "scissors" && player == "paper"){
        return "You lose " + cp1 + " beats " + player
    }
    if(cp1 == "rock" && player == "rock"){
        return "Draw";
    }
    if(cp1 == "paper" && player == "paper"){
        return "Draw";
    }
    if(cp1 == "scissors" && player == "scissors"){
        return "Draw";
    }
    else{
        return "You win " + player + " beats " + cp1;
    }
    

}

console.log(round(cp1, player));