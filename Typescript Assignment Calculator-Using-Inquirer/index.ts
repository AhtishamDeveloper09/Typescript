import inquirer, { Answers, QuestionCollection } from "inquirer";

const questions: QuestionCollection = [{
    name: "num1",
    type: "number",
    message: "Enter first number:"
},
{
    name: "num2",
    type: "number",
    message: "Enter second number:"
},
{
    name: "operation",
    type: "list",
    message: "Enter the operation:",
    choices: ["+", "-", "*", "%", "/", "^"]
}
]
let answers: Promise<Answers> = inquirer.prompt(questions);
answers
    .then((answer: Answers) => {
        switch (answer.operation) {
            case "+":
                console.log(`Sum of ${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`);
                break;
            case "-":
                console.log(`Subtarction of ${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`);
                break;
            case "*":
                console.log(`Multiplication of ${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`);
                break;
            case "%":
                console.log(`Modulus of ${answer.num1} % ${answer.num2} = ${answer.num1 % answer.num2}`);
                break;
            case "/":
                console.log(`Division of ${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`);
                break;
            case "^":
                console.log(`Exponent of ${answer.num1} ^ ${answer.num2} = ${answer.num1 ** answer.num2}`);
                break;
            default:
                break;
        }
    })
    .catch((error: Answers) => {
        console.error("Something went wrong", error);

    });