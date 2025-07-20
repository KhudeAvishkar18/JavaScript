// Operators in JavaScript

let a = 5;
let b = 2;

// Arithmetic Operators (+, -, *, /, %, **, ++, --)

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponent = a ** b;
// Unary Operators (++, --)
let preIncrement = ++a;
let postIncrement = a++;
let preDecrement = --b;
let postDecrement = b--;

console.log(addition, subtraction, multiplication, division, modulus, exponent, preIncrement, postIncrement, preDecrement, postDecrement);


// Assignment Operator (=, +=, -=, *=, /= %=, **=)

let c = 3;
console.log(c);
c += 4; // c = c + 4;
console.log(c);
c -= 5; // c = c - 7;
console.log(c);
c *= 3; // c = c * 3;
console.log(c);
c /= 3; // c = c / 3;
console.log(c);
c %= 3; // c = c % 3;
console.log(c);
c **= 2; // c = c ** 2;
console.log(c);


// Comparison Operators (==, ===, !=, !==, <, >, <=, >=)

console.log(a == b);
console.log(a === b);
console.log(a != b);
console.log(a !== b);
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);



// Logical Operators (&&, ||, !)

console.log(true && false);
console.log(true || false);
console.log(!true);


// Conditional Statements

// 1. if-else statement
if (a === b) {
    console.log("a is equal to b");
}
else if (a % 2 == 0)
    console.log("a is even number");
else if (a !== b)
    console.log("a is not exactly equal to b (maybe datatype is different)")
else
    console.log("There is no relation between a & b");


// Ternary Operator (a ? b : c) - It is simpler or compact approach for writing if-else condition
// condition ? ifTrue_thisOutput : otherwiseThisOutput

(a == b) ? console.log("a equals b") : console.log("a not equals b");

// 2. Swith case
switch (a) {
    case "1":
        console.log("Value of a is 1");
        break;
    case "2":
        console.log("Value of a is 2");
        break;
    case "3":
        console.log("Value of a is 3");
        break;
    default:
        console.log("Value of a is something else");
}

// If you dont write 'break' statement, then after matching with any condition/case, all the conditions below that will be matched and executed by switch.


// Task 1

let num = prompt("Enter another number"); // Allows us to take input from user
if (num % 5 === 0)
    console.log("Number is multiple of 5");
else {
    console.log("Number is not multiple of 5");
}

// Task 2

let marks = prompt("Enter your marks : ");
if (marks >= 80 && marks <= 100)
    console.log("You got A grade");
else if (marks >= 70 && marks < 80)
    console.log("You got B grade");
else if (marks >= 60 && marks < 70)
    console.log("You got C grade");
else if (marks >= 50 && marks < 60)
    console.log("You got D grade");
else if (marks >= 0 && marks < 50)
    console.log("You got E grade");
else
    console.log("Please enter marks between 0 to 100");