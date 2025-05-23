
/*Åbner burgermenuen når man klikker på burgermenu-ikonet*/
document.getElementById("burgermenu-icon").addEventListener("click", openBurger)
const burger = document.getElementById("burgermenu-dropdown");

function openBurger() {
  if (burger.style.display === "block") {
    burger.style.display = "none";
  } 

  else {
    burger.style.display = "block";
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