function fetchData(url, callback) {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const data = "Some data fetched from " + url;
      callback(data); // Call the provided callback with the data
    }, 1000); // Simulate a delay of 1 second
  }
  
  function handleFetchedData(data) {
    console.log("Handling fetched data:", data);
  }
  
  fetchData("https://example.com/api/data", handleFetchedData);
  console.log("Fetching data...");


// We define a function named fetchData that takes two parameters: url (the URL to fetch data from) and callback (a function to be called once the data is fetched).

// Inside the fetchData function, we use the setTimeout function to simulate an asynchronous operation. The setTimeout function takes two arguments: a function to execute after a certain delay, and the delay time in milliseconds.

// Inside the setTimeout callback function, we create a data string that contains the fetched data along with the provided URL.

// We then call the callback function and pass the data as an argument. This means that once the simulated asynchronous operation is complete, the provided callback function will be called, allowing us to process the fetched data.

//   function handleFetchedData(data) {
//     console.log("Handling fetched data:", data);
//   }

// We define another function named handleFetchedData that takes one parameter, data.

// Inside this function, we simply log a message along with the data to the console, simulating the handling of the fetched data.


//     fetchData("https://example.com/api/data", handleFetchedData);
//         console.log("Fetching data...");

// We call the fetchData function with two arguments: the URL "https://example.com/api/data" and the handleFetchedData function. This means that when the data is fetched, the handleFetchedData function will be called with the fetched data as an argument.

// We also log the message "Fetching data..." to the console. This message will appear immediately after the fetchData function is called.

// Overall, the code simulates an asynchronous operation using the setTimeout function, fetching data from a URL, and then passing the fetched data to a callback function for further processing. This is a basic example of using a callback in JavaScript to manage asynchronous behavior.




