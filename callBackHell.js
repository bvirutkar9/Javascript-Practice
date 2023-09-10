// Callback hell, also known as "pyramid of doom" or "callback spaghetti,"
//  refers to a situation in asynchronous JavaScript programming where multiple 
//  nested callbacks are used to handle sequential or dependent asynchronous operations. 
//  This can lead to code that becomes deeply nested, hard to read, and difficult to maintain. 
//  Callback hell often arises when you have a series of asynchronous 
//  operations that depend on the results of previous operations, 
//  leading to a cascade of callbacks inside each other.


// for example:   

asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
      asyncOperation3(result2, function(result3) {
        // ... and so on
      });
    });
  });
  
// drawbacks are readablitiy, maintain,debugging, error handling 

//   promises and async/await can be used to avoid callback hell 