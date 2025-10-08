document.addEventListener("DOMContentLoaded", function () {
    const adBanner = document.getElementById("advertisement");
    const offerPopup = document.getElementById("offerPopup");

    adBanner.addEventListener("click", function () {
        offerPopup.classList.toggle("show");
    });
});
// JavaScript for Gayathri Enterprises

// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function() {
    const advertisement = document.getElementById('advertisement');
    const offerPopup = document.getElementById('offerPopup');

    // Toggle offer popup on advertisement click
    advertisement.addEventListener('click', function() {
        offerPopup.classList.toggle('show');
    });
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Example credentials
    const validUser = "9000921775";
    const validPass = "12345";

    if (username === validUser && password === validPass) {
        alert("Welcome to Gayathri Enterprises ");
        window.location.href = "index.html"; // redirect to home page
    } else {
        error.textContent = "Invalid username or password!";
    }
});
