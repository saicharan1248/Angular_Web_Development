//1. Deposit some Money
// 2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. check if the use won
//6. give th user thier winnings
//7. play again

const prompt = require("prompt-sync")();
const deposit = () => {
  while (true) {
    const depositAmount = prompt("enter a deposit Amount: ");
    const numberDepoistAmount = parseFloat(depositAmount);

    if (isNaN(numberDepoistAmount) || numberDepoistAmount <= 0) {
      console.log("Invaild Deposit AMount,try again. ");
    } else {
      return numberDepoistAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("enter the number of lines to bet (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invaild no of lines,try again. ");
    } else {
      return numberOfLines;
    }
  }
};
let balance = deposit();
const numberOfLines = getNumberOfLines();
