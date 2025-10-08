document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    if (!sessionStorage.getItem("isLoggedIn") && path.includes("index.html")) {
        window.location.href = "login.html";
    }
    if (sessionStorage.getItem("isLoggedIn") && path.includes("login.html")) {
        window.location.href = "index.html";
    }
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("error");

    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();
            if (username === "9000921775" && password === "123456") {
                sessionStorage.setItem("isLoggedIn", "true");
                window.location.href = "index.html";
            } else {
                errorMsg.textContent = "❌ Invalid username or password!";
            }
        });
    }
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
