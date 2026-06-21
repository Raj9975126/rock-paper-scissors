
let i = 0;
while(true){
    let playerMove = prompt("Enter rock, paper or scissor");

    if (playerMove !== "rock" && playerMove !== "paper" && playerMove !== "scissor"){
        continue;
    }

    let randomNumber = Math.random();
    let computerMove;

    if (randomNumber < 0.33) {
        computerMove = "rock";
    } else if (randomNumber < 0.67) {
        computerMove = "paper";
    } else {
        computerMove = "scissor";
    }

    // console.log(computerMove);


    if (playerMove === computerMove) {
        alert(`player - ${playerMove} | computer - ${computerMove} | Draw`);
    } else if (playerMove === "rock" && computerMove === "scissor") {
        alert(`player - ${playerMove} | computer - ${computerMove} |You won`);
    } else if (playerMove === "paper" && computerMove === "rock") {
        alert(`player - ${playerMove} | computer - ${computerMove} |You won`);
    } else if (playerMove === "scissor" && computerMove === "paper") {
        alert(`player - ${playerMove} | computer - ${computerMove} |You won`);
    } else {
        alert(`player - ${playerMove} | computer - ${computerMove}|Computer won`);
    }

    let playAgain = prompt("want to continue (yes/no)?")
    if (playAgain == "no"){
        break;
    }
    
}



