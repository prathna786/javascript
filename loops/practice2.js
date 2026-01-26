let gameNum = 25;

let userNum = prompt("Guess the number:");

while(userNum != gameNum)
{
    userNum = prompt("You entered wrong number.Guess again :");
}

console.log("Congratulation, you Entered the right number");