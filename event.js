document.addEventListener("DOMContentLoaded", () => {
  const events = []; // Replace with your dynamic event data
  const eventsContainer = document.getElementById("events-container");

  if (events.length === 0) {
    const noEventsMessage = document.createElement("p");
    noEventsMessage.textContent = "There is no event yet.";
    noEventsMessage.style.textAlign = "center";
    noEventsMessage.style.color = "#555";
    noEventsMessage.style.fontSize = "100px";
    eventsContainer.appendChild(noEventsMessage);
  } else {
    events.forEach((event) => {
      const eventRow = document.createElement("div");
      eventRow.className = "row";

      eventRow.innerHTML = `
                <div class="col-txt">
                    <h1>${event.title}</h1>
                    <p class="context">${event.description}</p>
                </div>
                <div class="col-img">
                    <img src="${event.image}" alt="${event.title}">
                </div>
            `;
      eventsContainer.appendChild(eventRow);
    });
  }
});
