class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee = new Employee("John Doe", "Software Engineer", 75000);
  
  // Call the getSalary method
  const employeeSalary = employee.getSalary();
  console.log(`Employee Salary: $${employeeSalary}`);
  