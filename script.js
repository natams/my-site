// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Page Slide
const pages = ["home", "projects", "experience", "contact", "playpen"]; // Define page order
const links = document.querySelectorAll('.nav-bar a');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        const currentPage = window.location.pathname.split("/").pop().replace(".html", "") || "home";
        const targetPage = new URL(link.href).pathname.split("/").pop().replace(".html", "") || "home";

        if (currentPage === targetPage) return; // Do nothing if clicking the same page

        const currentIndex = pages.indexOf(currentPage);
        const targetIndex = pages.indexOf(targetPage);

        if (targetIndex > currentIndex) {
            document.body.classList.add('slide-left'); // Forward navigation
            document.body.classList.remove('slide-right');
        } else {
            document.body.classList.add('slide-right'); // Backward navigation
            document.body.classList.remove('slide-left');
        }

        setTimeout(() => {
            window.location = link.href;
        }, 500); // Match animation duration
    });
});
document.querySelector(".slide-btn a").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent instant navigation

    const targetPage = this.getAttribute("href"); // Get target page

    document.body.classList.add("slide-left"); // Add slide effect

    setTimeout(() => {
        window.location.href = targetPage; // Navigate after animation
    }, 500); // Match this duration with your CSS animation time
});

// Form
function handleSubmit(event) {
    event.preventDefault();  // Prevent form from submitting and redirecting

    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    // Hide the form and show the "Thank You" message
    form.style.display = 'none';
    thankYouMessage.style.display = 'block';

    // Submit the form data to Formspree
    const formData = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                // Optionally, you can do something here after a successful submission
            } else {
                // Handle errors here if necessary
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            alert("An error occurred: " + error);
        });
}







