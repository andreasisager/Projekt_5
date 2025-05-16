document.addEventListener("DOMContentLoaded", function () {
    $("").load("navbar.html");
});
document.addEventListener("DOMContentLoaded", function () {
    $("#footer-inject").load("footer.html");
});

document.addEventListener("DOMContentLoaded", function () {
    $("#productcard").load("productcard.html");
});
    

const nav = document.getElementById('home-navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('transition');
    }
    else {
        nav.classList.remove('transition');
    }
});


