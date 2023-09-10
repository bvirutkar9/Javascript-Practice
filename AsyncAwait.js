function getCheese(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const cheese = "🧀";
            resolve(cheese);
        },2000)
    });
    
};

// console.log(getCheese()); this promise will be in pending because 2000; 

function makeDough(cheese){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const dough = cheese + "🍩";
            
            // resolve(dough);
            reject("bad dough",dough);
        },2000)
    });
    
};

function makePizza(dough){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const pizza = dough + "🍕";
            resolve(pizza);
        },2000)
    });
    
};


// we can use await function in order to stop asynchonous program at a specific stage until we get value at that satge(promise get resolved) 


async function orderPizza(){
    try{
        // if anything is rejected catch block will run 
        const cheese = await getCheese();
        console.log("here is cheese:",cheese);

        const dough = await makeDough(cheese);
        console.log("here is dough:",dough);
        
        const pizza = await makePizza(dough);
        console.log("here is pizza:",pizza);
    }
    catch(error){
        console.log("here is error:",error);
    }
    console.log("process Ended");  //this is finally block which will take place no matter what 
}

orderPizza();   //calling the function 