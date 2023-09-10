// here code is in asynchrounous nature 

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
            
            resolve(dough);
            // reject("bad dough",dough);
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

// pizza -> dough -> cheese 

getCheese()
            .then((cheese)=>{
                console.log("here is cheese:",cheese);
                return makeDough(cheese);
            })
            .then((dough)=>{
                console.log("here is dough:",dough);
                return makePizza(dough);
            })
            .then((pizza)=>{
                console.log("here is pizza:",pizza);
            })
            .catch((data)=>{
                console.log("error occured: ",data);  //if rejected this will take place 
            })
            .finally(()=>{
                console.log("done process"); //this will take place at the end 
            }) 
 
            // above thing is called chaining 