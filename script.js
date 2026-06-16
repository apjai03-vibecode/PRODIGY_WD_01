// Requirement 3 & 7: Scroll Effect Detector
window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");

    // If page is scrolled more than 50 pixels down
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});