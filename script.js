/**
 * Script to hide the header and offer banner when the user scrolls down.
 * It adds a 'scrolled' class to the body element based on the scroll position.
 */

// Define the scroll threshold (how many pixels down before the elements hide)
const SCROLL_THRESHOLD = 100;

document.addEventListener('DOMContentLoaded', (event) => {
    const body = document.body;

    function handleScroll() {
        if (window.scrollY > SCROLL_THRESHOLD) {
            // Add 'scrolled' class
            if (!body.classList.contains('scrolled')) {
                body.classList.add('scrolled');
            }
        } else {
            // Remove 'scrolled' class
            if (body.classList.contains('scrolled')) {
                body.classList.remove('scrolled');
            }
        }
    }

    // Attach the function to the global scroll event
    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();
});