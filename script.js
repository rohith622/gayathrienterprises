document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    if (!sessionStorage.getItem("isLoggedIn") && path.includes("index.html")) {
        window.location.href = "login.html";
    }
    if (sessionStorage.getItem("isLoggedIn") && path.includes("login.html")) {
        window.location.href = "index.html";
    }
    const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const usernameField = document.getElementById("username");
        const passwordField = document.getElementById("password");
        const username = usernameField.value.trim();
        const password = passwordField.value.trim();
        const errorMsg = document.getElementById("errorMsg");

        // Reset previous styles and messages
        errorMsg.textContent = "";
        usernameField.style.border = "1px solid #ccc";
        passwordField.style.border = "1px solid #ccc";

        // Empty field validation
        if (username === "" && password === "") {
            errorMsg.textContent = "⚠️ Please enter username and password!";
            usernameField.style.border = "2px solid red";
            passwordField.style.border = "2px solid red";
            return;
        } else if (username === "") {
            errorMsg.textContent = "⚠️ Please enter your username!";
            usernameField.style.border = "2px solid red";
            return;
        } else if (password === "") {
            errorMsg.textContent = "⚠️ Please enter your password!";
            passwordField.style.border = "2px solid red";
            return;
        }   

        // Check correct credentials
        if (username === "Rohith2" && password === "FirstPassword") {
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "index.html";
        } else {
    errorMsg.textContent = "❌ Invalid username or password!";
    usernameField.style.border = "2px solid red";
    passwordField.style.border = "2px solid red";
}
        });

    // Live validation — remove red border when user starts typing
    const inputs = document.querySelectorAll("#username, #password");
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            input.style.border = "1px solid #ccc"; // back to normal border
            document.getElementById("errorMsg").textContent = "";
        });
    });
}

// Logout functionality
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        sessionStorage.removeItem("isLoggedIn");
        alert("✅ You have successfully logged out!");
        window.location.href = "login.html";
    });
}


    const advertisement = document.getElementById("advertisement");
    const offerPopup = document.getElementById("offerPopup");

    if (advertisement && offerPopup) {
        advertisement.addEventListener("click", function() {
            offerPopup.classList.toggle("show");
        });
    }
});
