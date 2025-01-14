document.addEventListener("DOMContentLoaded", () => {
  fetch("/Backend/getUserData.php")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status === "success") {
        const user = data.user;
  
        // Populate the user data
        document.getElementById("username").textContent = user.username || "N/A";
        document.getElementById("age").textContent = user.age || "N/A";
        document.getElementById("user_location").textContent = user.user_location || "N/A";
        document.getElementById("phone_number").textContent =
          user.phone_number || "N/A";
        document.getElementById("loginEmail").textContent = user.loginEmail;
      } else {
         //alert(data.message || "Failed to fetch user data.");
        // window.location.href = "index.html"; // Redirect to login if not logged in
        
      }
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
      alert("An error occurred. Please try again.");
    

    });
});
