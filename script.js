// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Page Slide
const pages = ["home", "projects", "experience", "contact", "playpen"];
const links = document.querySelectorAll('.nav-bar a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "home";
        const targetPage = new URL(link.href).pathname.split("/").pop().replace(".html", "") || "home";

        if (currentPage === targetPage) return;

        const currentIndex = pages.indexOf(currentPage);
        const targetIndex = pages.indexOf(targetPage);

        document.body.classList.remove('slide-left', 'slide-right'); // Ensure old classes are removed

        if (targetIndex > currentIndex) {
            document.body.classList.add('slide-left');
        } else {
            document.body.classList.add('slide-right');
        }

        console.log("Navigating to:", link.href); // Debugging

        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    });
});

// Handle other slide button links correctly
document.querySelectorAll(".slide-btn a").forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        const targetPage = this.getAttribute("href");

        document.body.classList.remove("slide-left", "slide-right");
        document.body.classList.add("slide-left");

        console.log("Navigating to:", targetPage); // Debugging

        setTimeout(() => {
            window.location.href = targetPage;
        }, 500);
    });
});



// Loader

// window.addEventListener("load", function () {
//     document.querySelector(".loader-container").classList.add("hidden");
//     setTimeout(() => {
//       document.querySelector(".main-loader").classList.add("visible");
//     }, 500); 
//   });

//   Slider btn in Projects Page
document.getElementById("togBtn").addEventListener("change", function() {
    var isChecked = this.checked;
    
    // Show/hide desktop and mobile content based on toggle state
    if (isChecked) {
      document.querySelector(".desktop").style.display = "none";
      document.querySelector(".mobile").style.display = "block";
    } else {
      document.querySelector(".desktop").style.display = "block";
      document.querySelector(".mobile").style.display = "none";
    }
  });
  









