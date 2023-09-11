class Calculator {
    static add(number1, number2) {
      return number1 + number2;
    }
  }
  
  // Instantiate the Calculator class (Note: You don't need to instantiate for static methods)
  const result = Calculator.add(5, 7);
  
  console.log(`The sum is: ${result}`); // Output: "The sum is: 12"
  