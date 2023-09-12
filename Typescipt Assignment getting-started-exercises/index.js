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
