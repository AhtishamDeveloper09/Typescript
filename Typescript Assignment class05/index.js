"use strict";
// 1- Create a function that takes an array, an index, and a value as parameters. 
// Inside the function, use the splice method to insert the value at the specified index in the array.
// Return the modified array.
function spliceMethod(anArray, anIndex, aValue) {
    anArray.splice(anIndex, 2, ...aValue);
    return anArray;
}
let array = [30, 26, 5, 10, 6, 21];
let index = 3;
let value = [14, 22];
console.log("Modified Array Is:", spliceMethod(array, index, value), "\n");
// 2- Implement a simple shopping cart program using an array.
// Create functions to add items, remove items, and update quantities using the splice method. 
// Print the cart's contents after each operation
let shoppingCart = ["Floor", "Rice", "Sugar", "Cooking Oil", "Shampoos", "Soaps", "Fruits"];
function addItems(index, itemToAdd) {
    shoppingCart.splice(index, 0, itemToAdd);
    return shoppingCart;
}
console.log("Shopping cart after adding an item:", addItems(5, "Eggs"));
function removeItems(index) {
    shoppingCart.splice(index, 1);
    return shoppingCart;
}
console.log("Shopping cart after removing an item:", removeItems(3));
function updateItems(index, itemToUpdate) {
    shoppingCart.splice(index, 1, itemToUpdate);
    return shoppingCart;
}
console.log("Shopping cart after updating an item:", updateItems(2, "Ketchup"));
console.log();
// 3- Write a program that uses a while loop to print the first 25 integers.
let integers = 0;
console.log("First 25 integers are:");
while (integers <= 25) {
    console.log(integers);
    integers++;
}
console.log();
// 4- Write a program that uses a while loop to print the first 10 even numbers.
let evenNum = 0;
console.log("First 10 even numbers are:");
while (evenNum < 20) {
    console.log(evenNum);
    evenNum += 2;
}
console.log();
// 5- Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
function factorialOfNum(num) {
    let factorial = num;
    if (num == 0 || num == 1) {
        return 1;
    }
    else {
        while (num > 1) {
            num--;
            factorial = factorial * num;
        }
    }
    return factorial;
}
console.log("The factorial of positive integer is:", factorialOfNum(6));
console.log();
// 6- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let arrayOfNumbers = [3, 6, -1, 4, -9, -7, 2, -5];
for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] < 0) {
        arrayOfNumbers.splice(i, 1);
        i--;
    }
}
console.log("Array after removing negative numbers is:", arrayOfNumbers);
console.log();
// 7- Create a function that takes an array of numbers as parameter.
// Use a while loop to calculate and return the sum of all the numbers in the array.
function sumOfArray(arrayOfNum) {
    let i = 0;
    let sum = 0;
    while (i < arrayOfNum.length) {
        sum += arrayOfNum[i];
        i++;
    }
    return sum;
}
let arrayOfNum = [3, 6, 1, 4, 9, 7, 2, 5];
console.log("Sum of all the numbers in the array is", sumOfArray(arrayOfNum));
console.log();
// 8- Implement a program that takes a list of temperatures in Celsius as input from the user. 
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. 
// Use a while loop to perform the conversion for each temperature.
let tempInCelcius = [37, 43, -4, 15, 23];
function tempFromCToF(tempInCelcius) {
    let i = 0;
    let tempInFarerhite = [];
    while (i < tempInCelcius.length) {
        tempInFarerhite[i] = (tempInCelcius[i] * 9 / 5) + 32;
        i++;
    }
    return tempInFarerhite;
}
console.log("The temperature from celcius to farenhite is:", tempFromCToF(tempInCelcius));
