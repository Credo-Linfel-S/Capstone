document.addEventListener("DOMContentLoaded", function () {
  function openPageInNewTab(pageUrl) {
    window.open(pageUrl, "_blank");
  }

  // Event listeners for buttons
  document.getElementById("requestBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/Client/request.html");
  });

  document.getElementById("accountBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/Client/account.html");
  });

  document.getElementById("homeBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/home.html");
  });

  document.getElementById("scheduleBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/Client/schedule.html");
  });

  document.getElementById("eventBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/Client/event.html");
  });

  document.getElementById("servicesBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/Client/service.html");
  });

  document.getElementById("customerBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/Client/customerservice.html");
  });

  document.getElementById("contactBtn").addEventListener("click", function () {
    openPageInNewTab("/HTML/Client/contactservice.html");
  });

  document.getElementById("logoutBtn").addEventListener("click", function () {
    window.location.href = "/HTML/Client/index.html";
  });

  var navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });

      this.classList.add("active");
    });
  });
});
