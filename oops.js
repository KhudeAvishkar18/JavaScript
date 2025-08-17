console.log("Welcome to OOPS in JS");

// A JavaScript object is an entity having state and behaviour (properties & methods).
// Direct method of creation of object
const obj = {
    myName: "Avishkar",
    age: 23,
    about() {
        console.log("My name is", this.myName, "and my age is", this.age);
    }
    // If I use arrow function, this.myName & this.age becomes undefined, because arrow function doesn't contain its own 'this' object reference, but normal function have.
}

console.log(obj.myName);
console.log(obj['age']);
obj.about();




// Prototype object -
// Every JS object contains a special object inside it called Prototype.
// Prototype object contains its own properties and methods
// Ex. in Arrays, we can use length, push(), pop() methods which are present in Prototype object

// We can access values from one object to another by using __proto__
// We can set one object as prototype of another object using __proto__

const obj2 = {
    myId: 1194
}
console.log(obj2.myId);

// Now we can access values from obj in obj2 using __proto__
obj2.__proto__ = obj;
console.log(obj2.about());
// If main object and Prototype object have same methods, main object methods will be prioritised




// Classes (Blueprint) - Class is a program code template for creating objects
// Objects (Real world entity) created by using class also have some properties & methods.

// Creation of class
class Car {
    // constructor - constructor is a method which automatically gets invoke (by new keyword) when you create new object of that class (constructor is a reserved keyword)
    // If you dont create constructor for a class, JavaScript will automatically create one
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log("\nConstructor of Car is called");
        // Constructor is mostly used to intialise some properties of class      
    }

    // Properties
    x = 4; // dont use let or var, directly use propertyName or functionName
    y = 8;

    // Methods
    getSum() {
        return this.x + this.y;
    }
}

// Creating object of Car class
const myCar = new Car(4, 5);
console.log(myCar);

// Accessing properties & methods inside object
console.log(myCar.x, myCar.y);
console.log('Sum is :', myCar.getSum());

// Setting value of properties of object
myCar.x = 15;
myCar.y = 5;
console.log(myCar.x, myCar.y);
console.log('Sum is :', myCar.getSum());

myCar.a = 18;
console.log('Updated value of a :', myCar.a);




// Inheritance - Inheritance is passing down properties & methods of Parent class to child class

class Parent {
    constructor(myName) {
        console.log('\nParent constructor called');
        this.myName = myName;
    }
    a = 5;
    b = 2;
    myCompany() {
        console.log("\nI worked in EIDIKO systems integrators");
    }
}
const objParent = new Parent('Father');

class Child extends Parent {
    constructor(ParentName) {
        console.log("\nChild Constructor started");
        
        console.log("Parents constructor called using super keyword");
        // If parent constructor is present, and we also want to define a child constructor then we always need to call Parent constructor using super keyword in child constructor.
        super(ParentName);
        // super keyword is mainly used to invoke parent class constructor, also to provide any important information (Properties) to parent class constructor from child class constructor, also to call methods of parent class in child class super keyword is used

        console.log("Child constructors end");
    }
    c = 4;
    d = 3;

    // Method overriding - It will override method written in Parent class
    myCompany() {
        super.myCompany(); // To call any method from Parent class in child class, use super.methodName()
        console.log("\nI work in Microsoft");
    }
}

const objChild = new Child('Ujjwala');
console.log(objChild.a, objChild.b, objChild.c, objChild.d);
objChild.myCompany();




// Task 1 - Create User class with name, email properties and viewData() method

class User {
    constructor(uName, mailId) {
        console.log("\nConstructor for User class called");
        this.userName = uName;
        this.email = mailId;
    }

    viewData() {
        console.log('\nUser can view data');
    }
}
const u1 = new User('@khudeavishkar18', 'khudeavishkar18@gmail.com');
u1.viewData();
console.log("Username :", u1.userName, "Email :", u1.email);


// Task 2 - Inherit User in Admin class, add method editData() in Admin class

class Admin extends User {
    constructor(uName, mailId) {
        super(uName, mailId); // calling User class constructor
        console.log('\nAdmin class constructor called');
    }

    editData() {
        console.log("\nAdmin can edit data");
    }
}
const a1 = new Admin('@avishkar', 'avishkar@gmail.com');
a1.editData();
console.log("Username :", a1.userName, "Email :", a1.email);



// Note : Arrow functions behave differently when used inside classes, because they dont have their own 'this' object