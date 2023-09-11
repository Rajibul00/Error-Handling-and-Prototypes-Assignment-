function numberChecker(numbersArray) {
    // Define the returned function
    return function(numberToCheck) {
      return numbersArray.includes(numberToCheck);
    };
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(numbers);
  
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false
  