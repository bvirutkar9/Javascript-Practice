// modern array methods in js 



let array = [ 10 , 20 , 30 , 40 , 50 ];


// forEach 
array.forEach((element)=>{
    console.log(element);
});


// map
array.map((value)=>{
    console.log(value);
})
console.log(array);

// map creates new array and return it 
// while forEach perform operations on that array itself 


array.map((value,index)=>{
    console.log(value,index);
});



// filter method 
let x = array.filter((a)=>{
    console.log(a<30);
    return a<30
});
console.log(x);
// a array created in the name of x which have elements less than 30 
// so filter creates the filetr and return filtered elements 



// reduce 
let numbers = [1 , 2, 3, 4, 5];
let y = numbers.reduce((h1,h2)=>{
    return h1+h2;
});
// reuces value to a single value 
console.log(y);


