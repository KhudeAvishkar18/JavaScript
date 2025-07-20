alert("Hello, Welcome to JavaScript"); // gives alert on browser

console.log("Hello Avishkar");

// Use of 'let' (block scope)
let a; //declaration of variable
a = 5; // intialisation of that variable
a = 10; // updation of variable
let b = 6;
let c = a + b;

// Use , to concatenate string and variables.
console.log("Sum of ", a, " + ", b, " is : ", c);

console.log("abc" + 123);
console.log(123 + "abc");
console.log(123 + 123);
console.log("abc" + "abc");

// Use of 'var' (global scope)
// We can redeclare the 'var' variable hence we dont use it and prefer using 'let'.
var a1 = 10;
var a1 = 20;
var a1 = 30;

console.log(a1);

// Use of 'const' (block scope)
const pi = 3.14;
console.log("The value of pi is :", pi);

// const age; // you cant just declare the constants, you need to intialise them on the spot

// Data types in Javascript
// Primitive - Number, String, Boolean, BigInt, Symbol

let num = 100.52; // number
let s1 = "Avishkar"; // string
let isTrue = true; // boolean
let undef;
let v1 = null;
let bi = BigInt(123); // BigInt
let sym = Symbol("Avi"); // Symbol

console.log(typeof num, typeof s1, typeof isTrue, typeof undef, typeof v1, typeof bi, typeof sym);

// Non-Primitive - Objects (Arrays, Functions)

const obj = {
    "id": 1194,
    "name": "Avishkar",
    "company": "EIDIKO"
}

console.log(obj);

// Accessing values from objects
console.log(obj.name);
console.log(obj["id"]);

// Setting values of object
obj.company = "Microsoft";
console.log(obj.company);

// Task

const pen = {
    name: "Parker",
    colour: "Black",
    type: "Ball",
    rating: 4,
    isDeal: true,
    cost: 270,
    offer: 5
}
console.log(pen);
console.log(typeof pen.colour);
console.log(typeof pen.isDeal);