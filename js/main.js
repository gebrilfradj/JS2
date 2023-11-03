// conditionals: ternary Operator


let playerOne = "rock";
let computer = "scissors";
let result =
  playerOne === computer
    ? "tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins!"
    : "playerOne wins!";

    console.log(result);