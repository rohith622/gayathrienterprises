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

$(document).ready(function() {
    
    $('#menu a').click(function(e) {
        e.preventDefault(); 

        let page = $(this).attr('href'); // e.g., "#about", "#fertlizers"

       
        let pageMap = {
            "#about": "about.html",
            "#fertlizers": "fertlizers.html",
            "#pesticides": "pest.html",
            "#seeds": "seed.html"
        };

        if (pageMap[page]) {
           
            $('#content').load(pageMap[page], function() {
                
                $('html, body').animate({
                    scrollTop: $('#content').offset().top
                }, 600);
            });
        }
    });

    
    $('#content').load("about.html");
});


// Array of products
const products = [
    { name: "Urea Fertilizer", desc: "Organised By Government.", image: "images/urea2.png" },
    { name: "DAP Fertilizer", desc: "Organised By Government.", image: "images/DAP.png" },
    { name: "MOP Fertilizer", desc: "Organised By Government.", image: "images/mop.png" },
    { name: "13:13:13", desc: "Organised By Government.", image: "images/pesticide.png" },
    { name: "Amistar", desc: "Organised By Government.", image: "images/Amistar.png" },
    { name: "Quantis", desc: "Organised By Government.", image: "images/Quantis.png" },
    { name: "C.P 3.3.3", desc: "Organised By Government.", image: "images/maize seeds.png" },
    { name: "Glycil", desc: "Organised By Government.", image: "images/image.png" },
    { name: "calypso", desc: "Organised By Government.", image: "images/image copy.png" },
    { name: "Glypho", desc: "Organised By Government.", image: "images/image copy 2.png" },
    { name: "Glytop", desc: "Organised By Government.", image: "images/image copy 3.png" },
    { name: "Ampligo", desc: "Organised By Government.", image: "images/image copy 4.png" },
    { name: "Decide", desc: "Organised By Government.", image: "images/DI.png" },
    { name: "Actara", desc: "Organised By Government.", image: "images/image copy 5.png" },
    { name: "Fenny", desc: "Organised By Government.", image: "images/image copy 6.png" },
    { name: "AADAT", desc: "Organised By Government.", image: "images/image33.png" },
    { name: "katar-505", desc: "Organised By Government.", image: "images/image copy 8.png" },
    { name: "Solamon", desc: "Organised By Government.", image: "images/solomon.png" },
    { name: "AWARD", desc: "Organised By Government.", image: "images/image copy 4.png" },
    { name: "TROT", desc: "Organised By Government.", image: "images/image copy 7.png" },
    { name: "Tag Turbo", desc: "Organised By Government.", image: "images/image copy 9.png" },
    { name: "Detect", desc: "Organised By Government.", image: "images/image.png" },
    { name: "Googly", desc: "Organised By Government.", image: "images/image copy.png" },
    { name: "Armour", desc: "Organised By Government.", image: "images/image copy 2.png" }
];


const productsContainer = document.getElementById('products');


productsContainer.innerHTML = '';


products.forEach(product => {
    const li = document.createElement('li');
    li.className = 'product-card';
    li.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
    `;
    productsContainer.appendChild(li);
});