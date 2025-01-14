document.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await fetch("/Backend/getUserData.php");
    const userData = await response.json();

    // Pre-fill the form fields
    document.getElementById("name").value = userData.username;
    //  document.getElementById("number").value = userData.phone_number;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
});
