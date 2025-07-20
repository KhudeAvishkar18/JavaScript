console.log("Welcome to lecture no. 3 of JavaScript Series");

// Loops


let i;

// 1. For Loop
console.log("For loop");

for (i = 1; i < 5; i++) {
    console.log(i);
}

// 2. While Loop
console.log("While loop");

while (i < 10) {
    console.log(i);
    i++;
}

// 3. do while Loop
console.log("Do while loop");

do {
    console.log(i);
    i++;
} while (i <= 15);

// 4. for-of loop (Used for strings & arrays)
console.log("for of loop");
let str1 = "Avishkar";

for (let val of str1) {
    console.log(val);
}

// 5. for-in loop - prints keys of objects or indices of an array (Used for objects & arrays)
console.log("for in loop");

let obj = {
    id: 1194,
    name: "Avishkar",
    company: "EIDIKO"
};

for (let key in obj) {
    console.log(key);
}

// 6. for-each loop - Used for Arrays only - Used to access/modify each element of an array

let arr = ["Avishkar", "Khude", "EIDIKO"];

// for-each loop (method) takes callback function as an argument
// That callback function takes 3 parameters : value, index (optional), array (optional)

// Using arrow function as callback
arr.forEach((val, index, originalArray) => {
    console.log("Value at index", index, " is ", val);
    originalArray.push(5);
    console.log("Original Array :", originalArray);
})

console.log("forEach() loop :", arr);




// Task 1

/* 
for(let i = 0; i<=100; i++){
    if(i%2 === 0)
        console.log(i);
}
*/

// Task 2

let num = 5;
let input = prompt("Enter a number between 0 to 10");
while (input != num) {
    if (input > num)
        input = prompt("Enter smaller number");
    else
        input = prompt("Enter greater number");
}
alert("Yeah!!! You guessed the number");

