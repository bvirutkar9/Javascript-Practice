// promises are aletrnative of callback to avoid callback hell
//  there are 3 states of promises : pending , resolved and rejected 

// here all the codes are in synchrnous nature 
const ticket = new Promise(function(resolve,reject){
    const isBoarded = false;
    if(isBoarded){
        resolve("your ticket is booked");
    }
    else{
        reject("your ticket is cancelled");
    }
});

ticket
    .then((data)=>{
        console.log("resolved",data); //take place when resolved 
    })
    .catch((data)=>{
        console.log("rejected",data); //take place when rejected 
    })
    .finally(()=>{
        console.log("finished");  // take place everytime 
    });
