// for loop
// number from 0 to n
let n = 10;
console.log("All the numbers till n are:")
for(let i = 0; i <= n; i++){
    console.log(i);
}



// sum of first n natural numbers
let sum = 0;
for(let i = 0; i <= n; i++){
    sum = sum + i;
}
console.log("Sum of first n natural numbers is:",sum);



// all even number till n
console.log("All the even numbers till n are:")
for(let i = 0; i <= n; i++){
    if(i%2==0){
        console.log(i);
    }
}