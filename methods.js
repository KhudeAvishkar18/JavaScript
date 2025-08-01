console.log("Welcome to Methods and Functions in JS");

// Function - Normal block of code which performs some task
// Method - A function which is associted with an object of class
// Callback function - A function which is passed as argument to another function
// Higher Order function - A function which either takes another function as parameter or return a function

// Function Definition
function sum(x, y) { // x & y are parameters
    return x + y; // return will return some value and exit from function
}

// Function call
let s = sum(4, 5); // 4 & 5 are arguments
console.log("sum is :", s);




// Arrow Functions - compact way of writing functions

// (x, y) => {
//     return x*y;
// }

const mul = (x, y) => { // definition of arrow function is stored in const mul variable.
    return x * y;
}

console.log(mul);
console.log(mul(2, 5));




// Task 1 - Return no. of vowels in a string

let count = 0;
// function countVowels(s1) {
//     for (let val of s1) {
//         if (val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u' || val === 'A' || val === 'E' || val === 'I' || val === 'O' || val === 'U') {
//             count++;
//         }
//     }
//     return count;
// }

// Task 2 - Create an arrow function for Task 1

const countVowels = (str) => {
    for (let char of str) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
            count++;
        }
    }
    return count;
}

console.log("No. of vowels present in Avishkar are :", countVowels("Avishkar"));




// Callback Function - A Function passed as an argument to another function

// Creating a function which takes another function as an argument
function fun1(name, callback) { // callback is a function
    console.log("\nMy name is :", name);
    callback("Aniket");
}

// calling fun1 function

// function fun2(friendName){
//     console.log("\nMy friend name is :", friendName);
// }
// fun1("Avishkar", fun2);

// Another method to call by using arrow function
fun1("Avishkar", (friendName) => { // providing an arrow function as an argument i.e. callback function
    console.log("\nMy friend name is :", friendName);
});




// for-each loop - Used for Arrays only - Used to access/modify each element of an array

let arr = ["Avishkar", "Khude", "EIDIKO"];

// for-each loop (method) takes callback function as an argument
// this callback function is called inside forEach() method definition with 3 arguments
// That callback function takes 3 parameters : value, index (optional), array (optional)

// Using normal function as callback
// arr.forEach(function funName(val, index, originalArray){
//     console.log("Value at index", index, " is ", val);
//     originalArray.push(5);
//     console.log("Original Array :", originalArray);
// })

// Using arrow function as callback
arr.forEach((val, index, originalArray) => {
    console.log("Value at index", index, " is ", val);
    originalArray.push(5);
    console.log("Original Array :", originalArray);
})

console.log(arr);




// Task 3 - Print square of each number in array using forEach loop

let numbers = [2, 4, 6, 8, 10];

numbers.forEach((num) => {
    console.log(num * num); // num**2 also gives square of that number
})




// Other Array Methods - doesnt modify original array

// map() - It is similar to forEach() i.e. used to access each element of an array, but it returns a new modified Array by performing some operation on each element of original array.
let arr1 = [2, 3, 4, 5, 6];

let newArray = arr1.map((val, index, array) => {
    return val ** 2;   // Returned value of callback function is stored in new Array created by map()
})

console.log("\nNew Array created by map() :", newArray);
console.log("Original Array :", arr1)


// filter() - It creates and returns new array by taking some elements from original array, which satisfies certain condition

newArray = arr1.filter((val, index, array) => {
    return val % 2 === 0; // The elements which satisfies this condition will only be added to new Array
})

console.log("\nNew Array created by filter() :", newArray);
console.log("Original Array :", arr1)


// reduce() - It Performs some operation on array elements & returns a single value

let addition = arr1.reduce((result, current) => {
    console.log("Previous :", result);
    console.log("Current :", current);
    return (result + current); // adds each element with its next element and returns the final sum as result when no current element is present
})
// 1st iteration - result = 1st element of array, current = 2nd element of array
// 2nd iteration - result = returned value at 1st iteration, current = 3rd element
// 3rd iteration - result = returned value at 2nd iteration, current = 4th element
// and so on....
// When no current element is present, 'result' is returned by reduce()

console.log("Addition using reduce() :", addition);

// Finding max element using reduce()
let max = arr1.reduce((result, current) => {
    // if (result > current)
    //     return result;
    // else
    //     return current;

    // or Using if-else short-hand

    return (result > current ? result : current);
})

console.log("Max element from array :", max);

// Finding avg of all elements using reduce()
let avg = arr1.reduce((result, current) => {
    return result + current;
})

avg = avg / arr1.length;
console.log("Average of array elements :", avg);




// Task 4 - Filter out students marks greater than 90 from an array

let marks = [76, 58, 95, 74, 91];
console.log("\nMarks :", marks);

let toppers = marks.filter((val) => {
    return val > 90;
})
console.log("Marks greater than 90 :", toppers);

// Task 5 - Create array 1 to n elements, calculate sum, product of all elements

let size = prompt("Enter size of array :");
let myArr = [];
for (let i = 1; i <= size; i++) {
    myArr.push(i);
}
console.log("\nYour Array :", myArr);

// sum
let res = myArr.reduce((result, current) => {
    return result + current;
})
console.log("Sum is :", res);

res = myArr.reduce((result, current) => {
    return result * current;
})
console.log("Product is :", res);
