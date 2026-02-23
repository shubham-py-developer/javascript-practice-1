console.clear();
console.log("File running...");
console.log("hello from L-2Operators.js");
let a  = 5;
let b = 10;
console.log("a + b =", a + b);// addition
console.log("a - b =", a - b);// subtraction
console.log("a * b =", a * b);// multiplication
console.log("b / a =", b / a);// division
console.log("b % a =", b % a);// modulus
console.log("a ** 2 =", a ** 2);// exponentiation
//unary operators
console.log("a=",a,"++a =", ++a);// pre-increment
console.log("b=",b,"--b =", --b);// pre-decrement
console.log("a=",a,"a++ =", a++);// post-increment
console.log("b=",b,"b-- =", b--);// post-decrement
console.log("a=",a,"b=",b);
// Assignment Operators
let c = 15;
console.log("c += a =", c += a);// addition assignment
console.log("c -= a =", c -= a);// subtraction assignment
console.log("c *= a =", c *= a);// multiplication assignment
console.log("c /= a =", c /= a);// division assignment
console.log("c %= a =", c %= a);// modulus assignment

// Comparison Operators
console.log("a == b:", a == b);// equal to
console.log("a != b:", a != b);// not equal to
console.log("a === b:", a === b);// strict equal to
console.log("a !== b:", a !== b);// strict not equal to
console.log("a > b:", a > b);// greater than
console.log("a < b:", a < b);// less than
console.log("a >= b:", a >= b);// greater than or equal to
console.log("a <= b:", a <= b);// less than or equal to

// Logical Operators
let x = true;
let y = false;
console.log("x && y:", x && y);// logical AND
console.log("x || y:", x || y);// logical OR
console.log("!x:", !x);// logical NOT

// Bitwise Operators
const m = 5; // 0101 in binary
const n = 3; // 0011 in binary
console.log("m & n =", m & n);// bitwise AND
console.log("m | n =", m | n);// bitwise OR
console.log("m ^ n =", m ^ n);// bitwise XOR
console.log("~m =", ~m);// bitwise NOT
console.log("m << 1 =", m << 1);// left shift
console.log("m >> 1 =", m >> 1);// right shift
console.log("m >>> 1 =", m >>> 1);// unsigned right shift

// Type Operators
console.log("typeof a:", typeof a);// type of
console.log("a instanceof Number:", a instanceof Number);// instanceof

// Other Operators
console.log("a ? 'Yes' : 'No':", a ? 'Yes' : 'No');// conditional (ternary) operator
//console.log("delete a:", delete a);// delete operator           

var c1 = 20;
var d = 3;
console.log("c1+d", c1+d);
console.log("c1-d", c1-d);
console.log("c1*d", c1*d);
console.log("c1/d", c1/d);
console.log("c1%d=", c1%d);
console.log("c1**d", c1**d); 
//unary operators
console.log("++c", ++c);//pre-increment
console.log("d++", d++);//post-increment
console.log("--d", --d);//pre-decrement
console.log("d--", d--);//post-decrement    

//assignment operators
var  e = 40;
console.log("e+=40", e+=40);//addition assignment e = e + 40
console.log("e-=20", e-=20);//subtraction assignment e = e - 20
console.log("e*=2", e*=2);//multiplication assignment e = e * 2
console.log('e/=3', e/=3);//division assignment e = e / 3
console.log("e%=6", e%=6);//modulus assignment e = e % 8
console.log("e**=2", e**=2);//exponentiation assignment e = e ** 2
console.log("e", e);
//comparison operators
const f = 35;
const g = 35;
console.log("f>g", f>g);//greater than
console.log("f>=g", f>=g);//greater than or equal to
console.log("f<g", f<g);//less than
console.log("f<=g", f<=g);//less than or equal to
console.log("f==g", f==g);//equal to
console.log("f!=g", f!=g);//not equal to
console.log("f===g", f===g);//strict equal to
console.log("f!==g", f!==g);//strict not equal to

//logical operators
let h =  20;
let i  = 30;
let  cond1 = (h < i);
let cond2 = (h>i);
console.log("cond1 && cond2", cond1 && cond2);//logical AND:both should be true if result is true
console.log("cond1 || cond2", cond1 || cond2);//logical OR: either one is true result is true
console.log("!cond1", !cond1);//logical NOT: negates the condition

//type operators
console.log("typeof h", typeof h);//type of
console.log("i instanceof Number", i instanceof Number);//instanceof
i = new Number(10);//creating number object

console.log("i instanceof Number",i instanceof Number);


//other operators:ternary Operator
console.log("h ? 'Yes' : 'No'", h ? 'Yes' : 'No');//conditional(ternary) operator
//console.log("delete i", delete i);//delete operator

// End of L-2Operators.js   
//conditional statements and loops
let age = 40;
if(age>18) {
    console.log(`age ${age} is greater than 18, so eligible to vote.`);
};
    
let  mode = "light";
let color;
if(mode === "dark") {
    color = "black";   
}
if(mode === "light") {
    color = "white";
}
console.log(color);//white 

let mode1 = "dark";
let colors;
if(mode1 === "dark"){
    colors = "black";
}else{
    colors = "white"
}
console.log(colors);  //black

//check even odd 
let num = 44;
if(num%2 === 0){
    console.log(`${num} is even`);
}else{
    console.log(`${num} is odd`);
}