"use strict";
// Push Method
const numbers = [1, 2, 3];
const returnedValue = numbers.push(4, 5);
// Result: numbers = [1, 2, 3, 4, 5], returnedValue = 5
console.log("Push Method");
console.log(returnedValue);
console.log(numbers);
// Pop Method
const numbers2 = [1, 2, 3];
const removedElement = numbers2.pop();
// Result: numbers = [1, 2], removedElement = 3
console.log("Pop method");
console.log(removedElement);
console.log(numbers2);
// Shift Method
const fruits = ["apple", "banana", "cherry"];
const removedFruit = fruits.shift();
// Result: fruits = ["banana", "cherry"], removedFruit = "apple"
console.log("Shift Method");
console.log(removedFruit);
console.log(fruits);
// Unshift Method
const colors = ["blue", "green"];
const returnedValue2 = colors.unshift("red", "yellow");
// Result: colors = ["red", "yellow", "blue", "green"] , returnedValue = 4
console.log("Unshift Method");
console.log(returnedValue);
console.log(colors);
// Splice Method
const numbers3 = [1, 2, 3, 4, 5];
const removed = numbers3.splice(1, 0, 6, 7);
// Result: numbers = [1, 6, 7, 4, 5], removed = [2, 3]
console.log("Splice Method");
console.log(removed);
console.log(numbers3);
