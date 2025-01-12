//document.addEventListener("DOMContentLoaded", function() {
   // var form = document.getElementById('contact-form');
  //  form.addEventListener('submit', function(event) {
  //      event.preventDefault();
  //      sendEmail(); 
 ///   });
//});

//function sendEmail() {
   // var name = document.getElementById('name').value;
    ///var email = document.getElementById('email').value;
   // var message = document.getElementById('message').value;
  ///  var subject = "Barangay Looc System"; 

   // var mailtoLink = "mailto:galamiton.vincejeus@gmail.com" +
   //     "?subject=" + encodeURIComponent(subject) +
   //     "&body=" + encodeURIComponent("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

  //  window.location.href = mailtoLink;
//}

 fetch("/Backend/Customer_service.php", {
   method: "POST",
   headers: {
     "Content-Type": "application/json",
   },
   body: JSON.stringify(request),
 })
   .then((response) => response.json())
   .then((data) => {
     if (data.success) {
       alert("Request submitted successfully!");
       form.reset();
     } else {
       alert("Failed to submit request. Try again.");
     }
   })
   .catch((error) => {
     console.error("Error:", error);
     alert("An error occurred while submitting the request.");
   });
  