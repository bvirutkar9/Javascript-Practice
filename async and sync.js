// synchronous code 
console.log("synchronous code :")
console.log(1);
console.log(2);
console.log(3);


// asynchoronous code 
console.log("Asynchronous code :")
console.log(1);

const two=()=> {
    console.log(2);
};

setTimeout(two,0);

console.log(3);