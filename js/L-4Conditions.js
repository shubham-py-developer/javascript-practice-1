/*
const product={
    fullName: "parkerjotter standard CT",
    type:"Pen",
    isDealOfDay:true,
    price:55
};
console.log(product.fullName, product.type,product.price,product.isDealOfDay)

const profile={
    accName:"Kripa Chandra",
    followers:"345632K",
    following:5567,
    posts:125,
    isFollow:true,
    bio:"active user on social media"
};
console.log(profile)
let a = 10;
let b = 3;
let cond1= a>b;
let cond2= a==b;
console.log(cond1&&cond2);
console.log(cond1||cond2);
console.log(!cond1);




age = 19;
if (age>=18){
    console.log("eligible to vote");
}
if(age<18){
    console.log('not eligible to vote!!!');
}

let color;
let mode="light";
if (mode==="dark"){
    color="black";
}
else if(mode==="light"){
    color="white";
}
else if(mode==="funny"){
    color="red";
}else{
    color="green"
}
console.log(color);

let num =13;
if (num%2===0){
    console.log(`number: ${num} is even`);
}else{
    console.log(`number: ${num} is odd`);
}

let age=36;

console.log(age>30?'eligible':'not eligible');


const readline = require("readline");
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('Hello enter your name:', function(fullName){
    console.log("your Name is:", fullName);
    rl.close();
});
//print  n time a string !!
for(let A=1;A<=10;A++){
    console.log(`Rub Ne Bana Di Jodi ${A}`);
}
console.log("loop Ended!");



for(let i=1; i<=5; i++){
    console.log(i);
    i++;
}//output 1,3,5

for(let i=1; i<=10; i++){
    if(i==5){
        break;
    }
    console.log(i);
}//output 1,2,3,4

for(let i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}//output :1,2,4,5

for(let i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    if(i==4){
        break;
    }
    console.log(i);
}//output:1,2

let sum = 0;

for(let i=1;i<=5;i++){
    sum = sum + i;
    if(i==3){
        break;
    }
}

console.log(sum);//output:6

let x = 0;

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        x = x + 1;
        if(j === 3){
            break;
        }
    }
}

console.log(x);
Output:12
/*0:1:1:1
1:2:1:2
2:2:2:3
3:3:1:4
4:3:2:5
5:3:3:6
6:4:1:7
7:4:2:8
8:4:3:9
9:5:1:10
10:5:2:11
11:5:3:12
so12

let total = 0;

for(let i = 1; i <= 4; i++){
    for(let j = 1; j <= 4; j++){

        if(i === j){
            continue;
        }

        if(j === 4){
            break;
        }

        total++;
    }
}

console.log(total);
//output
/*0:1:1:0
0:1:2:1
1:1:3:2
2:1:4:2
2:2:1:3
3:2:2:3
3:2:3:4
4:2:4:4
4:3:1:5
5:3:2:6
6:3:3:6
6:3:4:6
6:4:1:7
7:4:2:8
8:4:3:9
9:4:4:9
so 9 


let count = 0;

for(let i = 1; i <= 5; i++){

    if(i % 2 === 0){
        continue;
    }

    for(let j = 1; j <= 3; j++){

        if(j === 2 && i === 3){
            break;
        }

        count++;
    }
}

console.log(count);
let count = 0;

for(let i = 1; i <= 5; i++){

    if(i % 2 === 0){
        continue;
    }

    for(let j = 1; j <= 3; j++){

        if(j === 2 && i === 3){
            break;
        }

        count++;
    }
}

console.log(count);
let count = 0;

for(let i = 1; i <= 5; i++){

    if(i % 2 === 0){
        continue;
    }

    for(let j = 1; j <= 3; j++){

        if(j === 2 && i === 3){
            break;
        }

        count++;
    }
}

console.log(count);
let count = 0;

for(let i = 1; i <= 5; i++){

    if(i % 2 === 0){
        continue;
    }

    for(let j = 1; j <= 3; j++){

        if(j === 2 && i === 3){
            break;
        }

        count++;
    }
}

console.log(count);
let count = 0;

for(let i = 1; i <= 5; i++){

    if(i % 2 === 0){
        continue;
    }

    for(let j = 1; j <= 3; j++){

        if(j === 2 && i === 3){
            break;
        }

        count++;
    }
}

console.log(count);
//output
c,i,j,c
0,1,1,1
1,1,2,2
2,1,3,3
3,3,1,4
4,5,1,5
5,5,2,6
6,5,3,7
so 7

let x = 0;

for(let i=1;i<=4;i++){
    for(let j=1;j<=i;j++){
        x += j;
    }
}

console.log(x);
//output
x,i,j,x
0,1,11
1,2,1,2
2,2,2,4
4,3,1,5
5,3,2,7
7,3,3,10
10,4,1,11
11,4,2,13
13,4,3,16
16,4,4,20
so 20

let total = 0;

for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        if(i+j === 4){
            continue;
        }
        total++;
    }
}

console.log(total);
//output
t,i,j,t
0,1,1,1
1,1,2,2
2,1,3,2
2,2,1,3
3,2,2,3
3,2,3,4
4,3,1,4
4,3,2,5
5,3,3,6
so 6


let x = 0;

for(let i=1;i<=5;i++){
    if(i%2===0){
        for(let j=1;j<=2;j++){
            x += i + j;
        }
    }else{
        x += i;
    }
}

console.log(x);
//output
x, i,x,j,x
0,1,1
1,2,,1,4
4,2,,2,8
8,3,11
11,4,,1,16
16,4,,2,22
22,5,27
so x ===27  
 
for(let i=10;i>=1;i--){
    console.log(i);
}//output:10, 9, 8,7,6,5,4,3,2,1



//print Sum of n natural Number!
let Sum = 0;
for(let N=1;N<=100;N++){
    Sum+=N
}console.log(Sum);

//while loop
let num =0;
while(num<=10){
    console.log(num,":num")
    num++
}
    
//do-while loop (it will run atleast one times!)
let i = 20;
do {
    console.log("Rama");
    i++;
}while(i<=10);

let i = 0;
do {
    console.log("Rama");
    i++;
}while(i<=10);

//interview question
let n = 1;
for(n=1;n<=50;n++){
    if(n%3===0||n%5===0||n%7===0){
        if(n%3===0 && n%5===0){
            console.log("FizzBuzz");
        }else if(n%3===0 && n%7===0){
            console.log("FizzBoom");
        }else if(n%5===0 && n%7===0){
            console.log("BuzzBoom");
        }else if(n%3===0){
            console.log("Fizz");
        }else if(n%5===0){
            console.log("Buzz");
        }else{
            console.log("Boom");
        }
    }else{console.log(n);}
}

//problem 2
let k = 1;
for(k=1;k<=100;k++){
    if(k%2===0 || k%5===0){
        if(k%2===0 && k%5===0){
        console.log("EvenBuzz");
        }else if(k%2===0){
        console.log("Even");
        }else{console.log("Buzz");}
    }else{
        console.log(k);
    }
}

let p =1;
for(p=1;p<=100;p++){
    if(p%2===0 && p%5===0){
        console.log("EvenBuzz");
    }else if(p%2===0){
        console.log("Even");
    }else if(p%5===0){
        console.log("Buzz");
    }else{
        console.log(p);
    }
}

//ternary operator(shorter way)
let q = 1;
for(q=1; q <= 100; q++){
    console.log(q%2===0 && q%5===0 ? "EvenBuzz": q%2===0 ? "Even" : q%5===0 ? "Buzz" : q);}



let b =1;
for(b=1;b<=50;b++){
        if(b%3===0 && b%5===0 && b%7===0){
            console.log("FizzBuzzBoom");
        }else if(b%3===0 && b%5===0){
            console.log("FizzBuzz");
        }else if(b%3===0 && b%7===0){
            console.log("FizzBoom");
        }else if(b%5===0  && b%7===0){
            console.log("BuzzBoom");
        }else if(b%3===0){
            console.log("Fizz");
        }else if(b%5===0){
            console.log("Buzz");
        }else if(b%7===0){
            console.log("Boom");
        }else{
            console.log(b);
        }
    
}


let j = 1;
for(j=1;j<=30;j++){
    if(j%2===0 && j%10===0){
        console.log("SuperEven");
    }else if(j%10===0){
        console.log("Super");
    }else if(j%2===0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}
    
//problem 3
let total = 0;
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        if(i+j === 4) continue;
        total++;
    }
}
console.log(total);//o/p:13

//problem:4 accumulator Pattern:o/p:593
let sum=0;
for(let w=1;w<=50;w++){
    if(w%3===0 || w%5===0){
        sum+=w;
    }
    
}console.log(sum);

//problem5:reverse counting with skip multiple of 7:o/p
for(let p=50;p>0;p--){
    if(p%7===0){
        continue
    }console.log(p)

}
//same but effective and clean code!
for(let p = 50; p >= 1; p--){
    if(p % 7 !== 0){
        console.log(p);
    }
}

//problem 6: string reversal without built-in reverse
let str1 = "krantikari";
let revstr1="";
//console.log(length);
for(let i=str1.length-1;i>=0;i--){
    revstr1+=str1[i];
}console.log(revstr1)

//for browser console
let str2 = prompt("Enter your name:");

if(str2 !== null){
    let revstr2 = "";

    for(let i = str2.length - 1; i >= 0; i--){
        revstr2 += str2[i];
    }

    console.log(revstr2);
}

//Array Max-Min without built-in fn
let ar1=[20,30,10,55,70,15,25,45];
let max = ar1[0];
let min = ar1[0];
for(let i=1;i<ar1.length;i++){
    if(ar1[i]>max){
        max=ar1[i];
    }
    if(ar1[i]<min){
        min = ar1[i];
    }
}
console.log("Max",max);
console.log("Min:",min);

//or
let arr = [4, 9, 1, 7, 3, 15, 2];

let result = { min: arr[0], max: arr[0] };

for(let i = 1; i < arr.length; i++){

    if(arr[i] > result.max){
        result.max = arr[i];
    }

    if(arr[i] < result.min){
        result.min = arr[i];
    }
}

console.log(result);

//what happen if arr is empty[]?above code will be crashed!!!
let arr1 =[10, 20,-5,55,89,-1,55,-40];
if(arr1.length===0){
    console.log("This array is empty!!!!");
}else{
    let res ={max:arr1[0],min:arr1[0]};
    for(let i=1;i<arr1.length;i++){
        if(arr1[i]>res.max){
            res.max=arr1[i];
        }
        if(arr1[i]<res.min){
            res.min=arr1[i];
        }
    }console.log(res);
}

//Numbers are coming one by one (like live data).You CANNOT store the whole array.Still need to maintain min & max.
let min = null;
let max = null;

function processNumber(num){

    if(min === null && max === null){
        min = num;
        max = num;
        return;
    }

    if(num < min){
        min = num;
    }

    if(num > max){
        max = num;
    }
}

// Simulating stream input
processNumber(4);
processNumber(-10);
processNumber(7);
processNumber(99);
processNumber(0);
processNumber(-3);
processNumber(105);
processNumber(15);
console.log("Min:", min);
console.log("Max:", max);

//print all prime nnumbers 1-100
for(let i=2;i<=100;i++){
    let j;
    for( j=2;j<i; j++){
        if(i%j===0){
            break;
        }
    }
    if(j===i){
        console.log(i)
    }       
}

//pattern printing:
for(let i=1;i<=5;i++){
    console.log('*  '.repeat(i));
}
//pattern printing:using nested loop!
for(let i =1;i<=9;i++){
    let row = "";
    for(let j=1;j<=i;j++){
        row+="*  ";
    }console.log(row);
}
//10:Array FizzBuzz Mapping:3-Fizz,5-Buzz,7-Boom and combinations
let a1 = [1,2,3,4,525,15,21,35,105]
for(let i=0;i<a1.length;i++){
    if(a1[i]%3===0 || a1[i]%5===0 || a1[i]%7===0){
        if(a1[i]%3===0 && a1[i]%5===0 && a1[i]%7===0){
            console.log("FizzBuzzBoom")
        }else if(a1[i]%3===0 && a1[i]%5===0){
            console.log("FizzBuzz");
        }else if(a1[i]%3===0 && a1[i]%7===0){
            console.log("FizzBoom");
        }else if(a1[i]%5===0 && a1[i]%7===0){
            console.log("BuzzBoom");
        }else if(a1[i]%3===0){
            console.log("Fizz");
        }else if(a1[i]%5===0){
            console.log("Buzz");
        }else if(a1[i]%7===0){
            console.log("Boom");
        }
    }else{
        console.log(a1[i]);
    }
}
    
//alternatively: Advanced Google-Level
let arr = [0,1 ,2 ,3 ,4 , 315 ,5 ,15 ,21 ,35,44 ];//0 is divisible by all numbers so all three!

for(let num of arr){

    let output = "";

    if(num % 3 === 0) output += "Fizz";
    if(num % 5 === 0) output += "Buzz";
    if(num % 7 === 0) output += "Boom";

    console.log(output || num);
}

//star reverse right pattern
for(let i =5;i>0;i--){
    let row ="";
    for(let j=i;j>0;j--){
        row+="*  "
    }console.log(row)
}

for(let j=6;j>0;j--){
    console.log("*  ".repeat(j));
}
*/

// How would you modify logic so that:Multiples of 3 → "Fizz",

// Multiples of 5 → "Buzz"

// Multiples of 7 → "Boom"

// Prime numbers → "Prime"

// Priority:
// Prime check should happen FIRST.
/*
for(let j=1;j<=100;j++){
    let i;
    if(j>1){
        for(i=2;i<=Math.sqrt(j);i++){
            if(j%i===0){
                break
            }
        }if(i>Math.sqrt(j)){
            console.log(j,"Prime");
            continue
        }
    }

    let  op="";
    if(j%3===0) op+="Fizz";
    if(j%5===0)  op+="Buzz";
    if(j%7===0) op+="Boom";
    console.log(j,op || j);
}
*/

let primeCount = 0;
let fizzBuzzBoomCount = 0;
let numberOnlyCount = 0;

for(let j = 1; j <= 100; j++){

    let i;
    let isPrime = true;

    if(j < 2) isPrime = false;

    for(i = 2; i <= Math.sqrt(j); i++){
        if(j % i === 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        primeCount++;
        continue;
    }

    let op = "";

    if(j % 3 === 0) op += "Fizz";
    if(j % 5 === 0) op += "Buzz";
    if(j % 7 === 0) op += "Boom";

    if(op){
        fizzBuzzBoomCount++;
    } else {
        numberOnlyCount++;
    }
}

console.log("Prime:", primeCount);
console.log("Fizz/Buzz/Boom:", fizzBuzzBoomCount);
console.log("Just Number:", numberOnlyCount);