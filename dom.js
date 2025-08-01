console.log("Welcome to DOM (Document Object Model)");
// When a webpage is loaded, browser creates a Document Object Model (DOM) of the page.

// Window object - It is an object created by browser (not by javascript) automatically
// It is global object with lots of properties and methods inside it.

console.log("This is normal console.log");
window.console.log("This is from window.console.log");
// window.alert("Alert from window object"); // console.log, alert() is also part of window object

// 'document' object - Entire html is stored in a js object called 'document' (present in window object)
// window object --> document object --> entire html (head, body)
console.dir(window.document); // console.dir used to print properties & methods of an object

// Printing body from document object
console.log(document.body);




// DOM Manipulation -  DOM is used to modify our html elements using javascript

// selecting element with Id
let heading = document.getElementById("heading");
console.dir(heading);

// selecting elements with ClassName
let btn = document.getElementsByClassName("btn"); // returns 'html collection' of all btn class
console.dir(btn);

// selecting elements with TagName
let para = document.getElementsByTagName("p"); // returns 'html collection' containing all p tag
console.dir(para);




// Query selector

// Id
let firstId = document.querySelector("#heading");
console.dir(firstId);

// Class
let firstClass = document.querySelector(".btn"); // returns first element of .btn class
console.dir(firstClass);
let allClasses = document.querySelectorAll(".btn"); // returns NodeList of all elements with same class
console.dir(allClasses);

// Tag
let firstElement = document.querySelector("p"); // returns first element of p tag
console.dir(firstElement);
let allElements = document.querySelectorAll("p"); // returns NodeList of all elements with same tag
console.dir(allElements);




// Accessing values of properties
let div = document.querySelector('div');

// 1. Accessing tagName
console.log("Tag name :", div.tagName);

// 2. Accessing & setting inner text
console.log("Inner Text :", div.innerText)
div.children[0].innerText = 'New paragraph';

// 3. Accessing & setting inner html
console.log("Inner html :", div.innerHTML)
div.children[1].innerHTML = '<i>This is italics paragraph</i>';

// 4. Accessing text content of hidden elements (Elements with visibility: hidden)
console.log("Text content :", div.textContent);




// firstChild, lastChild, children

console.log(div.firstChild);
console.log(div.lastChild);
console.log(div.children[0]);
console.log(div.children[1]);

// In JS there are 3 types of nodes : text nodes, comment nodes, element nodes
// Generally we only deal with element nodes, Explore more on it




// Task 1 - Append text into existing element

let h2 = document.querySelector('#task1');
h2.innerText = h2.innerText.concat(' from Avishkar Khude');

// Task 2 - Change text from all elements of same class

let box = document.querySelectorAll('.box');
for (let i = 0; i < 3; i++) {
    box[i].innerText = `Box no. ${i}`;
}




// Getting Attributes of html elements (nodes)

let h1 = document.querySelector('h1');
console.log(h1.getAttribute('id')); // returns value of id of h1 tag

let myDiv = document.querySelector('div');
console.log(myDiv.getAttribute('class'));

// Setting Attributes of html elements (nodes)

myDiv.setAttribute('id', 'paraDiv');
h1.setAttribute('class', 'title'); // sets className of h1 equals to 'title'
// If already present, it will override the value of previous className




// classList & its methods - Used to set multiple classes to single html element

myDiv.classList.add('newClass'); // adds a class name
myDiv.classList.add('anotherClass'); 
myDiv.classList.remove('newClass'); // removes class name for particular element
myDiv.classList.toggle('newClass'); // Agar laga hai to hatao, hata hain to lagao
myDiv.classList.replace('newClass', 'anotherNewClass'); // replace className with another className
console.log(myDiv.classList.contains('newClass')); // check if className is present in classList




// Style Attribute - It is a js object which gives all css properties of particular element (It is used to get or set inline css for any particular element)

// Accessing style of h1 element
console.log(h1.style);

// Setting style (inline css) to h1 element
h1.style.color = 'blue';
h1.style.textAlign = 'center';




// Insert new Elements in existing html

// Create a new element
let h3 = document.createElement('h3');
h3.innerText = 'New Heading h3';

let paragraph = document.createElement('p');
paragraph.innerText = 'New Paragraph p';

// 1. Add before any element (outside)
myDiv.before(h3);

// 2. Add after any element (outside)
myDiv.after(h3);

// In 'after' and 'before' whichever is written at last, it will override another
// Ex. in above case 'before' written 'first' and then 'after', so 'after' will override 'before'

// 3. Add as a firstChild (inside)
myDiv.prepend(paragraph);

// 4. Add as a lastChild (inside)
myDiv.append(paragraph);
// Same for append and prepend, whichever is written later will override previous

// 5. appendChild() - Adds element as last child of any element
myDiv.appendChild(h2);

// The difference between the append() and the appendChild() method is:
// append() accepts node objects and strings, while appendChild() only accepts node objects
// append() has no return value, while appendChild() return the appended node object
// append() allows to add multiple items, while appendChild() allows only one item





// Delete elements (nodes - elements accessed by using selectors)

// 1. Remove element - removes a node
h3.remove(); // h3 is accessed above using querySelector

// 2. removeChild() - removeChild() method removes an element's child
myDiv.removeChild(myDiv.children[0]);




// Task 3 - Create new button, add some style, add it as 1st child of html body

let newButton = document.createElement('button');
newButton.innerText = 'Click Me (new)';
newButton.style.backgroundColor = 'red';
newButton.style.color = 'white';
document.querySelector('body').prepend(newButton);


// Task 4 - give multiple classNames using js

let myh2 = document.querySelector('#task1');
// myh2.setAttribute('class', 'intialDiv'); // This will override className if already defined
// To set another className, use classList
myh2.classList.add('h2firstClass');
myh2.classList.add('h2secondClass');
myh2.classList.add('h2thirdClass');