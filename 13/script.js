function validateLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Validate Email
    var emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
  
    // Validate Password
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return false;
    }
  
    // Login is valid
    return true;
  }
  