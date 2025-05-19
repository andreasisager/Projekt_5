/*---- taget fra en youtube turtorial ----*/
const kurv__ikon = document.querySelector("#kurv__ikon");
const kurv = document.querySelector(".kurv");
const luk__kurv = document.querySelector("#luk__kurv");
kurv__ikon.addEventListener("click", () => kurv.classList.add("aktiv"));
luk__kurv.addEventListener("click", () => kurv.classList.remove("aktiv"));

const tilfoej__kurv = document.querySelectorAll(".tilfoej__kurv");
tilfoej__kurv.forEach(knap => {
    knap.addEventListener("click", event => {
        const produkt__kort = event.target.closest(".produkt__kort");
        tilfoej__til__kurv(produkt__kort);
    });
});

const kurv__indhold = document.querySelector(".kurv__indhold");
const tilfoej__til__kurv = produkt__kort => {
    const produktbillede__soegning = produkt__kort.querySelector("img").src;
    const produkt__navn = produkt__kort.querySelector(".produkt__navn").textContent;
    const kurv__pris = produkt__kort.querySelector(".produkt__pris").textContent;

    const kurv__produkt__titel = kurv__indhold.querySelectorAll(".kurv__produkt__titel");
    for (let indhold of kurv__produkt__titel) {
        if (indhold.textContent === produkt__navn) {
            alert("Dette produkt er allerede tilføjet til kurven");
            return;
        }
    }
/*---- indtil her ----*/
    const kurv__produkt = document.createElement("div");
    kurv__produkt.classList.add("kurv__produkt");
    kurv__produkt.innerHTML = `
        <img src="${produktbillede__soegning}" class="kurv__produktbillede" alt="">
        <div class="kurv__produktoplysninger">
            <h2 class="kurv__produkt__titel">${produkt__navn}</h2>
            <span class="kurv__prisen">${kurv__pris}</span>
            <div class="kurv__taeller">
                <button id="minus">-</button>
                <span class="kurv__taeller__tal">1</span>
                <button id="plus">+</button>
            </div>
        </div>
        <i class="ri-delete-bin-line fjern__produkt"></i>
    `;

    kurv__indhold.appendChild(kurv__produkt);

    kurv__produkt.querySelector(".fjern__produkt").addEventListener("click", () => {
        kurv__produkt.remove();
        
        opdater__kurv__indhold(-1);

        opdater__pris__i__alt();
    });

    kurv__produkt.querySelector(".kurv__taeller").addEventListener("click", event => {
        const kurv__taeller__tal = kurv__produkt.querySelector(".kurv__taeller__tal");
        const minus = kurv__produkt.querySelector("#minus");
        let antal = kurv__taeller__tal.textContent;

        if (event.target.id === "minus" && antal > 1){
            antal--;
            if (antal === 1 ){
                minus.style.color="#999";
            }
        } else if (event.target.id === "plus") {
            antal++;
            minus.style.color="#333";
        }

        kurv__taeller__tal.textContent = antal;

        opdater__pris__i__alt();
    });

    opdater__kurv__indhold(1);

    opdater__pris__i__alt();
};

const opdater__pris__i__alt = () => {
    const i__alt__total = document.querySelector(".i__alt__total");
    const kurv__produkter = kurv__indhold.querySelectorAll(".kurv__produkt");
    let i__alt = 0;
    kurv__produkter.forEach(kurv__indhold => {
        const kurv__pris = kurv__indhold.querySelector(".kurv__prisen").textContent;
        const kurv__taeller__tal = kurv__indhold.querySelector(".kurv__taeller__tal");
        const kurv__pris__valuta = kurv__pris.replace("$", "");
        const antal = kurv__taeller__tal.textContent;
        i__alt += kurv__pris__valuta * antal;
    });
    i__alt__total.textContent = `$${i__alt}`;
};

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

const koeb__nu__knap = document.querySelector(".naeste__knap")
koeb__nu__knap.addEventListener("click", () => {
    const kurv__produkter = kurv__indhold.querySelectorAll(".kurv__produkt");
    if (kurv__produkter.length === 0) {
        alert("Din kurv er tom. Tilføj produkter før du køber.");
        return;
    }

    kurv__produkter.forEach(kurv__produkt => kurv__produkt.remove());

    kurv__produkt__taeller = 0;
    opdater__kurv__indhold(0);

    opdater__pris__i__alt();

    alert("Tak for dit køb");
});
