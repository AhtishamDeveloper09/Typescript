//function sum(num1:number, num2: number): number {
//var result: number= num1 + num2;
//return result
//}
//var sumResult:number= sum(10,20);
//sumResult +=5;
//console.log("The result is:",sumResult);
//var addResult:number= sum(20,30);
//addResult +=40;
//console.log("The result is:",addResult);
var sumArrow = (num1: number, num2: number): number => num1 + num2;
// var num1: number= 10;
// var num2: number= 30;
// var result: number= num1 + num2;
// return result

var sumResult: number = sumArrow(10, 30)
console.log("Result is:", sumResult);