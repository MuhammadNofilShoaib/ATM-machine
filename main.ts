#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk"

let myBalance = 10000; // In Dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: (chalk.cyanBright("Kindy enter your PIN code: ")),
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log(chalk.bold("Correct PIN code!!!"));
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: (chalk.cyanBright("Please select option: ")),
      type: "list",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);
  if (operationAns.operation === "Withdraw") {
    let amountAnswer = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount",
        type: "number",
      },
    ]);
    if (myBalance > amountAnswer.amount) {console.log((chalk.blueBright`Your remaining balance is ${myBalance -= amountAnswer.amount}`));}
    else if (myBalance < amountAnswer.amount) {console.log(chalk.redBright("Insuficient Balance"))}


   
  } else if (operationAns.operation === "Check Balance") {
    console.log(chalk.greenBright(`Your current balance is ${myBalance}`));
  }
} else {
  console.log(chalk.redBright("Invalid PIN code"));
}



