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
*/
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