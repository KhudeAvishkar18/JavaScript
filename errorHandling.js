console.log("Welcome to Error Handling Tutorial");

// If any error comes at any line of JS code, due to that error the code written after that line will not get executed
// To handle that error, we need to use Try-Catch block


let a = 5;
let b = 4;

console.log("Sum of a & b is ", a + b);

// Write any code in try block, which may throw an error
try {
    console.log("Product of a & c is ", a * c);
}
catch (err) {
    console.log(err);
}

console.log("Subtraction of a & b is ", a - b);
console.log("Division of a & b is", a / b);
