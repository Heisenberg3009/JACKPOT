//What's the core features of this application?
//1. Deposit some money.
//2. Determine the number of lines to bet on
//3. Collect a bet amount.
//4. Spin the slot machine
//5. Check if the user won.
//6. Give user their winnings.
//7. Play again.

/*

Step 1: Initialize nodejs using npm init.

Step 2: Install Prompt Sync package by using: npm i prompt -sync
The command npm i prompt-sync is used to install the prompt-sync 
package, which is a Node.js module that enables synchronous user 
input (prompting) in the terminal. In other words, it allows you 
to ask users for input and wait for their response without needing 
complex asynchronous code.

*/

//Inside the deposit function we are going to ask the user to enter
//a certain amount, the way we do it is by using the prompt sync pkg.
const prompt = require("prompt-sync")();

/*
In the above code, here’s what each part does:

1. require("prompt-sync"):
The require() function in Node.js is used to import or load modules 
(libraries) so you can use them in your code.
"prompt-sync" is a module that allows you to use prompt functionality 
in Node.js, meaning it can take user input from the console.
In browsers, prompt() is built-in for user input, but Node.js doesn’t 
have prompt() by default, so "prompt-sync" provides a similar way to 
get input.

2. prompt-sync:
"prompt-sync" is a popular third-party library (module) designed to 
create a synchronous prompt for command-line input. Synchronous means 
it waits for the user to enter something before moving on to the next 
line of code.
require("prompt-sync") loads the module and returns a function. Adding 
() calls that function immediately, creating an instance of prompt that 
you can use to read user input.

3. const prompt =:
The const keyword declares a constant variable prompt that holds the 
function returned by require("prompt-sync")().
This prompt function can now be used to prompt the user for input.
*/

//Step 1 - deposit money function.
//Function Declaration

/*
function deposit (){

}
*/

/*
Arrow Function
parseFloat will take a string and convert it to its floating point
value. If the user entered a string that is not a number, then the 
function will return NaN.
While true -  basically an infinite loop, we will continue to do this.
So, we will ask the user to enter a number, check if it is a 
number, then 
*/
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try agin.");
    } else {
      return numberDepositAmount;
    }
  }
};
//Step 2: Get the number of lines
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1 - 3): ");
    const numberLines = parseFloat(lines);

    if (isNaN(numberLines) || numberLines <= 0 || numberLines > 3) {
      console.log("Invalid number of lines, try agin.");
    } else {
      return numberLines;
    }
  }
};

//Step 3: Get the bet from the user
const getBet = (balance) => {
    while (true) {
        const bet = prompt("Enter the amount to bet: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > 3) {
          console.log("Invalid bet, try agin.");
        } else {
          return numberBet;
        }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
//To check progress
//console.log(depositAmount);
