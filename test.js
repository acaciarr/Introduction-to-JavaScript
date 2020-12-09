function game(user, computer) {
  if(user === computer) {
     return "The result is a tie!";
  }
  if(user === "rock") {
     if(computer === "scissors") {
        return "rock wins";
     } else {
        return "paper wins";
     }
  }
  if(user === "paper") {
     if(computer === "rock") {
        return "paper wins";
     } else {
        if(computer === "scissors") {
            return "scissors wins";
     }
  }
  if(user === "scissors") {
     if(computer === "rock") {
        return "rock wins";
     } else {
        if(computer === "paper") {
            return "scissors wins";
     }
  }

var userChoice = prompt("Rock/ paper/ scissors?");
var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}
}


console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
console.log(game(userChoice, computerChoice));