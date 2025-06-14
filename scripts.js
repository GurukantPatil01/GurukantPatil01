// Confirm script is loaded
console.log("scripts.js loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor click behavior

            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust offset if you have a fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example: Alert when a project link is clicked (can be removed or modified)
    const projectLinks = document.querySelectorAll('.project a');
    projectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // If the link is a placeholder, show an alert.
            // Otherwise, allow default behavior (opening the link).
            if (this.getAttribute('href') === '#') {
                e.preventDefault(); // Prevent navigating to "#"
                alert('Project link clicked! Replace "#" with your actual project URL.');
            }
        });
    });

});
