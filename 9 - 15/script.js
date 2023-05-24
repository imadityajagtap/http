function validateRegistration() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
  
    // Validate First Name
    if (firstName.length < 6 || !/^[a-zA-Z]+$/.test(firstName)) {
      alert("First name should contain alphabets only and be at least 6 characters long.");
      return false;
    }
  
    // Validate Last Name
    if (lastName.trim() === "") {
      alert("Last name should not be empty.");
      return false;
    }
  
    // Validate Address
    if (address.trim() === "") {
      alert("Address should not be empty.");
      return false;
    }
  
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
  
    // Validate Mobile Number
    var phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
      alert("Mobile number should contain 10 digits only.");
      return false;
    }
  
    // All fields are valid
    return true;
  }
  