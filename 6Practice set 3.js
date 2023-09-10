// Practice Set 3:

// Question number 1:
//  write a program to print the marks of students
// this is Object

 let marks = {
    harr  : 10,
    bhar : 9,
    anu : 8,
    rohi : 7,
 }


//  Object.keys(marks).length = length of Object
// Object.keys(marks)[i] = keys corresponding to i like harr, bhar,anu
// marks[Object.keys(marks)[i]] = value of Object.keys(marks)[i] this key like 10,8.7

 for(let i =0; i<Object.keys(marks).length;i++){
        console.log("Marks of "+Object.keys(marks)[i] + " is "+ marks[Object.keys(marks)[i]]);
 }



 