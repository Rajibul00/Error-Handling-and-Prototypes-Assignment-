class Person {
    constructor(name = "Unknown", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class without providing parameters
  const person1 = new Person();
  
  // Instantiate an instance of the Person class with provided parameters
  const person2 = new Person("John", 30);
  
  // Call the getDetails method for both instances
  console.log(person1.getDetails()); // Output: "Name: Unknown, Age: 0"
  console.log(person2.getDetails()); // Output: "Name: John, Age: 30"
  