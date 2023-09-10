// Pass by reference 
function Reference(array){
    array[0]=99
}
let num1 = [10,20,30,40,50];
let num2 = num1;
Reference(num2);
console.log(num1);
console.log(num2);
// here if you make a change in only one num1 or num2, 
// change will be reflect in both num1 and num2 as memory address is accesed 



// Pass by value 
let b = 10;
let c = b;
c=b+10;
console.log(b)
console.log(c)
// here a copy of value is assigened to c in line 16 and not the memory of variable b 
// hence by changing one other will not get change 
// this is pass by value 