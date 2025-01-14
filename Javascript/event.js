function fetchEvents() {
  fetch("/Backend/barangay3_events.php")
    .then((response) => response.json())
    .then((data) => {
      let container = document.getElementById("events-container");
      if (data.message) {
        container.innerHTML = `<p>${data.message}</p>`;
      } else {
        let eventsHTML = "";
        data.forEach((event) => {
          eventsHTML += `
                            <div class="row">
                                <div class="col-txt">
                                    <h1>${event.eventname}</h1>
                                    <p class="context">${event.eventmessage}</p>
                                </div>
                                <div class="col-img">
                                    <img src="Backend/${event.eventimage}" alt="From database">
                                </div>
                            </div><hr>`;
        });
        container.innerHTML = eventsHTML;
      }
    })
    .catch((error) => console.error("Error fetching events:", error));
}

// Call the fetchEvents function when the page loads
window.onload = fetchEvents;
