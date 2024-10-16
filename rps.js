function rockPaperScissors(player1, player2) {

// defines a dictionary of winning rules, each key represents a choice player1 can make and
// has a set of corresponding values which it beats
  const rules = {
    rock: ["lizard", "scissors"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    spock:["scissors", "rock"],
    lizard: ["spock","paper"],
  };
  
//checks for a draw
  if (player1 == player2){
    return "draw"
  };
// checks if player2's choice is one of the choices that player1 beats according to the rules. 
// If yes, it returns "player1", indicating player1 wins. Otherwise, it returns "player2", indicating player2 wins.
   return rules [player1].includes(player2) ? "player1" : "player2"
};

console.log(rockPaperScissors())

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}

