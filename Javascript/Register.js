document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const phoneNumber = document.getElementById("registerPhoneNumber").value;
    const password = document.getElementById("registerPassword").value;
    const messageElement = document.getElementById("registerMessage");

    // Validate phone number: no letters allowed
    if (/[a-zA-Z]/.test(phoneNumber)) {
      messageElement.textContent = "Please double check your phone number.";
      messageElement.style.color = "red";
      return; // Stop form submission
    }

    // Validate password: at least 6 characters, including one special character
    const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < 6) {
      messageElement.textContent =
        "Password must be at least 6 characters long.";
      messageElement.style.color = "red";
      return; // Stop form submission
    }

    const formData = new FormData(this); // Get form data

    // Make the AJAX request to checkAccount.php
    fetch("/Backend/checkAccount.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.exists) {
          // Show error if account already exists
          messageElement.textContent = data.message;
          messageElement.style.color = "red";
        } else {
          // Submit the form programmatically if no issues
          messageElement.textContent = "Account successfully registered";
          messageElement.style.color = "green";
          this.submit(); // Submit form
          setTimeout(() => {
            window.location.href = "/HTML/Client/index.html";
          }, 1500); // 1.5 seconds delay for user to read the message
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

document.getElementById("registerEmail").addEventListener("input", () => {
  const messageElement = document.getElementById("registerMessage");
  messageElement.textContent = ""; // Clear the message
});

document.getElementById("registerPhoneNumber").addEventListener("input", () => {
  const messageElement = document.getElementById("registerMessage");
  messageElement.textContent = ""; // Clear the message
});
