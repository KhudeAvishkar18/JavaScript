console.log('Welcome to JS Events');
// The change in state of an object is known as an Event.
// Event handler written in JS has more precedence than inline event handler

// 1. onclick event
let btn = document.querySelector('.btn');
btn.onclick = (e) => { // e is event object, contains all event related information
    console.log('Button Clicked');
}

// 2. ondblclick event
let btn2 = document.querySelectorAll('.btn')[1];
btn2.ondblclick = (e) => {
    console.log('Second Button Clicked');
}

// 3. onmouseover event - Fired when a pointing device is moved onto the element or onto one of its children.
let heading = document.querySelector('h1');
heading.onmouseover = (e) => {
    console.log('You are inside heading tag');
}

// 4. onmouseout event - Fired when a pointing device (usually a mouse) is moved off the element or off one of its children.
heading.onmouseout = (e) => {
    console.log('You are out of heading tag');
}

// 5. onkeypress event - deprecated
// onkeypress = (e) => {
//     console.log('Key is pressed');
// }

// 6. onkeydown event
onkeydown = (e) => {
    console.log('Key is down');
}

// 7. onkeyup event
onkeyup = (e) => {
    console.log('Key is up');
}




// Event object - contains event information like event type, event target, clientX, clientY
btn.onclick = (evt) => {
    console.log('First button clicked');
    console.log(evt);
    console.log('Type of event :', evt.type);
    console.log('Target of event :', evt.target);
    console.log('X axis :', evt.clientX);
    console.log('Y axis :', evt.clientY);
}




// Inline event handling makes our code bulky, hence we dont use it
// Normal JS event handling allows us to handle an event for particular element only once. (If we try to handle same event for same element twice, previous handler will get overridden by newly written handler), hence we dont use it. Instead we prefer event listener.

// Add Event Listeners - Suggested Method for adding or removing event handlers

let h2 = document.querySelector('h2');
h2.addEventListener('click', (e)=>{
    console.log("You clicked h2 using first handler");
})

let callback2 = (e)=>{
    console.log("You clicked h2 using second handler");
};
h2.addEventListener('click', callback2);

let callback3 = (evt)=>{
    console.log("You clicked h2 using third handler");
    console.log(evt);
};
h2.addEventListener('click', callback3);

// Remove Event Listeners - 

h2.removeEventListener('click', callback2); 
// give corresponding event type & callback function to remove that event listener
// the callback reference should be same which is used while adding event listener




// Task 1 - Create a toggle button for background colour

let mode = document.querySelector('.mode');
let toggleClass = () => {
    document.body.classList.toggle('toggleBackground');
    if(mode.innerText === 'Turn on Dark Mode')
        mode.innerText = 'Turn on Light Mode';
    else
        mode.innerText = 'Turn on Dark Mode';
}
mode.addEventListener('click', toggleClass);