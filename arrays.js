console.log("Welcome to Arrays"); // Note: In JS Arrays are mutable, but strings are immutable

// Creation of Arrays

let arr = [1, 2, 3, 4, 5];
let arr2 = ["Avishkar", "Pavan", "Abhishek", "Jayesh"];
let arr3 = [1, "Avishkar", true, 5.4]; // We can create an array with different dtypes in JS (in c++ we cant), but we prefer of making an array of same datatype elements.

console.log(arr);
console.log(arr2);

console.log(typeof (arr)); // Datatype of array is actually an object.

// As arrays are mutable, we can modify the value of any array element in place
arr[1] = 7; // We cant do this with strings as strings are immutable in JS.
console.log(arr);




// Array traversal

// Using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// using for-of loop - prints array elements
for (let val of arr2) {
    console.log(val);
}

// Using for-in loop - prints array indices
for (let val in arr3) {
    console.log(val);
}

// Array length = last index + 1 = no. of elements present in an array // Same for strings
// Loops are use on iterable datatypes such as - arrays, strings, objects etc.




// Task 1

let marks = [58, 85, 91, 75, 63];
let total = 0, avg = 0;

// Using for-of loop
// for(let mark of marks){
//     total = total + mark;
// }

// using for-each loop
marks.forEach(Element => {
    total += Element;
});

avg = total / marks.length;
console.log("\nAverage of marks is : ", avg);

// Task 2

let mrp = [250, 645, 300, 900, 50];
console.log("\nInitial prices are :", mrp);

// using for-in loop
for (let index in mrp) {
    mrp[index] -= (mrp[index] / 10);
}

// using for-of loop
// let index = 0;
// for(let val of mrp){ 
//     mrp[index] = val - (val/10);
//     index++;
// }
// In for-of or for-each loop, 'val' variable is a copy of array element not the original element.  

console.log("Final prices after 10% discount will be : ", mrp);
console.log("\n");




// Array Methods - Some Array methods modify the original array, some dont.

let newArray = [2, 4, 6, 8, 10];
console.log("Original Array :", newArray);

// push() - Modify original array - Add elements at end of the array, and returns updated length of an array 
let newLength = newArray.push(12, 14, 16);
console.log("Original Array :", newArray);
console.log("New length of array :", newLength);
console.log([1, 2, 5].push(3)); // Another approach

// pop() - Modify original array - delete & return from end of an array
let popped = newArray.pop();
console.log("Original Array :", newArray);
console.log("Popped element :", popped);

// toString() - doesn't Modify original array - Converts array to string and return it
console.log(newArray.toString());
console.log("Original Array :", newArray);

// concat() - doesnt Modify original array - Concatenates two arrays with each other and return new array
let newArray2 = ["Avi", "Khude"];
console.log(newArray2);
console.log(newArray.concat(newArray2));

// unshift() - Modify original array - add elements at starting index of array and return new length
newLength = newArray.unshift(18, 20);
console.log("Original Array :", newArray);
console.log("new length of array :", newLength);

// shift() - Modify original array - deletes element at starting index of array and return deleted element
let deleted = newArray.shift();
console.log("Original Array :", newArray);
console.log("deleted element :", deleted);

// slice() - doesnt modify original array - returns piece of array (from start index to end index)
console.log(newArray.slice(0, 5)); // Starting index (including), end index (excluding)
console.log(newArray.slice(6)); // return rest of the array from given starting index
console.log(newArray.slice()); // returns entire array
console.log("Original Array :", newArray);

// splice() - modify original array - deletes, adds elements from given starting index and returns deleted elements
// syntax -
// arr.splice(startIndex, noOfElementsToDelete, addNewElement1, addNewElement2, ...);
// elements are deleted from startIndex and ahead
// newElements are added at startIndex and ahead

// delete & add using splice
deleted = newArray.splice(2, 3, "Avi", "Khude");
console.log("deleted elements :", deleted);
console.log("Original Array :", newArray);

// only delete using splice
deleted = newArray.splice(3, 1);
console.log("deleted elements :", deleted);
console.log("Original Array :", newArray);

// only add using splice
deleted = newArray.splice(3, 0, 105);
console.log("deleted elements :", deleted);
console.log("Original Array :", newArray);

// replace using splice
deleted = newArray.splice(2, 1, 999);
console.log("deleted elements :", deleted);
console.log("Original Array :", newArray);

// if we give only one starting index, it will delete rest of the array from that index
deleted = newArray.splice(4);
console.log("deleted elements :", deleted);
console.log("Original Array :", newArray);

// if we give no argument, it will do nothing
deleted = newArray.splice();
console.log("deleted elements :", deleted);
console.log("Original Array :", newArray);




// Task 2

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// 1. Remove first company
companies.shift();
// 2. Replace Uber with Ola
companies.splice(1, 1, "Ola");
// 3. Add amazon at end
companies.push("Amazon");

console.log(companies);




// Other Array Methods - doesnt modify original array

// map() - It is similar to forEach() i.e. used to access each element of an array, but it returns a new modified Array by performing some operation on each element of original array.
let arr1 = [2, 3, 4, 5, 6];

let a1 = arr1.map((val, index, array) => {
    return val ** 2;   // Returned value of callback function is stored in new Array created by map()
})

console.log("\nNew Array created by map() :", a1);
console.log("Original Array :", arr1)


// filter() - It creates and returns new array by taking some elements from original array, which satisfies certain condition

a1 = arr1.filter((val, index, array) => {
    return val % 2 === 0; // The elements which satisfies this condition will be only added to new Array
})

console.log("\nNew Array created by filter() :", a1);
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
let average = arr1.reduce((result, current) => {
    return result + current;
})

average = average / arr1.length;
console.log("Average of array elements :", average);




// Task 4 - Filter out students marks greater than 90 from an array

let mark = [76, 58, 95, 74, 91];
console.log("\nMarks :", mark);

let toppers = mark.filter((val) => {
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