document.addEventListener("DOMContentLoaded", function () {
    const adBanner = document.getElementById("advertisement");
    const offerPopup = document.getElementById("offerPopup");

    adBanner.addEventListener("click", function () {
        offerPopup.classList.toggle("show");
    });
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form reload

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    // Example credentials
    const validUser = "admin";
    const validPass = "12345";

    if (username === validUser && password === validPass) {
        alert("Welcome to Gayathri Enterprises ");
        window.location.href = "index.html"; // redirect to home page
    } else {
        error.textContent = "Invalid username or password!";
    }
});
