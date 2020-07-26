

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


/*
function playerChoice(){
    text = testText.toLowerCase();
    while(!(text == "rock" || text == "paper" || text == "scissors")){
        text = prompt("rock, paper, scissors").toLowerCase();
    }
    return text;
}
*/

const cp1 = computerChoice();
// const player = playerChoice("");

function round(cp1, player){
    console.log(cp1 + " " + player)
    let text = "";
    if(cp1 == "rock" && player == "scissors"){
        text = "You lose " + cp1 + " beats " + player;
        printToPara(text);
        return;
    }
    if(cp1 == "paper" && player == "rock"){
        text = "You lose " + cp1 + " beats " + player;
        printToPara(text);
        return;
    }
    if(cp1 == "scissors" && player == "paper"){
        text = "You lose " + cp1 + " beats " + player
        printToPara(text);
        return;
    }
    if(cp1 == "rock" && player == "rock"){
        text = "Draw";
        printToPara(text);
        return;
    }
    if(cp1 == "paper" && player == "paper"){
        text = "Draw";
        printToPara(text);
        return;
    }
    if(cp1 == "scissors" && player == "scissors"){
        text = "Draw";
        printToPara(text);
        return;
    }
    else{
        text = "You win " + player + " beats " + cp1;
        printToPara(text);
        return;
    }
}
let testText = "";
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () =>{
    testText = "rock";
    console.log(round(computerChoice(), testText));
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () =>{
    testText = "paper";
    console.log(round(computerChoice(), testText));
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () =>{
    testText = "scissors";
    console.log(round(computerChoice(), testText));
});

function printToPara(string){
    let para = document.querySelector("#paraRes");
    para.textContent = string;
}