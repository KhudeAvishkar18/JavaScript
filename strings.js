console.log("Welcome to strings"); // Note : In JavaScript strings are immutable

// creation of string
let str = "Avishkar"; // You can also use single quotes
console.log(str);

// length of string
let len = str.length;
console.log(len);

// indices of string (str[0], str[1], str[2] ...)
for (let i = 0; i < len; i++) {
    console.log(str[i]);
}




// Template Literals - A way to have expressions embedded in strings
let a = 10;
let b = 5;

console.log("In Normal String : Sum of", a, "and", b, "is", a + b);

let temp = `Inside Template Literal : Sum of ${a} and ${b} is ${a + b}`;
console.log(temp);




// Escape Characters - \n, \t

console.log("Avishkar\nKhude"); // \n for newline

let s1 = "Avishkar\tKhude"; // \t for tab
console.log(s1);

console.log(s1.length); // escape characters have length of 1 though it consist 2 characters




// String Methods - toUpperCase(), toLowerCase(), trim(), slice(), concat(), replace(), replaceAll(),  charAt()
let myString = "  Avishkar  ";

// toUpperCase() - Converts to uppercase
console.log(myString.toUpperCase());
console.log("abc".toUpperCase());

// toLowerCase() - converts to lowercase
console.log(myString.toLowerCase());

// trim() - trims white spaces from left and right of the string
console.log(myString.trim());

// slice() - gives substring
console.log(myString.slice(2, 5)); // starting index (including), ending index (excluding)
console.log(myString.slice(3)); // if we give only starting index, it will print rest of the string from that starting index
console.log(myString.slice()); // if we give nothing, it will print entire string

// concat() - concatenate two strings
let mySirname = "Khude";
console.log(myString.concat(mySirname));
console.log(myString + mySirname);

// replace() - replaces part of string with another string (once)
let newString = "abcdabcd";
console.log(newString.replace("ab", "xy"));

// replaceAll() - replaces all occurrences of given substring
console.log(newString.replaceAll("ab", "xy"));

// charAt() - gives character present at given index in string
console.log(myString.charAt(3));

// These methods will create their new string by applying the methods
// They will don't update the original string
console.log(myString);

// Note : In JavaScript strings are immutable that means we can never make any change in original string, if we want to modify them we need to create a new string.




// Task

let input = prompt("Enter your name : ");
let uName = `@${input}${input.length}`;
alert(uName);