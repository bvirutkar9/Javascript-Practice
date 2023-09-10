class MyClass {
    constructor(value) {
      this.value = value;
    }
  
    // Instance method
    instanceMethod(value) {
      console.log(`Instance method called with value: ${this.value}`);
    }
  
    // Static method
    static staticMethod() {
      console.log("This is a static method");
    }
  }
  
  // Creating an instance of MyClass
  const myInstance = new MyClass(42);
  
  // Calling instance method
  myInstance.instanceMethod(); // Output: Instance method called with value: 42
  
  // Calling static method directly on the class
  MyClass.staticMethod(); // Output: This is a static method
  

//   In this example, instanceMethod is an instance method because it is defined on the class and can be called on instances of the class like myInstance.instanceMethod(). On the other hand, staticMethod is a static method because it's defined using the static keyword and can be called directly on the class like MyClass.staticMethod(). 


// in this example we created a instance of the class(in line n0. 18) then called instance method (in line n0. 21 )
// but for static method we can call it directly as we call it in the line number 24; 