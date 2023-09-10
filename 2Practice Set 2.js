// Chapter 2 practice set


// question 1
// let age = prompt("What is your age?")
 //prompt will not work in Node.js it is use to take input
 let age = 15;

if(age>10 && age<20){
    console.log("age between 10 and 20")
}
else{
    console.log("Age is not between 10 and 20")
}

// question 2
// switch case statement explore
// only 15,16,17 ages are special
// let age = prompt("What is your age?");
// let age = 10;
switch(age){
    case 15:
        console.log("age is special");
    case 16:
        console.log("age is special");
    case 17:
        console.log("age is special");
    default:
        console.log("age is not special");
    // in switch case all the case are executed inckuding 
    // default to avoid this we need to add break after each case
}


// question 3
// number divisible by two or not
// let num = prompt("What is your age?");
if(num/2==0){
    console.log("divisible by two")
}
else{
    console.log("not divisible by two")
}



// question 4
let a = 16;
console.log(a>15?"greater tha 15":"not greater than 15");
