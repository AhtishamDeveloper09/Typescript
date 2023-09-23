import inquirer, { Answers, QuestionCollection } from "inquirer";
async function userInput() {
  const questions: QuestionCollection = [
    {
      name: "num1",
      type: "number",
      message: "Enter the first number:",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number:",
    }
  ]
  const result: Answers =  await inquirer.prompt(questions)
  console.log("Result of sum is:", result.num1 + result.num2);
}
await userInput()
console.log("After executing the function.");
