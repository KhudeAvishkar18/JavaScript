console.log('Welcome to APIs in JS');

let h2 = document.querySelector('#task1');
let btn = document.querySelector('.btn');

btn.innerText = 'Generate title';

let url = 'https://jsonplaceholder.typicode.com/todos/1';

let apiCall = async function(){
    let response = await fetch(url);    // fetch method is an asynchronous method used to call an api, which returns a promise object
    // console.log(response);
    // console.log(response.status);
    
    let data = await response.json();   // json() is also asynchronous which (returns a promise object) converts json object into javascript object, which gives us actual data returned by api
    // console.log(data);
    // console.log(data.title);

    h2.innerText = data.title;
};


// Same thing can be done using Promise Chaining

// function apiCall() {
//     fetch(url).then((response) => {
//         return response.json();
//     }).then((data) => {
//         h2.innerText = data.title;
//     })
// }

btn.addEventListener('click', apiCall);




// Task 1 - Hit a post request using fetch() method in js
