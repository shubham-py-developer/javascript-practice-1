// console.log("This is L-1VarandData.js");
// console.log("Learning Variables and Data Types in JavaScript");
// Data Types in JavaScript
console.clear();
console.log("File running...");
const naam = "rajat";// String Data Type
console.log(naam);

let age = 21;// Number Data Type
console.log(age);

let isStudent = true;// Boolean Data Type
console.log(isStudent);

let height = 5.9;// Float Data Type
console.log(height);

let a = null;// Null Data Type
console.log(a);

let b = undefined;// Undefined Data Type
console.log(b);

// Variable Declaration Keywords: in JavaScript let , var, const
var city = "New York";// Using var keyword: var can be redeclared and updated. A global scope variable 
console.log(city);

let country1 = "USA";// Using let keyword, var can't be redeclared but can be updated.A block scope variable
console.log(country1);

let price = 100;// Updating the value of price
price = 120;// var can't be redeclared but can be updated here with let 
console.log(price);//120 final output

const pi = 3.14;// Using const keyword// var can't be redeclared or updated. A block scope variable
console.log(pi);

// Note: Variables declared with const cannot be reassigned
// pi = 3.14159; // This will throw an error

// End of L-1VarandData.js  
//Datatypes in JavaScript
//Primitive Data Types: String, Number, Boolean, Null, Undefined, BigInt,Sumbol
//Non-Primitive Data Types: Object, Array, Function
let isFollowing = true; // Boolean
console.log(isFollowing, typeof isFollowing);
let Scores = 98.00; // Number
console.log(Scores, typeof Scores);// Float
let firstName = "Rajat"; // String
console.log(firstName, typeof firstName);// String
let lastName = null; // Null
console.log(lastName, typeof lastName);// Object
let middleName; // Undefined
console.log(middleName, typeof middleName);// Undefined
let designation = BigInt("123461723981861391628119221921929"); // BigInt
console.log( designation, typeof designation);// BigInt
let uniqueId = Symbol("id_01"); // Symbol
console.log(uniqueId, typeof uniqueId);// Symbol    
let person = { // Object with name person
    name: "Rajat",
    age: 21,
    isStudent: true
};
console.log(person.age, typeof person); // Object 
console.log(person["name"], typeof person); // Object
let numbers = [1, 2, 3, 4, 5]; // Array
console.log(numbers[2], typeof numbers); // Object
let greet = function() { // Function
    console.log("Hello, World!");
};

// Checking Data Types using typeof operator            
typeof Scores; // Number
typeof isFollowing; // Boolean
typeof firstName; // String
typeof lastName; // Object
console.log(typeof firstName); // String
let gender = 'male'; // String

const student = {
    name: "Rama",
    class: 12,
    rollNo: 33,
    age: 20,
    marks: 95.5,
    isPassed: true,
};
console.log(student);
student["age"] =student["age"]+3;// Updating age property using bracket notation:23
console.log(student["age"]);        
student.class = 13;// Updating class property using dot notation :13       
console.log(student.class);
console.log(typeof student);
console.log(student.rollNo, student.name);    
console.log(student["name"], student["marks"]);

// End of L-1VarandData.js
//practice object and array
const product = {
    pentName: "Ball Pen",
    rating: 4.5,
    offer: true,
    price: 20,
    colors: ["blue", "black", "red"],   

};
console.log(product.colors[1]);// Accessing second color: black
product.price = 25;// Updating price property using dot notation
console.log(product.price);// 25
product["rating"] = 4.7;// Updating rating property using bracket notation
console.log(product["rating"]);// 4.7
console.log(typeof product);// Object


const Profile = {
    userName: "rajatBedi",
    followers: 1500,
    following: 300,
    isFollow: true,
    posts: ["Hello World", "My first post", "JavaScript is fun"],

};
console.log(Profile.posts[0]);// Accessing first post: Hello World
console.log(Profile.followers);// Accessing followers: 1500
Profile.followers = Profile.followers + 200;// Updating followers property using dot notation
console.log(Profile.followers);// 1700
Profile["isFollow"] = false;// Updating isFollow property using bracket notation
console.log(Profile["isFollow"]);// false
console.log(typeof Profile.posts);// Object
