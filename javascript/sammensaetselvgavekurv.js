/*---- taget i følgende en youtubeturtorial link: https://youtu.be/u_iQn0hvrac?si=eKq1WcjGOESwf9pJ ----*/

/*- VISNING AF KURV -*/
const kurv__ikon = document.querySelector("#kurv__ikon");
const kurv = document.querySelector(".kurv");
const luk__kurv = document.querySelector("#luk__kurv");
kurv__ikon.addEventListener("click", () => kurv.classList.add("aktiv"));
luk__kurv.addEventListener("click", () => kurv.classList.remove("aktiv"));


/*- TILFØJER PRODUKTER TIL KURVEN -*/
const tilfoej__gavekurv = document.querySelectorAll(".tilfoej__gavekurv");
tilfoej__gavekurv.forEach(knap => {
    knap.addEventListener("click", event => {
        const produkt__kort = event.target.closest(".produkt__kort");
        tilfoej__til__gavekurv(produkt__kort);
    });
});

/*- HTML ELEMENT FOR PRODUKTET I KURVEN -*/
const kurv__indhold = document.querySelector(".kurv__indhold");
const tilfoej__til__gavekurv = produkt__kort => {
    const produktbillede__soegning = produkt__kort.querySelector("img").src;
    const produkt__navn = produkt__kort.querySelector(".produkt__navn").textContent;
    const kurv__pris = produkt__kort.querySelector(".produkt__pris").textContent;
    
    const individuelle__produktnavn = kurv__indhold.querySelectorAll(".individuelle__produktnavn");
    for( let indhold of individuelle__produktnavn) {
        if(indhold.textContent === produkt__navn) {
            alert("Dette produkt er allerede tilføjet til kurven");
            return;
        }
    }

    const individuelle__produkt = document.createElement("div");
    individuelle__produkt.classList.add("individuelle__produkt");
    individuelle__produkt.innerHTML = `
        <img src="${produktbillede__soegning}" class="individuelle__produktbillede">
        <div class="individuelle__produktoplysninger">
            <h2 class="individuelle__produktnavn">${produkt__navn}</h2>
            <span class="individuelle__produktpris">${kurv__pris}</span>
            <div class="individuelle__produkttaeller">
                <button class="minus">-</button>
                <span class="individuelle__produkttaeller__tal">1</span>
                <button class="plus">+</button>
            </div>
        </div>
        <i class="ri-delete-bin-line fjern__produkt"></i>
    `;
    
    kurv__indhold.appendChild(individuelle__produkt);


    /*- FJERNER PRODUKTET FRA KURVEN OG OPDATERER KURVTÆLLER OG TOTAL SUMMEN -*/
    individuelle__produkt.querySelector(".fjern__produkt").addEventListener("click", () => {
        individuelle__produkt.remove();

        opdater__kurv__indhold(-1);

        opdater__i__alt__total();
    });

    /*- PRODUKTANTAL OPDATERING INDE I KURVEN -*/
    individuelle__produkt.querySelector(".individuelle__produkttaeller").addEventListener("click", event => {
        const individuelle__produkttaeller__tal = individuelle__produkt.querySelector(".individuelle__produkttaeller__tal");
        const minus = individuelle__produkt.querySelector(".minus");
        let antal = individuelle__produkttaeller__tal.textContent;

        if ( event.target.classList.contains("minus") && antal > 1) {
            antal--;
            if ( antal === 1) {
                minus.style.color="#000";
            }
        } else if (event.target.classList.contains("plus")) {
            antal++;
            minus.style.color="#FFF";
        }
        
        individuelle__produkttaeller__tal.textContent = antal;

        opdater__i__alt__total();
    });

    opdater__kurv__indhold(1);

    opdater__i__alt__total();
};


/*- OPDATERE PRISEN I ALT -*/
const opdater__i__alt__total = () => {
    const i__alt__total = document.querySelector(".i__alt__total");
    const individuelle__produkter = kurv__indhold.querySelectorAll(".individuelle__produkt");
    let i__alt = 0;
    individuelle__produkter.forEach( kurv__indhold => {
        const individuelle__produktpris = kurv__indhold.querySelector(".individuelle__produktpris").textContent;
        const individuelle__produkttaeller__tal = kurv__indhold.querySelector(".individuelle__produkttaeller__tal");
        const individuelle__produkktpris__beloeb = individuelle__produktpris.replace("kr", "");
        const antal = individuelle__produkttaeller__tal.textContent;
        i__alt += individuelle__produkktpris__beloeb * antal;
    });
    i__alt__total.textContent = `${i__alt} kr`;
};

/*- VISER ANTAL AF PRODUKTER TILFØJET TIL GAVEKURVEN -*/
let kurv__produkt__taeller = 0;
const opdater__kurv__indhold = change => {
    const opdater__kurv__indhold__banner = document.querySelector(".kurv__produkt__taeller");
    kurv__produkt__taeller += change;
    if (kurv__produkt__taeller > 0){
        opdater__kurv__indhold__banner.style.visibility = "visible";
        opdater__kurv__indhold__banner.textContent = kurv__produkt__taeller;
    } else {
        opdater__kurv__indhold__banner.style.visibility = "hidden";
        opdater__kurv__indhold__banner.textContent = "";
    }
};


/*- SIMULERE TILFØJELSE TIL KURV MED EN ALERT -*/
const tilfoej__til__kurv = document.querySelector(".tilfoej__kurv")
tilfoej__til__kurv.addEventListener("click", () => {
    const individuelle__produkter = kurv__indhold.querySelectorAll(".individuelle__produkt");
    if (individuelle__produkter.length === 0) {
        alert("Din Kurv er tom. Tilføj produkter før du køber.");
        return;
    }

    individuelle__produkter.forEach(individuelle__produkt => individuelle__produkt.remove());

    kurv__produkt__taeller = 0;
    opdater__kurv__indhold(0);

    opdater__i__alt__total();

    alert("Din gavekurv er nu tilføjet til kurven")
});