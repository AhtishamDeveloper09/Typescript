import inquirer from "inquirer";

inquirer
    .prompt([
    {
      name: "num1",
      type: "number",
      message: "Enter the first number?",
    },
    {
      name: "num2",
      type: "number",
      message: "Enter the second number?",
    },
    {
      name: "operation",
      type: "list",
      message: "Enter the operation?",
      choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
  ])
  .then((answer) => {
    console.log(answer);
    switch (answer.operation) {
      case "Addition":
        console.log(answer.num1 + answer.num2);
        break;
      case "Subtraction":
        console.log(answer.num1 - answer.num2);
        break;
      default:
        break;
    }
  });
/*

type CarType = {
  price: number,
  color: string
  //print: () => number
}
class Car {
  price: number = 0;
  color: string = "not defined"
  //print = () => {
  //console.log("Hello World");
  //return 0;
  //}
  constructor(price: number, color: string) {
    this.price = price;
    this.color = color;
  }
}
let carA: CarType = new Car(5000, "Red");
//carA.print()
console.log("Object of car A is:", carA);

let carB: CarType = new Car(10000, "Blue");
console.log("Object of car B is:", carB);
*/

