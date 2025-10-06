document.addEventListener("DOMContentLoaded", function () {
    const adBanner = document.getElementById("advertisement");
    const offerPopup = document.getElementById("offerPopup");

    adBanner.addEventListener("click", function () {
        offerPopup.classList.toggle("show");
    });
});

