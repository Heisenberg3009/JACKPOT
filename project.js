//What's the core features of this application?
//1. Deposit some money.
//2. Determine the number of lines to bet on
//3. Collect a bet amount.
//4. Spin the slot machine
//5. Check if the user won.
//6. Give user their winnings.
//7. Play again.

//Step 6 - Global Variables
const ROWS = 3;
const COLS = 3;

//We are using Snake Case here, since it's in all caps.
//We are declaring two JS object with four parameters each.
//SYMBOLS_COUNT is for declaring the number of occurrences of each parameter.
//SYMBOLS_VALUES is for declaring the weight and value of each parameter.
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};
/*

Step 1: Initialize nodejs using npm init.

Step 2: Install Prompt Sync package by using: npm i prompt -sync
The command npm i prompt-sync is used to install the prompt-sync package, which is a Node.js module that enables synchronous user input (prompting) in the terminal. In 
other words, it allows you to ask users for input and wait for their response without needing complex asynchronous code.

*/

//Inside the deposit function we are going to ask the user to enter a certain amount, the way we do it is by using the prompt sync pkg.
const prompt = require("prompt-sync")();

/*

In the above code, here’s what each part does:

1. require("prompt-sync"):
The require() function in Node.js is used to import or load modules (libraries) so you can use them in your code.
"prompt-sync" is a module that allows you to use prompt functionality in Node.js, meaning it can take user input from the console.
In browsers, prompt() is built-in for user input, but Node.js doesn’t have prompt() by default, so "prompt-sync" provides a similar way to get input.

2. prompt-sync:
"prompt-sync" is a popular third-party library (module) designed to create a synchronous prompt for command-line input. Synchronous means it waits for the user to 
enter something before moving on to the next line of code.
require("prompt-sync") loads the module and returns a function. Adding () calls that function immediately, creating an instance of prompt that you can use to read user 
input.

3. const prompt =:
The const keyword declares a constant variable prompt that holds the function returned by require("prompt-sync")(). 
This prompt function can now be used to prompt the user for input.

*/

//Step 3 - deposit money function: This can be done either using function declarations or using arrow functions.

/*
Function Declaration:
function deposit (){

}
*/

//Arrow Function:
//We are using camel case here, as it is the usual way of representing JS names.
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};
/*
parseFloat will take a string and convert it to its floating point value. If the user entered a string that is not a number, then the function will return NaN.
While true -  basically an infinite loop, we will continue to do this. So, we will ask the user to enter a number, then check if it is a number. If it is, we will then 
break the loop.
*/
//Step 4: Get the number of lines
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};
//Step 5: Get the bet from the user
//Since the bet is based off number of lines, it will affect the maximum bet. Hence when the bet is place, the maximum bet cannot be greater than the  overall total balance.
const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
      console.log("Invalid bet, try again.");
    } else {
      return numberBet;
    }
  }
};
//Step 7: Spin the slot machine
//Here => for (const [symbol, count, counts] of Object.entries(SYMBOLS_COUNT)
//const slot = () => { ... } : Since it’s an arrow function, it has no 'this' binding and is designed to execute a block of code when called.
//for (const [symbol, count, counts] of Object.entries(SYMBOLS_COUNT)) { ... }
//This line is a for...of loop, which iterates over the entries of SYMBOLS_COUNT.
// Object.entries(SYMBOLS_COUNT) returns an array of key-value pairs from the SYMBOLS_COUNT object.
//.push in JS works the same as .append() in other languages.
const spin = () => {
  const symbols = [];
  //We generated an array with all the available symbols to  pick from.
  //An empty array, symbols, is created to store symbols based on their respective counts, as defined in SYMBOLS_COUNT.
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  //We have a temporary array containing the three spinning reels. They will hold each column of reel.
  //If we know we have 3 columns, we could have declared const reels = [[],[],[]]. But if we want to make a generalized code, we will declare like this:
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    //This is done to include a new array space every time there is a new column.
    reels.push([]);
    //We now copy all of the available symbols inside of the for loop.
    //Remember we cannot remove the symbols from the available, we should have a unique array to pick from for this specific reel.
    const reelSymbols = [...symbols];
    //Then we loop through all of the rows.
    for (let j = 0; j < ROWS; j++) {
      //We generate the random index.
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      //Now, we randomly select whatever symbol is at that index.
      const selectedSymbol = reelSymbols[randomIndex];
      //We push that into the current reel that we are working on.
      reels[i].push(selectedSymbol);
      //We remove from the selected symbols, so that we do not select it again.
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
//To check progress
//console.log(depositAmount);

//To check if code works till now.
const reels = spin();
console.log(reels);
