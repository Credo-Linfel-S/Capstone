fetch("/Backend/getUserData.php")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Log the data to check what is received
    if (data.error) {
      console.error(data.error);
    } else {
      //document.getElementById("Regid").textContent = data.Regid;
      document.getElementById("username").textContent = data.username;
      document.getElementById("age").textContent = data.age;
      document.getElementById("user_location").textContent = data.user_location;
      document.getElementById("Phone_number").textContent = data.Phone_number;
      document.getElementById("loginEmail").textContent = data.loginEmail;
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
