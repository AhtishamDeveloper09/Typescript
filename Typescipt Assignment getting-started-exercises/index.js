"use strict";
// 2- Personal Message: Store a person’s name in a variable, and print a message to that person. 
// Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” 
let personName = "Ahtisham";
console.log(`"Hey ${personName}, would you like to learn some Typescript today?"`, "\n");
// 3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName2 = "Ahtisham ul Haq";
console.log("The person's name in lowercase is:", personName2.toLowerCase());
console.log("The person's name in upperercase is:", personName2.toUpperCase());
console.log("The person's name in tittlecase is:", personName2.toString(), "\n");
// 4- Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
// Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "A person who never made a mistake never tried anything new.";
console.log(`Albert Einstein once said, "${quote}"`);
// 5- Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
let famousPerson = "Albert Einstein";
let message = "A person who never made a mistake never tried anything new.";
console.log(`${famousPerson} once said, "${message}"`, "\n");
// 6- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. 
//Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName3 = "\t\t Albert Einstein \n";
console.log("The person's name with whitespaces:", personName3);
console.log("The person's name without whitespaces:", personName3.trim(), "\n");
// 7- Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8.
// Be sure to enclose your operations in print statements to see the results.
console.log("The addition of numbers is:", 4 + 4);
console.log("The subtraction of numbers is:", 11 - 3);
console.log("The multiplication of numbers is:", 2 * 4);
console.log("The division of numbers is:", 16 / 2, "\n");
// 8- You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(4 + 4);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2, "\n");
// 9- Favorite Number: Store your favorite number in a variable.
// Then, using that variable, create a message that reveals your favorite number. Print that message.
let favouriteNumber = 9;
let message2 = `My favourite number is: ${favouriteNumber}`;
console.log(message2, "\n");
/* 10- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
If you don’t have anything specific to write because your programs are too simple at this point,
just add your name and the current date at the top of each program file.
Then write one sentence describing what the program does.*/
//First Program
let famousPerson2 = "Albert Einstein"; //initializing the variable with a famous person's name
let message3 = "A person who never made a mistake never tried anything new."; //storing a message in the variable   
console.log(`${famousPerson2} once said, "${message3}"`, "\n"); //printing the name of the famous person with a message  
//Second Program
let favouriteNumber2 = 9; //initializing the variable with my favourite number
let message4 = `My favourite number is: ${favouriteNumber2}`; //storing a message that reveals my favourite number
console.log(message4); //printing the message
// 11- Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.
let nameOfFriends = ["Ali", "Hamza", "Subtain", "Usama", "Mudassir", "Babar"];
for (let i = 0; i < nameOfFriends.length; i++) {
    console.log("The name of my friend is:", nameOfFriends[i]);
}
console.log();
// 12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them.
// The text of each message should be the same, but each message should be personalized with the person’s name.
let nameOfFriends2 = ["Ali", "Hamza", "Subtain", "Usama", "Mudassir", "Babar"];
for (let i = 0; i < nameOfFriends2.length; i++) {
    console.log(`Hey ${nameOfFriends2[i]}, What are you doing these days?`);
}
console.log();
// 13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let favTransport = ["Bicycle", "Motorcycle", "Car", "Bus", "Train"];
for (let i = 0; i < favTransport.length; i++) {
    console.log(`I would like to own a ${favTransport[i]}.`);
}
console.log();
// 14-Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["Ali", "Hamza", "Usama"];
for (let guest of guestList) {
    console.log(`Hey ${guest}, Sending you my heartiest invitation to join the dinner party at 6 PM tomorrow.`);
}
console.log();
// 15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`${guestList[1]}, Can't make it to the dinner party.`);
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
guestList.splice(1, 1, "Babar");
console.log("New guest list is:", guestList);
// • Print a second set of invitation messages, one for each person who is still in your list.
for (let guest of guestList) {
    console.log(`Hey ${guest}, Sending you my heartiest invitation to join the dinner party at 6 PM tomorrow.`);
}
console.log();
// 16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("A good news is that we have found a bigger dinner table.");
// • Add one new guest to the beginning of your array.
guestList.push("Haris");
// • Add one new guest to the middle of your array. 
guestList.splice(Math.round(guestList.length / 2), 0, "Saad");
// • Use append() to add one new guest to the end of your list.
guestList.push("Rizwan");
// • Print a new set of invitation messages, one for each person in your list.
console.log("New guest list is:", guestList);
for (let guest of guestList) {
    console.log(`Hey ${guest}, Sending you my heartiest invitation to join the dinner party at 6 PM tomorrow.`);
}
console.log();
// 17- Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("Sorry , We can only invite two people for dinner.");
// • Remove guests from your list one at a time until only two names remain in your list.
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`${removeGuest}, We are sorry we can't invite you to dinnner.`);
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestList) {
    console.log(`Hey ${guest}, You are still invited.`);
}
// • Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
console.log("The list is empty now:", guestList, "\n");
// 18- Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let favPlaces = ["Makkah", "Madina", "India", "Turkey", "Dubai",];
// • Print your array in its original order.
console.log("Array in its original order:", favPlaces);
// • Print your array in alphabetical order without modifying the actual list.
let favPlaces2 = [...favPlaces].sort();
console.log("Array in alphabetical order:", favPlaces2);
// • Show that your array is still in its original order by printing it.
console.log("Array in its original order:", favPlaces);
// • Print your array in reverse alphabetical order without changing the order of the original list.
let favPlaces3 = [...favPlaces2].reverse();
console.log("Array in reverse alphabetical order:", favPlaces3);
// • Show that your array is still in its original order by printing it again.
console.log("Array in its original order:", favPlaces);
// • Reverse the order of your list. Print the array to show that its order has changed.
favPlaces.reverse();
console.log("Array in reverse order:", favPlaces);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
favPlaces.reverse();
console.log("Array is back in it's original order:", favPlaces);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
favPlaces.sort();
console.log("The order of the array has been changed alphabetical order:", favPlaces);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
favPlaces.reverse();
console.log("The order of the array has been changed revrse alphabetical order:", favPlaces);
// 19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
// print a message indicating the number of people you are inviting to dinner.
console.log("The number of people I am inviting for dinner are:", guestList.length, "\n");
// 20- Think of something you could store in a array. 
// For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. 
// Write a program that creates a list containing these items.
let languagesList = ["Urdu", "English", "Punjabi", "Korean", "German"];
console.log("List of languages:");
for (let i = 0; i < languagesList.length; i++) {
    console.log(`1. ${languagesList[i]}`);
}
console.log();
let carModel = {
    company: "Kia",
    model: "Sportage",
    year: 2022,
    isUsed: false
};
console.log("The details of car are:", carModel);
// 22- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
// Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//Program with an index error 
let indexError = ["Urdu", "English", "Punjabi", "Korean", "German"];
console.log("The program will give index error:", indexError[5]);
//Program without an index error 
let noIndexError = ["Urdu", "English", "Punjabi", "Korean", "German"];
console.log("The program will give index error:", indexError[2], "\n");
/* 23- Conditional Tests: Write a series of conditional tests.
Print a statement describing each test and your prediction for the results of each test.
Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')*/
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// Test 01 for True
let age = 18;
console.log("Is age == 18? I predict True.");
console.log(age == 18);
// Test 02 for True
let age2 = 16;
console.log("Is age > 18? I predict False.");
console.log(age > 18);
// Test 03 for True
let personName4 = "Ahmed";
console.log("Is personName4 == 'Ahmed'? I predict True.");
console.log(personName4 == "Ahmed");
// Test 04 for True
let personName5 = "Hamza";
console.log("Is personName5 != 'Ahmed'? I predict False.");
console.log(personName5 == "Ahmed");
// Test 05 for True
let num = 58;
console.log("Is num == 58? I predict True.");
console.log(num == 58);
// Test 06 for True
let num2 = 35;
console.log("Is num2 < 50? I predict False.");
console.log(num < 50);
// Test 07 for True
let fruitName = "Mango";
console.log("Is fruitName == 'Mango'? I predict True.");
console.log(fruitName == "Mango");
// Test 08 for True
let fruitName2 = "Banana";
console.log("Is fruitName2 != 'Mango'? I predict False.");
console.log(fruitName2 == "Mango");
// Test 09 for True
let isStudent = true;
let isAge18 = true;
console.log("If he is a student and his age is 18? I predict True.");
console.log(isStudent && isAge18);
// Test 10 for True
let isWeekend = false;
let isWeekdays = true;
console.log("If it's weekdays? I predict False.");
console.log(isWeekend && isWeekend);
// 24-More Conditional Tests: You don’t have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// Test for equality
let fruitName3 = "Apple";
console.log("Is fruitName == 'Apple'? I predict True.");
console.log(fruitName == "Apple");
// Test for inequality
let fruitName4 = "Grapes";
console.log("Is fruitName2 != 'Pineapple'? I predict False.");
console.log(fruitName2 == "Pineapple", "\n");
// • Tests using the lower case function
// Test for lower case
let lowerCaseName = "apple";
console.log("If lowerCaseName is in lower case? I predict True.");
console.log(lowerCaseName.toLowerCase() == "apple");
// Test for not  in lower case
let lowerCaseName2 = "MANGO";
console.log("If lowerCaseName is not in lower case? I predict False.");
console.log(lowerCaseName2.toLowerCase() == "MANGO");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let numa = 22;
let numb = 15;
console.log(numa != numb);
console.log(numa == numb);
console.log(numa > numb);
console.log(numa < numb);
console.log(numa >= numb);
console.log(numa <= numb);
// • Tests using "and" and "or" operators
let numc = 25;
let numd = 35;
console.log(numc <= numd || numc >= numd);
console.log(numc <= numd && numc >= numd);
// • Test whether an item is in a array
let arrayItems = ["Ali", "Hamza", "Subtain", "Usama", "Mudassir", "Babar"];
console.log(arrayItems.includes("Subtain"));
// • Test whether an item is not in a array
let arrayItems2 = ["Ali", "Hamza", "Subtain", "Usama", "Mudassir", "Babar"];
console.log(arrayItems.includes("Abdullah"), "\n");
// 25- Alien Colors #1: Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alienColor = ["red", "green", "yellow"];
if (alienColor.includes("green")) {
    console.log("The player have just earned 5 points.");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alienColor.includes("green")) {
    console.log("The player have just earned 5 points.");
}
if (alienColor.includes("pink")) {
    console.log("The player just earned 5 points.");
}
console.log();
// 26- Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alienColor.includes("green")) {
    console.log("The player have just earned 5 points.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (!alienColor.includes("green")) {
    console.log("The player have just earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
if (alienColor.includes("red")) {
    console.log("The player have just earned 5 points.");
}
else {
    console.log("The player have just earned 10 points.");
}
console.log();
// 27- Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alienColor.includes("green")) {
    console.log("The player have just earned 5 points.");
}
else if (alienColor.includes("yellow")) {
    console.log("The player have just earned 10 points.");
}
else if (alienColor.includes("red")) {
    console.log("The player have just earned 15 points.");
}
console.log();
// 28- Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let personAge = 15;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (personAge < 2) {
    console.log("The person is a baby.");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (personAge == 2 || personAge < 4) {
    console.log("The person is a toddler.");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (personAge == 4 || personAge < 13) {
    console.log("The person is a kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (personAge == 13 || personAge < 20) {
    console.log("The person is a teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (personAge == 20 || personAge < 65) {
    console.log("The person is a adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("The person is older.");
}
console.log();
// 29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favoriteFruits = ["Apples", "Mangoes", "Bananas"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favoriteFruits.includes("Grapes")) {
    console.log("I really like grapes");
}
if (favoriteFruits.includes("Apples")) {
    console.log("I really like Apples");
}
if (favoriteFruits.includes("Oranges")) {
    console.log("I really like Oranges");
}
if (favoriteFruits.includes("Bananas")) {
    console.log("I really like Bananas");
}
if (favoriteFruits.includes("Pineapples")) {
    console.log("I really like Pineapples");
}
console.log();
// 30- Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userNames = ["Usama", "Asim", "Admin", "Ali", "Hamza"];
for (let names of userNames) {
    if (names == "Admin") {
        console.log(`Hello Admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${names}, thank you for logging in again.`);
    }
}
console.log();
// 31- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
let userNames2 = ["Usama", "Asim", "Babar", "Ali", "Hamza"];
if (userNames2.length == 0) {
    console.log("We need to find some users!");
}
// • Remove all of the usernames from your array, and make sure the correct message is printed. 
while (userNames2.length > 0) {
    userNames2.pop();
}
if (userNames2.length == 0) {
    console.log("We need to find some users!");
}
console.log();
// 32- Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let currentUsers = ["Usama", "Asim", "Babar", "Ali", "Hamza"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let newUsers = ["Asim", "Abdullah", "Ahsan", "Hamza", "Haris"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
for (let i = 0; i < newUsers.length; i++) {
    if (currentUsers.includes(newUsers[i])) {
        console.log(`${newUsers[i]}, Please enter a new username as it is already in use.`);
    }
    else {
        console.log(`${newUsers[i]}, The username is available.`);
    }
}
console.log();
// 33- Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
// Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] == 1) {
        console.log(`${numbersArray[i]}st`);
    }
    else if (numbersArray[i] == 2) {
        console.log(`${numbersArray[i]}nd`);
    }
    else if (numbersArray[i] == 3) {
        console.log(`${numbersArray[i]}rd`);
    }
    else {
        console.log(`${numbersArray[i]}th`);
    }
}
