// 1- Write a program that uses filter to remove all negative numbers from an array of numbers.
let arrayOfNumbers: number[] = [-5, 16, 3, -12, 17, -9, 6, -10, 2, -8];
let positiveNumArray: number[] = arrayOfNumbers.filter((num: number) => num >= 0);
console.log("Original Array:", arrayOfNumbers);
console.log("Array after removing all the negative numbers is:", positiveNumArray, "\n");

// 2- Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let arrayOfNumbers2: number[] = [1, 2, 3, 4, 5];
let arrayMultipliedBy2 = arrayOfNumbers2.map(num => num * 2);
console.log("Original Array:", arrayOfNumbers2);
console.log("New array where each number is multiplied by 2", arrayMultipliedBy2, "\n");

// 3- Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let arrayOfStrings: string[] = ["apple", "banana", "cherry", "date", "grape"];
let fruitCharacters = arrayOfStrings.filter(num => num.length > 5);
console.log("Original Array:", arrayOfStrings);
console.log("New array containing only the fruits with more than 5 characters", fruitCharacters, "\n");

// 4- Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the square of even numbers.
let arrayOfNumbers3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareOfEvenNumbers = arrayOfNumbers3.filter(num => num % 2 == 0).map(num => num * num);
console.log("Original Array:", arrayOfNumbers3);
console.log("New array containing the square of even numbers:", squareOfEvenNumbers, "\n");

// 5- Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temperaturesInCelsius: number[] = [0, 10, 20, 30, 40];
let temperaturesInFarenhite = temperaturesInCelsius.map(num => (num * 9 / 5) + 32);
console.log("Original Array:", temperaturesInCelsius);
console.log("New array where each temperature is converted to Fahrenheit:", temperaturesInFarenhite, "\n");

// 6- Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let arrayOfNumbers4: number[] = [5, 6, 9, 12, 15, 18];
let doubledValuesOfOddNumbers = arrayOfNumbers4.filter(num => num % 2 == 1).map(num => num * num);
console.log("Original Array:", arrayOfNumbers4);
console.log("New array containing the doubled values of odd numbers:", doubledValuesOfOddNumbers, "\n");

// 7- Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let arrayOfNames: string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
let ExclamationMarkWithForEach = arrayOfNames.forEach(value => console.log(`${value}!`))






