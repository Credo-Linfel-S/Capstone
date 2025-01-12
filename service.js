
 fetch("/Backend/service.php", {
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
  