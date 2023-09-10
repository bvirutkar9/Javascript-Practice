// Chapter 1:
// question 1:
let x = "Bharat"
let y = 8
console.log(x+y)

// question 2
// get type of data type by using data type operator
console.log(typeof (x+y))


// question 3:
// create a Object
const ObjectBharat = {
    name : "bharat",
    age : 22,
}
console.log(ObjectBharat)
// Output={ name: 'bharat', age: 22 }



// question 4
// add new key in the above object
ObjectBharat['Address'] = "Chandrapur"
console.log(ObjectBharat)
// Output={ name: 'bharat', age: 22, Address: 'Chandrapur' }



// question 5
// make a dectionary
const Dictionary = {
    Abnegation	: "Denial",
    Ambigue : "An ambiguous expression or statement. ",
    Blert : "A cowardly person, someone who is weak. ",
}
console.log(Dictionary)
console.log(Dictionary.Blert)
// or 
console.log(Dictionary['Blert']) 
// both are same  