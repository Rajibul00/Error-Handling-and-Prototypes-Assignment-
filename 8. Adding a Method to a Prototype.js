// Create the Student prototype object
function Student(name) {
    this.name = name;
  }
  
  // Add the printDetails method to the prototype
  Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  // Instantiate a Student object
  const student1 = new Student("Mithun");
  
  // Call the printDetails method
  student1.printDetails(); // Output: "Hello, my name is Mithun"
  