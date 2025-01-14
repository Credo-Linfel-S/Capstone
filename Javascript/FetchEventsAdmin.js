document.addEventListener("DOMContentLoaded", function () {
  // Fetch the events from the backend
  fetch("/Backend/barangay3_events.php") // Adjust the URL to your PHP file
    .then((response) => response.json())
    .then((events) => {
      renderEvents(events);
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
    });

  // Function to render events
  function renderEvents(events) {
    const eventsList = document.getElementById("events-list");
    eventsList.innerHTML = ""; // Clear existing content

    if (events.length === 0 || events.message) {
      const noEventsMessage = document.createElement("p");
      noEventsMessage.textContent = "There are no events yet.";
      eventsList.appendChild(noEventsMessage);
    } else {
      events.forEach((event) => {
        const eventContainer = document.createElement("div");
        eventContainer.classList.add("event");
        eventContainer.innerHTML = `
                    <h3>${event.eventname}</h3>
                    <p><strong>Date:</strong> ${event.Date}</p>
                    <p>${event.eventmessage}</p>
                 <img src="Backend/${event.eventimage}" alt="Event Image" />`;
        eventsList.appendChild(eventContainer);
      });
    }
  }
});
   var logoutButton = document.getElementById("logoutBtn");
   logoutButton.addEventListener("click", function () {
     window.location.href = "index.html";
   });