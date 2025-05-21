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