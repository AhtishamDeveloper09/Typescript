// - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

// Celsius to Farenhite
var celsiusTemp: number= 50;
var celToFar: number= (celsiusTemp*9/5) + 32;
console.log("Temperature in Farenhite is:",celToFar);
//Farenhite to Celsius
var farenhiteTemp: number= 50;
var farToCel: number= (farenhiteTemp-32)*9/5;
console.log("Temperature in Celsius is:",farToCel);

// - Write a program that calculates the percentage.
var obtainedMarks: number= 415;
var totalMarks: number= 505;
var percentage: number= Math.floor(obtainedMarks/totalMarks*100);
console.log("Percentage is:",percentage+"%");

// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.
var givenDays:number =30;
var daysToWeek: number= Math.floor(givenDays/7);
var daysLeft: number= givenDays%7;
console.log(`${daysToWeek} weeks and ${daysLeft} days`);

//- Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
var productPrice:number= 150;
if(productPrice>100){
    var discountOF10Percent: number= 10/100 * productPrice;
    var discountedFinalPrice: number= productPrice-discountOF10Percent;
    console.log("The price of the product after applying 10% discount is:",discountedFinalPrice);
}
else{
    var discountOF5Percent: number= 5/100 * productPrice;
    var discountedFinalPrice2: number= productPrice-discountOF5Percent;
    console.log("The price of the product after applying 5% discount is:",discountedFinalPrice2);
}

// - Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
var age:number = 24;
if (age>0 && age<=12) {
    console.log("Child");
}
else if (age>=13 && age<=19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}

// - Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature: number= 17;
if (temperature<=20) {
    console.log("Wear warm clothes.");
} 
else if (temperature>=20 && temperature<=30) {
    console.log("Wear normal clothes.");
} 
else {
    console.log("Wear light clothes.");
} 

// - Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.
var givenNumber: number= 45;
if (givenNumber%3==0) {
    console.log("Divisible by 3");
}
else if (givenNumber%5==0) {
    console.log("Divisible by 5");
}
else if (givenNumber%3==0 && givenNumber%5==0) {
    console.log("Divisible by both 3 and 5");
}
else {
    console.log("Not divisible by both 3 and 5");
}

// - Write a program that checks if the given year is leap year or not.
var year: number= 1992; 
if(year%4==0){
    console.log("It is a leap year.");   
}
else {
    console.log("It is not a leap year.");   
}

// - Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.
var userNumber: number= 5;
switch (userNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;        
    case 4:
        console.log("Thursday");        
        break;
    case 5:
        console.log("Friday");        
        break;
    case 6:
        console.log("Sataurday");        
        break;
    case 7:
        console.log("Sunday");        
        break;        
    default:
        console.log("No selection");
        break;
}

// - Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax
//Where the tax amount will be calculated by the amount of bill.
var consumedUnits: number= 250;
var priceeOfUnit: number= 40;
var totalPrice: number= consumedUnits * priceeOfUnit;

if(consumedUnits>100 && consumedUnits<=200){
    var addTax: number= 10/100 * totalPrice;
    var totalBill: number= totalPrice + addTax;
    console.log("Your bill after adding 10% tax is:",totalBill);
}
else if(consumedUnits>200 && consumedUnits<=500){
    var addTax: number= 15/100 * totalPrice;
    var totalBill: number= totalPrice + addTax;
    console.log("Your bill after adding 15% tax is:",totalBill);
}
else{
    var addTax: number= 25/100 * totalPrice;
    var totalBill: number= totalPrice + addTax;
    console.log("Your bill after adding 25% tax is:",totalBill);
}