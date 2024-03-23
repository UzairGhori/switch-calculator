#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
//step 1
const answers: {
  num1: number;
  num2: number;
  operator: string;
} = await inquirer.prompt([
  { type: "number", name: "num1", message: "Enter your first number" },
  { type: "number", name: "num2", message: "Enter your second number" },
  {
    type: "list",
    name: "operator",
    message: "Enter ypur operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//step 2
const { num1, num2, operator } = answers;

//step 3

let Result;
switch (operator) {
  case "Addition":
    Result = num1 + num2;
    break;
  case "Subtraction":
    Result = num1 - num2;
    break;
  case "Multiplication":
    Result = num1 * num2;
    break;
  case "ivision":
    Result = num1 / num2;
    break;
  default:
    console.log("invalid operator");
}
    console.log(`${num1} ${operator} ${num2} = ${Result}`);


