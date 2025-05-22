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



document.getElementById("burgermenu-icon").addEventListener("click", openBurger)
let burger = document.getElementById("burgermenu-dropdown");

function openBurger() {
  if (burger.style.display === "block") {
    burger.style.display = "none";
  } 

  else {
    burger.style.display = "block";
  }
}

document.getElementById("gavekurv-arrow").addEventListener("click", openGavekurv)
let gavekurve = document.getElementById("burger-gavekurve");

function openGavekurv() {
  if (gavekurve.style.display === "flex") {
    gavekurve.style.display = "none";
  } 

  else {
    gavekurve.style.display = "flex";
  }
}
