function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var address = document.getElementById("address").value;
  
    // First Name validation
    if (firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
      alert("First Name should contain alphabets only and be at least 6 characters long.");
      return false;
    }
  
    // Password validation
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return false;
    }
  
    // Email validation
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid Email ID. Please enter a valid email address.");
      return false;
    }
  
    // Mobile Number validation
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      alert("Invalid Mobile Number. Please enter a 10-digit mobile number.");
      return false;
    }
  
    // Last Name and Address validation
    if (lastName === "" || address === "") {
      alert("Last Name and Address should not be empty.");
      return false;
    }
  
    return true;
  }
  