// Function to fetch and display schedule data
function fetchServiceData() {
  fetch("/Backend/FetchServices.php")
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("user-service");
      let tableHTML =
        "<tr><th>ServiceId</th><th>Service</th><th>Name</th></th><th>Age</th><th>Location</th><th>Phone number</th><th>Email</th><th>Date</th></tr>"; // Adjust columns based on your data
      data.forEach((row) => {
        tableHTML += `<tr>
                                <td>${row.Service_id}</td> 
                                <td>${row.service}</td> 
                                <td>${row.username}</td> 
                                <td>${row.age}</td>
                                <td>${row.Location}</td>
                                <td>${row.Phone_number}</td>
                                <td>${row.email}</td> 
                                <td>${row.Date}</td> 
                                
                              </tr>`;
      });
      table.innerHTML = tableHTML;
    })
    .catch((error) => console.error("Error fetching schedule data:", error));
}

// Call the function to fetch data when the page loads

// Function to fetch and display schedule data

function fetchScheduleData() {
  fetch("/Backend/FetchRequest.php")
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("user-request");
      let tableHTML =
        "<tr><th>Reqid</th><th>Name</th><th>Date</th><th>Phone_number</th><th>Request</th></tr>"; // Adjust columns based on your data
      data.forEach((row) => {
        tableHTML += `<tr>
                                <td>${row.Reqid}</td> 
                                <td>${row.username}</td> 
                                <td>${row.Date}</td>
                                <td>${row.Phone_number}</td>
                                <td>${row.request}</td> 
                                
                              </tr>`;
      });
      table.innerHTML = tableHTML;
    })
    .catch((error) => console.error("Error fetching schedule data:", error));
}
// Function to fetch and display schedule data



function fetchRegisterData() {
  fetch("/Backend/FetchRegisteredUsers.php")
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("user-register");
      let tableHTML =
        "<tr><th>Regid</th><th>Name</th><th>Age</th><th>Location</th><th>Email</th><th>Phone number</th></tr>"; // Adjust columns based on your data
      data.forEach((row) => {
        tableHTML += `<tr>
                                <td>${row.Regid}</td> 
                                <td>${row.username}</td> 
                               <td>${row.age}</td> 
                               <td>${row.user_Location}</td> 
                                <td>${row.logEmail}</td>
                                 <td>${row.Phone_number}</td>
                                
                              </tr>`;
      });
      table.innerHTML = tableHTML;
    })
    .catch((error) => console.error("Error fetching schedule data:", error));
}

// Call the function to fetch data when the page loads

// Call the function to fetch data when the page loads
Promise.all([fetchServiceData(),fetchScheduleData(),fetchRegisterData()]);