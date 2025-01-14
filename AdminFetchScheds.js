// Function to fetch and display schedule data
function fetchScheduleData() {
  fetch("/Backend/schedule.php")
    .then((response) => response.json())
    .then((data) => {
      let table = document.getElementById("user-request");
      let tableHTML =
        "<tr><th>ID</th><th>Name</th><th>Date</th><th>Request</th></tr>"; // Adjust columns based on your data
      data.forEach((row) => {
        tableHTML += `<tr>
                                <td>${row.Reqid}</td> 
                                <td>${row.username}</td> 
                                <td>${row.Date}</td> 
                                <td>${row.request}</td>
                              </tr>`;
      });
      table.innerHTML = tableHTML;
    })
    .catch((error) => console.error("Error fetching schedule data:", error));
}

// Call the function to fetch data when the page loads
window.onload = fetchScheduleData;
