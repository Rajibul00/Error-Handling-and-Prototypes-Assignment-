class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      // Replace all characters with asterisks
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /\d/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate a User
  const user = new User("myUsername", "MyPa$$w0rd");
  
  // Get the masked password
  console.log(user.password); // Output: "*********"
  
  // Set a new valid password
  user.password = "NewP@ssw0rd";
  
  // Set an invalid password
  user.password = "weak";
  // Output: "Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter."
  