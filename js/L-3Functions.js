//Loops and strings
//loop are used to execute a piece of code again and again
/*//for loop:print 1 to 5
for(let i =1;i<=5;i++){
    console.log("welcome to my First n times print Program!")
}*/
/*// calculate sum on n numbers;
let sum =0;
for(let i=1;i<=5;i++){
    sum+=i;
}console.log("sum=",sum);
*/
/*
//while loop
let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}

//do-while loop:it will execute atleast once no matter cond. t orf;
 let i=20;
 do{
    console.log("welcome Back");
    i--;
 }while(i<=11);//wrong conditions!
*//*
//for-of loop
let s1 ="Ram ji Ki ram leela"
let count =0;
for(let i of s1){
    console.log("i",i);
    count++;
}console.log(count,"is count of string ")

//for-in loop:
let student={
    fname:"Komal",
    age:22,
    cgpa:9.8,
    isPass: true
}
for(let i in student){
    console.log("key=", i , "value=",student[i]);
}
*//*
//practice:1 print even/odd no. in btw 0-100;

for(let i=1;i<=100;i++){
    console.log((i%2===0) ?  `${i} even` : `${i} odd` );
}

//or 
for(let j=1;j<=100;j++){
    if(j%2===0){
        console.log(j,"is even");
    }else{
        console.log(j, "is odd");
    }
}*/
/*
let s1 ="     Badmash Dost Dost";//strings are immutable in js
s1= s1.trim();//removes the extra spaces!
console.log(s1);
s1= s1.toUpperCase()//convert str into upper case
console.log(s1);
s1 =s1.toLowerCase()//convert into lower case 
console.log(s1);
console.log(s1.slice(0,10));//return parts of  string!
console.log(s1.concat(" Hai"));//join two strings!
console.log(s1.replace("dost","friends"));//replace the first occurance
console.log(s1.replaceAll('d','g'));//replace  all 
console.log(s1.charAt(3));//char at index!
*/
/*
//array in Javascript: collection of items!array is mutable in js!
let marks = [22,23,22,21,25,27,28,30];
console.log(marks, marks.length, typeof marks);
//loop over an array!
// for(let i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }//now using for-of loop
// for(let i of marks){
//     console.log(i);
// }
let sum = 0;
for(let i of marks){
    sum+=i;
}console.log(sum);
let avg = sum/marks.length;
console.log(`average marks =${avg}`);
*/
/*
let pro =[300,245,654,234,543,657,800];
let sum =0;
for(let i of pro){
    sum+=i/10;
}
pro.push(sum);
console.log(pro);
*//*
// change in array values after applying/remove offer of 10%
let pro =[300,245,654,234,543,657,800];
for(let i=0; i<pro.length;i++){
    pro[i]-=pro[i]/10;//applying discount of 10% on each item in pro
}console.log(pro);

//using for-of loop;
let prod =[4000,5000,6000,5500];
let j=0;
for(let i of prod){
    let offer = i/10;//10% of i value in array
    prod[j]=prod[j]-offer;//replace with new discounted value!
    j++;//increments in index
}console.log(prod);
*/

/* Array methods:
push():add to end
pop():delete from end and return
toString(): convert array to string 
concat():join multiple arrays and return result!
unshift(): add to start
shift():delete value from begin in new!
slice():return  a piece of array :slice(startidx, endingidx):original array remains same
splice(): change original array(add,remove,replace):splice(startidx,delCount,newElement)

*/
/*
let food = ["potato","Tomato","apple", "grapes"];
let marks =[22,34,45,67,86,23];
console.log(food);
food.push("guava","litchi");//add items in original array at end !
console.log(food);
let deletedFood = food.pop();//delete item in original array for  end !
console.log(food);
console.log(`deleted Food : ${deletedFood}`);
console.log(food.toString());//convert original array into string!
let k = marks.toString()
console.log(k, typeof k);

let Hero =["Ayushmaan","Ranveer", "Amitabh","Varun","Jitendar","Dharamji","Boby","Sunnydeol"];
let Heroin=["Madhuri","Deepika","Aliya"];
let singer =["arijit","sonu","shreya","sunidhi"];
console.log(Hero.concat(Heroin,singer));
console.log(Hero);
console.log(Heroin);
Hero.unshift("Hritik");//in original array
console.log(Hero);
let k1 = Hero.shift();
console.log(`deleted value ${k1} and new Heroes are :${Hero}`);
console.log(Hero.slice(2,6));
*/
/*
let  p1 = [1,2,3,4,55,6,6,7,89,3,2,4];
console.log(p1.splice(4,2,10000, 33333,55555   ));//replace
console.log(p1)
console.log(p1.splice(1,0,1022),p1);//here we are not deleting only adding
console.log(p1.splice(3,2),p1);//only deleting 2 numbers of array from  index 3,....
*/
/*
//practice
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);
companies.shift();//delete from start
console.log(companies.splice(1,1,"Ola"),companies);//replace
console.log(companies.push("Amazon"), companies);//add at the end
*/


/*Functions in JS:block of code that performs a specific task,can be invoked whenever needed
(reduced redundancy/repeatations of code)
function definition:
function functionName(param1,param2,.....parameters){
    //do some work
}
function call/invoke:
functionName(arguments)
*//*
function welcomeMessage(a="Team",b="Programming"){
    console.log(`welcome to My Official Page!\n${a}`);
    console.log(`today we are learning ${b}`);
}
welcomeMessage()
welcomeMessage("Karnam")
let a2=["Rama", "Shyama","Radha","vallabh","Pritam"];
let a3=["Java","python","c++","Javascript",".Net","#c"]
for(let i=0;i<a2.length || i<a3.length;i++){
    welcomeMessage(a2[i],a3[i]);
}
*//*
//function practice in JS
// Function with meaningful default values
function welcomeMessage(a = "Team", b = "Programming") {
    console.log(`welcome to My Official Page!\n${a}`);
    console.log(`today we are learning ${b}`);
}

// Basic calls
welcomeMessage();            // No arguments
welcomeMessage("Karnam");    // Only name provided

// Data sources
let a2 = ["Rama", "Shyama", "Radha", "vallabh", "Pritam"];
let a3 = ["Java", "python", "c++", "Javascript", ".Net", "#c"];

// Loop based on the LONGEST array
let maxLength = Math.max(a2.length, a3.length);

for (let i = 0; i < maxLength; i++) {
    welcomeMessage(
        a2[i] ?? "Team",          // fallback if name missing
        a3[i] ?? "Programming"    // fallback if topic missing
    );
}
*//*
//exception handling in js
function calcuArith(a,b){
    try {
        if(typeof a!=="number" || typeof b!=="number"){
            throw new TypeError(`inputs must be numbers!!you entered ${a} & ${b}`);
        }
        if(b===0){
            throw new Error("/ and % by zero are not allowed!");
        }
    console.log("addition:a+b", a+b,"subtraction:a-b", a-b );
    console.log("multiplication:a*b", a*b, "divide:a/b", a/b);
    console.log("modulus:a%b", a%b,"power:a**b" , a**b);
    }catch (error){
        console.error("Error:",error.message);
    }finally{
        console.log("Calculations Done.");
    }    
}
calcuArith(224,3);//valid call
calcuArith(3,"a");//invalid datatype as input
calcuArith(330,0);//error logic call
*/
/*
function calVal(x,y){
    const s=x+y;
    console.log("before return");
    return s;//function exit here!
    console.log("after return");//after return statement further code will not run/unreachable code 
}
let sum1 = calVal(234,456);
console.log(sum1);
*/
/*
//Arrow functions:compact way of writing a function
const functionName = (a1,b1,c1,d1)=>{
    console.log("welcome",a1,b1,c1,d1);
};
functionName(2,3,4,5);

let welcomeHello = ()=>{
    console.log("welcome Home.");
};
 welcomeHello();

//vowel count in strings
function calVowel(st1){
    let c=0;
    for (let i of st1.toLowerCase()){
        
        if(i==="a"|| i==="e"||i==="i"||i==="o"||i==="u"){
            c++
        }
    }console.log(`vowels count in string: ${c}`);

}
calVowel("karamchandra Gandhi ");
calVowel("xyz");

//vowels count with arrow function!
const countVowel =(st1)=>{
    let c=0;
    for (let i of st1.toLowerCase()){
        
        if(i==="a"|| i==="e"||i==="i"||i==="o"||i==="u"){
            c++
        }
    }console.log(`vowels count in string: ${c}`);
}
countVowel("desh mera rangila");
countVowel("an empty space will be best for new creativity");


//ForEach Loop in Arrays: arr.forEach(callBackFunction)
//callBackFunction: Here, it is a function to execute for each element in the array
//a callback is a function passed  as an argument to another fucntion.

function Wish(){
    return "hello user welcome to Home page";
}.
function magic(a){
    console.log( `kudos with ${a()}`);
}
magic(Wish);
function demo() {
    console.log("Hello");//print: for debugging,logging 
}

function demo2() {
    return "Hello";//return: for Business , calculations
}

console.log(demo());   // prints: Hello, then undefined
console.log(demo2());  // prints: Hello


let arr1 =["alpha","beta","gama","delta","zeta","peta"];
arr1 = arr1.concat([10,34,24,25,55]);
arr1.forEach((val)=>{
    console.log(val);
});

let p1= ["alpha","beta","gama","delta","zeta","peta"];
p1.forEach((a)=>{
    console.log(a.toLocaleUpperCase());
});


//array
let arr1 = ["alpha", "beta", "gama", "delta", "zeta", "peta"];

//Concatenate numbers (returns a new array)
arr1 = arr1.concat([10, 34, 24, 25, 55]);

// Print all values
arr1.forEach((val,idx,arr1) => {
    console.log(`Valueof array ${val},\nindex of array ${idx} \nand array itself ${arr1}`);//print all values of new array
});

//optimal solution to print full array!
console.log("---- strings in Uppercase ----");

arr1.forEach(val => {
    console.log(typeof val === "string"? val.toLocaleUpperCase():val);
});
*/
//now i want the array data type output than!with optimize and complexity min...
let arr1 = ["alpha", "beta", "gama", "delta", "zeta", "peta"];
for(let i=0;i<arr1.length;i++){
    arr1[i]= typeof arr1[i]==="string" ? arr1[i]=arr1[i].toLocaleUpperCase() : arr1[i];
}console.log(arr1);

for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "string") {
        arr1[i] = arr1[i].toUpperCase();
    }
}
console.log(arr1);
arr1 = ["alpha", 10, null, "beta", undefined, true, "gama"];
for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] === "string") {
        arr1[i] = arr1[i].toUpperCase();
    }else if(typeof arr1[i]==="object" && arr1[i]!==null){}
}

console.log(arr1);