document.addEventListener("DOMContentLoaded", function () {
    $("#navbar").load("navbar.html");
});
document.addEventListener("DOMContentLoaded", function () {
    $("#footer-inject").load("footer.html");
});

document.addEventListener("DOMContentLoaded", function () {
    $("#productcard").load("productcard.html");
});

document.addEventListener("DOMContentLoaded", function () {
    $("#slideshow").load("slideshow.html");
});
    
/*Inspireret af...*/
const nav = document.getElementById('home-navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('transition');
    }
    else {
        nav.classList.remove('transition');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    $("#produktwebshop").load("produktwebshop.html");
});

