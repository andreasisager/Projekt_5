/*Inspireret af...*/
/*Tilføjer baggrundsfarve til navbaren når man scroller på forsiden*/
const nav = document.getElementById('home-navbar');
const burger = document.getElementById("burgermenu-dropdown");

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        nav.classList.add('transition');
    }

    else if (burger.style.display === "block" && window.scrollY <= 50) {
        nav.classList.add('farveskift');
    }

    else {
        nav.classList.remove('transition');
    }
});


/*Åbner burgermenuen når man klikker på burgermenu-ikonet og tilføjer baggrundsfarve*/
document.getElementById("burgermenu-icon").addEventListener("click", openBurger)
const burgerMenu = document.getElementById("burgermenu-icon");

function openBurger() {
  if (burger.style.display === "block") {
    burger.style.display = "none";
    /*burgerMenu.classList.remove('burgermenu-item-aktiv');*/
  } 

  else {
    burger.style.display = "block";
    /*burgerMenu.classList.add('burgermenu-item-aktiv');*/
  }
}

/*Når man klikker uden for burgermenuen og burgermenu-ikonet, så lukker burgermenuen
window.addEventListener('click', function(klik) {
  if (!burger.contains(klik.target) && !burgerMenu.contains(klik.target) && window.scrollY <= 50)
      burger.style.display = "none";
      nav.classList.add('farveskift');
  
});*/


/*Sørger for at navbaren får farve når burgermenuen åbnes på forsiden afhængigt af, om der er blevet scrollet*/
document.getElementById("burgermenu-icon").addEventListener("click", skiftFarve)

function skiftFarve() {
  if (burger.style.display === "block" && window.scrollY <= 50) {
      nav.classList.add('farveskift');
  }

  else if (burger.style.display === "none" && window.scrollY <= 50) {
      nav.classList.remove('farveskift');
      nav.classList.remove('transition')
  }

  else {
      nav.classList.remove('farveskift');
  }
}


/*Åbner gavekurv-dropdown når man klikker på Gavekurve og tilføjer baggrundsfarve*/
document.getElementById("burgermenu-item-gavekurve").addEventListener("click", openGavekurv)
const gavekurve = document.getElementById("burger-gavekurve");
const gavekurveMenu = document.getElementById("burgermenu-item-gavekurve");

function openGavekurv() {
  if (gavekurve.style.display === "flex") {
    gavekurve.style.display = "none";
    gavekurveMenu.classList.remove('burgermenu-item-aktiv');
  } 

  else {
    gavekurve.style.display = "flex";
    gavekurveMenu.classList.add('burgermenu-item-aktiv');
  }
}


/*Åbner kunsthåndværk og interiør-dropdown når man klikker på Kunsthåndværk og Interiør og tilføjer baggrundsfarve*/
document.getElementById("burgermenu-item-kunst").addEventListener("click", openKunst)
const kunst = document.getElementById("burger-kunst");
const kunstMenu = document.getElementById("burgermenu-item-kunst");

function openKunst() {
  if (kunst.style.display === "flex") {
    kunst.style.display = "none";
    kunstMenu.classList.remove('burgermenu-item-aktiv');
  } 

  else {
    kunst.style.display = "flex";
    kunstMenu.classList.add('burgermenu-item-aktiv');
  }
}


/*Åbner delikatesser-dropdown når man klikker på Delikatesser og tilføjer baggrundsfarve*/
document.getElementById("burgermenu-item-deli").addEventListener("click", openDeli)
const deli = document.getElementById("burger-deli");
const deliMenu = document.getElementById("burgermenu-item-deli");

function openDeli() {
  if (deli.style.display === "flex") {
    deli.style.display = "none";
    deliMenu.classList.remove('burgermenu-item-aktiv');
  } 

  else {
    deli.style.display = "flex";
    deliMenu.classList.add('burgermenu-item-aktiv');
  }
}



const forsideGavekurve = [
  {navn: "Jubilæumsgavekurv", link: "jubilaeumsgavekurven_webshop.html", billede: "images/jubilaeumsgavekurv.webp", pris: "399 kr."},
  {navn: "Fødselsdagsgavekurv", link: "foedselsdagsgavekurven_webshop.html", billede: "images/foedselsdagsgavekurv.webp", pris: "299 kr."},
  {navn: "Firmagavekurven", link: "firmagavekurven_webshop.html", billede: "images/firmagavekurv.webp", pris: "249 kr."}
]
let forsideEksempler = "";

function udskrivGavekurve() {
  for (let i = 0; i < forsideGavekurve.length; i++) {
    forsideEksempler += '<a href="' + link + '" class="gavekurv-sektion"><img class="gavekurv-billede" src="' + billede + '" alt="' + navn + '"><div class="produkt-information"><p class="gavekurv-navn">' + navn + '</p><p class="gavekurv-pris">' + pris +'</p></div></a>';
  }

  document.getElementById("forside-gavekurve").innerHTML = forsideEksempler;

}


udskrivGavekurve();






