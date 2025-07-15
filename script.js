// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Page Slide
const pages = ["home", "projects", "experience", "contact", "playpen"];
const links = document.querySelectorAll('.nav-bar a');

function navigateWithAnimation(targetHref, animationClass) {
    document.body.classList.remove("slide-left", "slide-right");
    document.body.classList.add(animationClass);

    setTimeout(() => {
        window.location.href = targetHref;
    }, 500);
}

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "home";
        const targetPage = new URL(link.href).pathname.split("/").pop().replace(".html", "") || "home";

        if (currentPage === targetPage) return;

        const currentIndex = pages.indexOf(currentPage);
        const targetIndex = pages.indexOf(targetPage);

        const animationClass = targetIndex > currentIndex ? "slide-left" : "slide-right";

        // Push new state into history
        history.pushState({ page: targetPage }, "", link.href);

        navigateWithAnimation(link.href, animationClass);
    });
});

// Slide button links
document.querySelectorAll(".slide-btn a").forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        const targetHref = button.getAttribute("href");

        // Push new state into history
        history.pushState({ page: targetHref }, "", targetHref);

        navigateWithAnimation(targetHref, "slide-left");
    });
});

// Handle browser Back/Forward button
window.addEventListener("popstate", (event) => {
    const targetHref = document.location.href;
    const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "home";
    const targetPage = targetHref.split("/").pop().replace(".html", "") || "home";

    const currentIndex = pages.indexOf(currentPage);
    const targetIndex = pages.indexOf(targetPage);
    const animationClass = targetIndex > currentIndex ? "slide-left" : "slide-right";

    // Animate before navigating
    document.body.classList.remove("slide-left", "slide-right");
    document.body.classList.add(animationClass);

    setTimeout(() => {
        window.location.href = targetHref;
    }, 500);
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
  









