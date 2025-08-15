console.log("Welcome to Async nature of JavaScript\n");

// By nature javascript is asynchronous.

// console.log('One');
// console.log('Two');

// To add some time delay, we will use setTimeout() function
// setTimeout(() => {
//     console.log('Hello after 4 seconds');
// }, 4000); // 4000 miliseconds = 4 seconds

// In synchronous programming above settimeout function will get executed first and then below code.
// But in Asynchronous programming below statements gets executed without waiting for settimeout function as it is taking some time to get executed

// console.log('Three');
// console.log('Four');




// Callbacks - A function passed as an argument to another function called as Callback function.

function fun2(friendName) {
    console.log("\nMy friend name is :", friendName);
}

// Creating a function which takes another function as parameter
function fun1(name, callback) {
    console.log("\nMy name is :", name);
    callback("Aniket");
}

// calling fun1 function
// fun1("Avishkar", fun2); // Here fun2 is a callback function, which is passed as an argument to fun1()

// Another method call by using arrow function
// fun1("Avishkar", (friendName) => { // providing an arrow function as an argument i.e. callback function
//     console.log("\nMy friend name is :", friendName);
// });




// Callback Hell - Nested callbacks stacked below one another forming a pyramid structure called as Callback Hell.

// This is a normal function which prints something & executes a callback function after 2 sec of delay
function getData(dataId, callback) {
    setTimeout(() => {
        console.log("Data", dataId);
        if (callback) callback();
    }, 2000);
}

// Consider a scenario : I wants to get data from this function by passing 1, if I get the data successfully then I want data by passing 2, if successfull again I want by passing 3 and so on.

// This can be achived by using below code
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     })
// })

// This nested callbacks which are forming a pyramid like structure called as Callback Hell, also known as Pyramid of Doom. This is actually one of the problems in Javascript as it is very difficult to understand & manage
// To solve the problem of callback hell, Promises are introduced.




// Promises - It is a Promise about eventual completion of task. It is a JS object. It is also solution to Callback hell problem

// let promise = new Promise((resolve, reject) => {
//     console.log('\nThis is my promise');
//     resolve('Success');
//     // reject('Failure');
// })

// console.log(promise);

// Promise class constructor takes a function with 2 handlers (resolve & reject) as an argument
// resolve & reject are callbacks provided by JS.

// A promise object can have 3 states - 1) Pending, 2) Fulfilled, 3) Rejected
// To fullfill a promise we use resolve('promiseResult') method
// To reject a promise we use reject('promiseResult') method

// Ex.

// Below function is returning a promise object
function getDataNew(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Value", val);
            resolve("Success");
            // reject('Failure');
        }, 5000);
    });
}

// let promiseObj = getDataNew(555);
// console.log(promiseObj);
// Intially, this promise object will have state pending
// After 5 seconds of time, state will be fullfilled or rejected (as we have used setTimeout function).

// Use of promiseObj.then() & promiseObj.catch()

// If we wants to execute any code, when promise is resolved then use promiseObj.then() method
// promiseObj.then((res) => {
//     console.log('Promise Resolved', res);
// })

// If we wants to execute any code, when promise is rejected then use promiseObj.catch() method
// promiseObj.catch((err) => {
//     console.log('Promise Rejected', err);
// })





// Promise Chaining - Chain like structure of .then() function is called as Promise chaining

function asyncData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("Success1");
        }, 4000);
    });
}

function asyncData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("Success2");
            // reject('error');
        }, 4000);
    });
}

function asyncData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data3");
            resolve("Success3");
        }, 4000);
    });
}

// If we wants to execute 1st function initially, and then 2nd function, then 3rd and so on then this can be achived by below code.

// asyncData1().then(() => {
//     asyncData2().then(() => {
//         asyncData3().then(() => {
//         })
//     })
// })
// Above we are calling the function and there itself we are writing .then() function on returned promise object by that function call

// Or same code can be written in more shorter way like

// asyncData1()
//     .then((res) => {
//         return asyncData2();
//     })
//     .then((res) => {
//         return asyncData3();
//     });
// This chain like structure of .then() function is called as Promise chaining.

// In this way we can achive same task using Promises which we have done using Callback hell. Promise chaining is a bit easy way to handle this type of situation compare to Callback hell. But the most efficient way to handle this type of situation is Use of Async-Await.




// Async - Await

// async is a keyword which we can use to make any function asynchronous
// async function always returns a promise.

// await is a keyword which we can use inside any async function, to call any function (synchronously) which is returning a Promise object.

// async function getAsyncData() {
//     console.log('\nGetting 1st data...');
//     await asyncData1(); // Initially this line will get executed, other program execution will wait

//     console.log('\nGetting 2nd data...');
//     await asyncData2(); // then this line will get executed, other program execution will wait

//     console.log('\nGetting 3rd data...');
//     await asyncData3(); // then this line will get executed, other program execution will wait
// }
// getAsyncData();

// Only making a function as async is not enough, you need to use await keyword to call any particular method to get that synchronous behaviour

// In this way we can achive same task using async-await keywords, but it is the most easy and efficient way of handling this kind of problem in JS programming.

// Therefore : async-await >> promise chaining >> callback hell




// IIFE - Immediately Invoked Function Expression
// Instead of calling any function on another line, we can call the function, within its definition only
// Syntax - 
/* 
(function (){
    // Function body
})();    
*/

// ex.
(async function () {
    console.log('\nGetting 1st data...');
    await asyncData1(); // Initially this line will get executed, other program execution will wait

    console.log('\nGetting 2nd data...');
    await asyncData2(); // then this line will get executed, other program execution will wait

    console.log('\nGetting 3rd data...');
    await asyncData3(); // then this line will get executed, other program execution will wait
})();

// Last pair of parenthesis is to call that function there itself.
// Drawback of IIFE is that we cant call the same function again, it will get executed only once as it doesnt take function name in function definition