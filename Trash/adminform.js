window.onload = function() {
    var users = JSON.parse(localStorage.getItem('users'));
    var requests = JSON.parse(localStorage.getItem('requests'));
    var serviceRequests = JSON.parse(localStorage.getItem('serviceRequests')); 

    if (users) {
        var userTableBody = document.getElementById('user-register').getElementsByTagName('tbody')[0];
        
        users.forEach(function(user, index) {
            var row = userTableBody.insertRow();
            var regIDCell = row.insertCell(0); 
            var nameCell = row.insertCell(1);
            var ageCell = row.insertCell(2);
            var locationCell = row.insertCell(3);
            var emailCell = row.insertCell(4);
            var phoneNumberCell = row.insertCell(5);
            var passwordCell = row.insertCell(6);
            
            regIDCell.innerText = index + 1; 
            nameCell.innerText = user.name;
            ageCell.innerText = user.age;
            locationCell.innerText = user.location;
            emailCell.innerText = user.email;
            phoneNumberCell.innerText = user.phoneNumber;
            passwordCell.innerText = user.password;
        });
    }

    if (requests) {
        var requestTableBody = document.getElementById('user-request').getElementsByTagName('tbody')[0];
        
        requests.forEach(function(request, index) {
            var row = requestTableBody.insertRow();
            var reqIDCell = row.insertCell(0); 
            var nameCell = row.insertCell(1);
            var datetimeCell = row.insertCell(2);
            var numberCell = row.insertCell(3);
            var scrollCell = row.insertCell(4);
            
            reqIDCell.innerText = index + 1; 
            nameCell.innerText = request.name;
            datetimeCell.innerText = request.datetime;
            numberCell.innerText = request.number;
            scrollCell.innerText = request.scroll;
        });
    }

    if (serviceRequests) {
        var serviceTableBody = document.getElementById('user-service').getElementsByTagName('tbody')[0];
        
        serviceRequests.forEach(function(serviceRequest, index) {
            var row = serviceTableBody.insertRow();
            var serviceIDCell = row.insertCell(0); 
            var serviceCell = row.insertCell(1);
            var nameCell = row.insertCell(2);
            var ageCell = row.insertCell(3);
            var locationCell = row.insertCell(4);
            var phoneNumberCell = row.insertCell(5);
            var emailCell = row.insertCell(6);
            
            serviceIDCell.innerText = index + 1; 
            serviceCell.innerText = serviceRequest.service;
            nameCell.innerText = serviceRequest.name;
            ageCell.innerText = serviceRequest.age;
            locationCell.innerText = serviceRequest.location;
            phoneNumberCell.innerText = serviceRequest.number;
            emailCell.innerText = serviceRequest.email;
        });
    }
    
    var logoutButton = document.getElementById('logoutBtn');
    logoutButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
};
 //Array to hold event data
      const events = [];

      //Function to render events without images
      function renderBasicEvents() {
         const eventsList = document.getElementById('events-list');
       eventsList.innerHTML = ''; // Clear existing content

       if (events.length === 0) {
         const noEventsMessage = document.createElement('p');
          noEventsMessage.textContent = 'There are no events yet.';
         eventsList.appendChild(noEventsMessage);
       } else {
          events.forEach((event, index) => {
            const eventContainer = document.createElement('div');
              eventContainer.classList.add('event');
      
               eventContainer.innerHTML = `
                   <h2>${event.title}</h2>
                  <p><strong>Date:</strong> ${event.date}</p>
                             <p>${event.description}</p>
                  <button onclick="deleteEvent(${index})">Delete</button>
               `;

              eventsList.appendChild(eventContainer);
        });
       }
       }

      // Function to render events with images
        function renderEventsWithImages() {
          const eventList = document.getElementById('event-list');
          eventList.innerHTML = ''; // Clear existing list

           events.forEach((event, index) => {
                    const eventItem = document.createElement('div');
         eventItem.classList.add('event-item');
                eventItem.innerHTML = `
               <h3>${event.title}</h3>
             <p>${event.date}</p>
                  <p>${event.description}</p>
         ${event.imageUrl ? `<img src="${event.imageUrl}" alt="Event Image">` : ''}
           <button onclick="deleteEvent(${index})">Delete</button>
       `;
        eventList.appendChild(eventItem);
        });  
    }

      // Function to handle event creation
       document.getElementById('create-event-form').addEventListener('submit', function (e) {
          e.preventDefault();

         const title = document.getElementById('event-title').value;
        const date = document.getElementById('event-date').value;
        const description = document.getElementById('event-description').value;

        const imageInput = document.getElementById('event-image');
         const imageFile = imageInput.files[0];
       let imageUrl = '';

        if (imageFile) {
          imageUrl = URL.createObjectURL(imageFile);
        }
        events.push({ title, date, description, imageUrl });

        e.target.reset();
        renderEventsWithImages(); // Update display to include images
       });

      // Function to delete an event