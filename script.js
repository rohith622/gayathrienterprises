document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerHeight = document.querySelector('.main-header').offsetHeight;

            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });

    // Handle form submissions
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your feedback! This data will be submitted to the server.');
        // Here, you would send the form data to your backend API.
    });

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your order has been booked. We will confirm your order shortly!');
        // Here, you would send the booking details to your backend for processing.
    });

    // --- Backend-dependent features (Notes for implementation) ---

    // 1. Online Product Booking
    // This requires a backend system to:
    // - Authenticate the user.
    // - Store booking requests in a database.
    // - Update product inventory.

    // 2. My Orders Tab
    // - The `My Orders` section will fetch a user's order history from the database.
    // - The data will be displayed dynamically using JavaScript to create order cards.

    // 3. Khata Book (Loan Management) & SMS Alerts
    // - This is a significant backend feature. It requires a database to:
    //   - Store customer loan records (date, amount, due date).
    //   - Track payments.
    // - The SMS alert system needs to be integrated with an SMS gateway API (e.g., Twilio, Msg91).
    // - A cron job or scheduled task on the server would trigger alerts for overdue payments.
});