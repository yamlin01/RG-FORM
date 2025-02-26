function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");
  
    message.innerHTML = ""; // Clear previous messages
  
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
      message.innerHTML = "All fields are required.";
      return;
    }
  
    if (password !== confirmPassword) {
      message.innerHTML = "Passwords do not match.";
      return;
    }
  
    // Basic email validation (can be improved)
    if (!email.includes("@")) {
      message.innerHTML = "Invalid email format.";
      return;
    }
  
    // Simulate successful registration (replace with actual backend submission)
    message.innerHTML = "Registration successful!";
    //In a real application, you'd send the data to a server here using AJAX or Fetch API.
    document.getElementById("registrationForm").reset();
  
  }