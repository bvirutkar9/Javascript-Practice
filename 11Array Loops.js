// array can be traversed through a for loop 
let num = [10,20,30,40,50];

for( let i = 0;i<num.length; i++){
    console.log(num[i]);
}
// this loop will iterate thorugh all the index of the array and print element 
// for of
console.log("new for of");
for(let i of num){
    console.log(i);
}

// for in 
console.log("new for in");
for(let i in num){
    console.log(num[i]);
}

num.forEach((element)=>{
    console.log(element);
})
// another method to iterate through array
// we get some list in HTML collection
// we cannot run forEach in this collection 
// we have to use arrayFrom for this purpose 


let name= "bharat";


