// first n numbers using while loop
let n = 3;
let i = 0;
while(i<n){
    console.log(i);
    i++;
}


// first n numbers using do while loop
do{
    console.log(i);
    i++;
}while(i<n)




// diff. between do while and while is 
// that do while loop will run and then 
// check the condition while while loop
//  will check the condition and then run 



// this program will not run as the condition is false

while(i>n){
    console.log(i);
    i++;
}



// this will run 1 time and then chack the condition and stop as the condition is false
do{
    console.log(i);
    i++;
}while(i<n)
