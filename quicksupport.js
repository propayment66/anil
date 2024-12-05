document.getElementById("supportForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop form from submitting normally
  
    // Get form values
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Validation
    if (name === "" || phone === "" || email === "" || message === "") {
        document.getElementById("responseMessage").innerText = "All fields are required!";
        document.getElementById("responseMessage").style.color = "red";
        return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
        document.getElementById("responseMessage").innerText = "Phone number must be 10 digits.";
        document.getElementById("responseMessage").style.color = "red";
        return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("responseMessage").innerText = "Invalid email format.";
        document.getElementById("responseMessage").style.color = "red";
        return;
    }
  
    // Display success message
    document.getElementById("responseMessage").innerText = "Form submitted successfully!";
    document.getElementById("responseMessage").style.color = "green";
  
    // Clear form fields
    document.getElementById("supportForm").reset();
  });