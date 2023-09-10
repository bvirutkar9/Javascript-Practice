

// A closure is a fundamental concept in JavaScript that occurs when a function "remembers" the variables from the scope in which it was created, even if that scope has finished executing. In other words, a closure allows a function to retain access to its outer function's variables and arguments beyond the lifetime of that outer function. 

function outerFunction() {
    
    var outerVariable = "Bharat";

    function innerFunction() {
        
        console.log(outerVariable);
        
    }
    outerVariable="Hello";
    return innerFunction;
}

var closureFunction = outerFunction();
closureFunction(); // Output: "I am from outerFunction"
