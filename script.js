// Wait until page loads
document.addEventListener("DOMContentLoaded", function() {
    
    // ---- LOGIN FUNCTIONALITY ----
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("error");

    if(loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent form from reloading page

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            // Simple login check
            if(username === "9000921775" && password === "123456") {
                sessionStorage.setItem("isLoggedIn", "true"); // Save login flag
                window.location.href = "index.html"; // Redirect to main page
            } else {
                errorMsg.textContent = "❌ Invalid username or password!";
            }
        });
    }

    // ---- LOGOUT FUNCTIONALITY ----
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn) {
        logoutBtn.addEventListener("click", function() {
            sessionStorage.removeItem("isLoggedIn"); // Clear login flag
            alert("✅ You have successfully logged out!");
            window.location.href = "login.html"; // Redirect to login
        });
    }

    // ---- ADVERTISEMENT POPUP ----
    const advertisement = document.getElementById("advertisement");
    const offerPopup = document.getElementById("offerPopup");

    if(advertisement && offerPopup) {
        advertisement.addEventListener("click", function() {
            offerPopup.classList.toggle("show");
        });
    }
});
  
       