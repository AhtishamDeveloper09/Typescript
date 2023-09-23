// 1- Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let n: number = 20;
let sum: number = 0;
for (let i = 0; i < n; i++) {
    sum += 2 * i;
}
console.log("The sum of first n even numbers is:", sum);
console.log();

// 2- Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("The even numbers are:");
for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
        console.log(arrayOfNumbers[i]);
    }
}
console.log();

// 3- Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
let arrayOfNumbers2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeEvenNumbers(arrayOfNumbers2: number[]) {
    for (let i = 0; i < arrayOfNumbers2.length; i++) {
        if (arrayOfNumbers2[i] % 2 == 0) {
            arrayOfNumbers2.splice(i, 1);
            i--;
        }
    }
    return arrayOfNumbers2;
}
console.log("Array after removing even numbers is:", removeEvenNumbers(arrayOfNumbers2));
console.log();

// 4- Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function areaOfCircle(radiusOfCircle: number) {
    let calcualateArea: number = Math.PI * radiusOfCircle ** 2;
    return Math.round(calcualateArea);
}
let radiusOfCircle: number = 20;
console.log("The area of circle is:", areaOfCircle(radiusOfCircle));
console.log();

// 4- Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
let listOfGrades: number[] = [60, 45, 75, 53, 35, 48, 77, 28, 84, 96];

function removeFailingGrades(listOfGrades: number[]) {
    for (let i = 0; i < arrayOfNumbers2.length; i++) {
        if (listOfGrades[i] < 50) {
            listOfGrades.splice(i, 1);
            i--;
        }
    }
    return listOfGrades;
}
console.log("After removing failing grades from the array:", removeFailingGrades(listOfGrades));
console.log();

// 6- Write a program that uses a function to find the largest element in an array of numbers.
let arrayOfNumbers3: number[] = [60, 45, 75, 53, 35, 48, 77, 28, 84, 96];

function findLargestElement(arrayOfNumbers3: number[]) {
    let largest: number = arrayOfNumbers3[0];
    for (let i = 1; i < arrayOfNumbers3.length; i++) {
        if (arrayOfNumbers3[i] > largest) {
            largest = arrayOfNumbers3[i];
        }
    }
    return largest;
}
console.log("The largest element in array is:", findLargestElement(arrayOfNumbers3));
