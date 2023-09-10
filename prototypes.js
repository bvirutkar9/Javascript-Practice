// Objects in js have special type of property called through we can make a abject a prototype of another abject and put methods in it 
// suppose we have a object as a and we will make a p as prototype of object a 

let a = {
    name: "bharat",
    lang: "javaScript",
};
console.log(a.name);

// console.log(a.address); this will be undefined as there is no address 

let p = {
    address: "chandrapur"
};

a.__proto__=p;  //this is the way to make p as the prototype of a 
console.log(a.address);