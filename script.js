document.addEventListener('DOMContentLoaded', () => {
    // --- UPDATED Smooth scrolling for anchor links ---
    // This now only applies smooth scrolling to *internal* page anchors.
    // Cross-page anchors (e.g., about.html#services-details) are handled by the browser directly.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Only prevent default and smooth scroll if it's an internal anchor
            // on the current page.
            // If the href is just "#", it means it's an empty anchor, let it be default.
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Adjust scroll position if you have a fixed header
                    const headerOffset = document.querySelector('header').offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerOffset - 20; // -20 for a little extra padding

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Basic form validation (client-side)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // event.preventDefault(); // Keep commented for now if you want alert to show

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields (Name, Email, Message).');
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            //alert('Form submitted successfully (Note: This is a front-end demo. No data is sent.)');

            // Uncomment the line below if you want to prevent actual form submission
            // event.preventDefault();
        });
    }

    // --- NEW JAVASCRIPT FOR PROJECT FILTERING (for work.html) ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    // Only run this code if we are on a page that has filter buttons and project items
    if (filterButtons.length > 0 && projectItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to the clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter'); // 'all', 'residential', etc.

                projectItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.classList.remove('hidden'); // Show item
                    } else {
                        item.classList.add('hidden'); // Hide item
                    }
                });
            });
        });
    }
    // --- END NEW JAVASCRIPT --- correct one 

});