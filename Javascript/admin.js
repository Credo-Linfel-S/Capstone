document.getElementById("adminForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent the form from reloading the page

  const loginPassword = document.getElementById("admins_password").value;

  // Send login data to the PHP backend
  const response = await fetch("/Backend/admin.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `admins_password=${encodeURIComponent(loginPassword)}`,
  });

  const result = await response.text();

  // Display the server response in the loginMessage div
  const loginMessage = document.getElementById("logi1nMessage");
  if (result.trim() === "success") {
    window.location.href = "/HTML/Admin/adminform.html"; // Redirect on success
  } else {
    loginMessage.textContent = result; // Show error message

    // Set a timeout to clear the message after 5 seconds
    setTimeout(() => {
      loginMessage.textContent = "";
    }, 2000); // 5000ms = 5 seconds
  }
});
