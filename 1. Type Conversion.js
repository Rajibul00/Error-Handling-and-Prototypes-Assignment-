function convertToNumber(inputString) {
    try {
      const number = parseFloat(inputString);
  
      if (isNaN(number)) {
        throw new Error("Invalid number");
      }
  
      return number;
    } catch (error) {
      return "Invalid number";
    }
  }
  
  // Example usage:
  console.log(convertToNumber("42")); // Output: 42
  console.log(convertToNumber("3.14")); // Output: 3.14
  console.log(convertToNumber("abc")); // Output: "Invalid number"
  