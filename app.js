/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/

let nalezeneRecepty = recepty;
let seznamReceptu = document.querySelector('#recepty');
let poleRecepty = [];
let receptySlana = [];
let receptySladka = [];
let receptySpecialni = [];


function zobrazSeznamReceptu () {
console.log(nalezeneRecepty);
}


// vytvorime kontejnery pro jednotlive casti objektu a sparujeme s html
function zobrazRecepty () {
let receptElement = document.createElement('div');
receptElement.className = "recept";
seznamReceptu.appendChild(receptElement);

// Vytvorime kontejner pro obrazek
let receptObrazekElement = document.createElement('div');
receptObrazekElement.className = "recept-obrazek";
let receptObrazekSrcElement = document.createElement('img');
receptObrazekSrcElement.src = nalezeneRecepty.img;
receptObrazekSrcElement.alt = "Obrazek";
receptObrazekElement.appendChild(receptObrazekSrcElement);
receptElement.appendChild(receptObrazekElement);


// vytvorime kontejner pro info
let receptInfoElement = document.createElement ('div');
receptInfoElement.className = "recept-info";
receptElement.appendChild(receptInfoElement);


// vytvorime kontejner pro nadpis
let receptNadpisElement = document.createElement('h3');
receptNadpisElement.textContent = nalezeneRecepty.nadpis;
receptElement.appendChild(receptNadpisElement);

console.log(receptElement);

receptElement.addEventListener("click", zobrazReceptDetail(nalezeneRecepty));

return receptElement;

}

function zobrazReceptDetail (){


        
}


/* <div class="recept-detail-obrazek">
                    <img id="recept-foto" src="images/Prosciutto.png" alt="Obrazek">
            </div>
 */



 // Pokud uživatel začně hledat, zavolá se funkce hledej v pizzách
// let hledat = document.querySelector('#hledat');
// hledat.addEventListener('input', hledej);







// function receptyKategorie () {  // vytřídím si recepty podle kategorií a vložím do samostatných polí

//   for (i = 0; i < poleRecepty.length; i++) {
//     if (poleRecepty[i].kategorie === 'Snídaně') {
//       receptySnidane.push(poleRecepty[i]);
//     }

//     if (poleRecepty[i].kategorie === 'Hlavní jídlo') {
//       receptyHlavniJidlo.push(poleRecepty[i]);
//     }

//     if (poleRecepty[i].kategorie === 'Dezert') {
//       receptyDezert.push(poleRecepty[i]);
//     }
//   }
// }
   
// receptyKategorie();

// function vypisRecepty(poleRecepty) {  // funkce, která vypíše recepty z vybraného pole a přiřadí data-atributy
//   for (i = 0; i < poleRecepty.length; i++) {
//     let recept = document.createElement('div');
//     recept.className = 'recept';
//     recept.addEventListener('click', zobrazDetailReceptu);
//     recept.setAttribute("data-src", poleRecepty[i].img);
//     recept.setAttribute("data-alt", poleRecepty[i].nadpis);
//     recept.setAttribute("data-kategorie", poleRecepty[i].kategorie);
//     recept.setAttribute("data-hodnoceni", poleRecepty[i].hodnoceni);
//     recept.setAttribute("data-popis", poleRecepty[i].popis);
    
//     let receptObrazek = document.createElement('div');
//     receptObrazek.className = 'recept-obrazek';
    
//     let img = document.createElement('img');
//     img.setAttribute("data-src", poleRecepty[i].img);
//     img.setAttribute("data-alt", poleRecepty[i].nadpis);
//     img.setAttribute("data-kategorie", poleRecepty[i].kategorie);
//     img.setAttribute("data-hodnoceni", poleRecepty[i].hodnoceni);
//     img.setAttribute("data-popis", poleRecepty[i].popis);
//     img.src = poleRecepty[i].img;
//     img.alt = poleRecepty[i].nadpis;
//     receptObrazek.appendChild(img);
    
//     let receptInfo = document.createElement('div');
//     receptInfo.className = 'recept-info';

//     let nadpisReceptu = document.createElement('h3');
//     nadpisReceptu.setAttribute("data-src", poleRecepty[i].img);
//     nadpisReceptu.setAttribute("data-alt", poleRecepty[i].nadpis);
//     nadpisReceptu.setAttribute("data-kategorie", poleRecepty[i].kategorie);
//     nadpisReceptu.setAttribute("data-hodnoceni", poleRecepty[i].hodnoceni);
//     nadpisReceptu.setAttribute("data-popis", poleRecepty[i].popis);
//     nadpisReceptu.innerHTML = poleRecepty[i].nadpis;

//     recepty.appendChild(recept);
//     recept.appendChild(receptObrazek);
//     receptObrazek.insertAdjacentElement("afterend", receptInfo);
//     receptInfo.appendChild(nadpisReceptu);
    
//     vypsaneRecepty.push(poleRecepty[i]);
//   }
// }    

// const vybranyReceptFoto = document.querySelector('#recept-foto');
// const vybranyReceptKategorie = document.querySelector('#recept-kategorie');
// const vybranyReceptHodnoceni = document.querySelector('#recept-hodnoceni');
// const vybranyReceptNadpis = document.querySelector('#recept-nazev');
// const vybranyReceptPopis = document.querySelector('#recept-popis');

// let vybranyRecept = [];

// function zobrazDetailReceptu(recept) {  // funkce, která při klikntí na recept zobrazí detial
//   vybranyReceptFoto.src = recept.target.dataset.src;
//   vybranyReceptFoto.alt = recept.target.dataset.alt;
//   vybranyReceptKategorie.innerHTML = recept.target.dataset.kategorie;
//   vybranyReceptHodnoceni.innerHTML = recept.target.dataset.hodnoceni;
//   vybranyReceptNadpis.innerHTML = recept.target.dataset.alt;
//   vybranyReceptPopis.innerHTML = recept.target.dataset.popis;
//   vybranyRecept = {
//       src: recept.target.dataset.src,
//       kategorie: recept.target.dataset.kategorie,
//       hodnoceni: recept.target.dataset.hodnoceni,
//       nadpis: recept.target.dataset.alt,
//       popis: recept.target.dataset.popis        
//   };
//   ulozReceptDoLocalStorage(vybranyRecept);  // zobrazený detail receptu se uloží do local storage
// }

// function ulozReceptDoLocalStorage(vybranyRecept) {  // funkce na uložení zobrazeného receptu do local storage
//     let hodnota = JSON.stringify(vybranyRecept);
//     localStorage.setItem('vybranyRecept', hodnota);
// }

// function zobrazReceptZLocalStorage() {  // funkce na zobrazení detailu receptu z local storage
//   let hodnota = localStorage.getItem('vybranyRecept');
 
//   if (hodnota === null || hodnota === undefined) {
//       vypisRecepty(poleRecepty);  // pokud v local storage není ulžoení recept, vypíše všechny recepty
//   } else {
//       posledniRecept = JSON.parse(hodnota); // pokud recept v local storage je, detail ukáže
//       vybranyReceptFoto.src = posledniRecept.src;
//       vybranyReceptFoto.alt = posledniRecept.nadpis;
//       vybranyReceptKategorie.innerHTML = posledniRecept.kategorie;
//       vybranyReceptHodnoceni.innerHTML = posledniRecept.hodnoceni;
//       vybranyReceptNadpis.innerHTML = posledniRecept.nadpis;
//       vybranyReceptPopis.innerHTML = posledniRecept.popis;
//       }
// }

// zobrazReceptZLocalStorage(); // zobrazí recept uložený z local storage (pokud tam je)

// const trideniKategorie = document.querySelector('#kategorie');
// const seradit = document.querySelector('#razeni');
// const divRecepty = document.querySelector('#recepty');

// function filtrRecepty () {  // funkce na zobrazování receptů podle vybrané kategorie a hodnocení
//   if (trideniKategorie.value === '' && seradit.value === '') {  // pokud není vybrána kategorie ani hodnocení, zobrazí všechny recepty podle abecedy
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradPodleAbecedy(poleRecepty); // seřadí všechny recepty podle abecedy
//     vypisRecepty(poleRecepty);  // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === '' && seradit.value === 'nejlepsi') { // pokud není vybrána kategorie ale hodnocení podle ,,nejlepšího", zobrazí všechny recepty od nejlepšího 
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejlepsiho(poleRecepty); // seřadí všechny recepty od nejlepšího
//     vypisRecepty(poleRecepty);  // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === '' && seradit.value === 'nejhorsi') {  // pokud není vybrána kategorie ale hodnocení podle nejlepšího, zobrazí všechny recepty od nejhoršího
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejhorsiho(poleRecepty); // seřadí všechny recepty od nejhoršího
//     vypisRecepty(poleRecepty);  // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === 'snidane' && seradit.value === '') { // pokud je vybrána kategorie ,,snídaně", ale hodnocení ne, zobrazí snídaně podle abecedy
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradPodleAbecedy(receptySnidane);  // seřadí snídaně podle abecedy
//     vypisRecepty(receptySnidane); // vypíše tyto recepty do HTML
//     }
  
//   if (trideniKategorie.value === 'snidane' && seradit.value === 'nejlepsi') { // pokud je vybrána kategorie ,,snídaně" a hodnocení podle ,,nejlepšího", zobrazí snídaně od nejlepšího
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejlepsiho(receptySnidane);  // seřadí snídaně od nejlepšího
//     vypisRecepty(receptySnidane); // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === 'snidane' && seradit.value === 'nejhorsi') { // pokud je vybrána kategorie ,,snídaně" a hodnocení podle ,,nejlepšího", zobrazí snídaně od nejhoršího
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejhorsiho(receptySnidane);  // seřadí snídaně od nejhoršího
//     vypisRecepty(receptySnidane); // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === '') {  // pokud je vybraná kategorie ,,hlavní jídlo", ale hodnocení ne, zobrazí se všechna hlavní jídla podle abecedy
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradPodleAbecedy(receptyHlavniJidlo);  // seřadí hlavní jídla podle abecedy
//     vypisRecepty(receptyHlavniJidlo); // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === 'nejlepsi') {  // pokud je vybrána kategorie ,,hlavní jídlo" a hodnocení podle ,,nejlepšího", zobrazí se hlavní jídla od nejlepšího
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejlepsiho(receptyHlavniJidlo);  // seřadí hlavní jídla od nejlepšího
//     vypisRecepty(receptyHlavniJidlo); // vypíše tyto recepty do HTML
//   }
  
//   if (trideniKategorie.value === 'hlavni-jidlo' && seradit.value === 'nejhorsi') {  // pokdu je vybrána kategorie ,,hlavní jídlo" a hodnocení podle ,,nejlepšího", zobrazí se hlavní jídla od nejhoršího
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejhorsiho(receptyHlavniJidlo);  // seřadí hlavní jídla od nejhoršího
//     vypisRecepty(receptyHlavniJidlo); // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === 'dezert' && seradit.value === '') {// pokud je vybraná kategorie ,,dezert", ale hodnocení ne, zobrazí se všechny dezerty podle abecedy
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradPodleAbecedy(receptyDezert); // seřadí dezerty podle abecedy
//     vypisRecepty(receptyDezert);  // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === 'dezert' && seradit.value === 'nejlepsi') {  // pokud je vybrána kategorie ,,dezert" a hodnocení podle ,,nejlepšího", zobrazí se dezerty od nejlepšího
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejlepsiho(receptyDezert); // seřadí dezerty od nejlepšího
//     vypisRecepty(receptyDezert);  // vypíše tyto recepty do HTML
//   }

//   if (trideniKategorie.value === 'dezert' && seradit.value === 'nejhorsi') {  // pokdu je vybrána kategorie ,,dezert" a hodnocení podle ,,nejlepšího", zobrazí se dezerty od nejhoršího
//     hledat.value = "";  // pokud byl hledán nějaký text, smaže se
//     vypsaneRecepty = [];  // smaže hodnoty z pole vypsaných receptů
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     seradOdNejhorsiho(receptyDezert); // seřadí recepty od nejhoršího
//     vypisRecepty(receptyDezert);  // vypíše tyto recepty do HTML
//   }
// }

// filtrRecepty();

// function smazVypsaneRecepty() { // funkce, která smaže vypsané recepty z HTML
//   divRecepty.querySelectorAll('*').forEach(n=>n.remove());
// }

// function seradOdNejlepsiho(pole) {  // seřadí vložené pole od nejlepšího hodnocení
//   pole.sort(function(a,b) {
//     return b.hodnoceni - a.hodnoceni;
//   });
// }

// function seradOdNejhorsiho(pole) {  // seřadí vložené pole od nejhoršího hodnocení
//   pole.sort(function(a,b) {
//   return a.hodnoceni - b.hodnoceni;
//   });
// }

// function seradPodleAbecedy(pole) {  // seřadí vložené pole podle abecedy
//   pole.sort((a,b) => (a.nadpis > b.nadpis) ? 1 : -1);
// }

// let vyhledaneRecepty = [];

// function hledej() { // funkce na vyhledávání - spouští se vstupem uživatele do inputu vyhledávání
//     vyhledaneRecepty = [];  // při nového hledání vymaže hodnoty z pole vyhledaných receptů
//     seradit.value = '';  // nastaví hodnotu seřazení na prázdné

//   for (i = 0; i < vypsaneRecepty.length; i++) { // prochází aktuálně vypsané recepty
//     let receptMalymiPismeny = vypsaneRecepty[i].nadpis.toLowerCase(); // nadpisy receptů převede na malá písmena
//     let receptBezDiakritiky = receptMalymiPismeny.normalize("NFD").replace(/[\u0300-\u036f]/g, "");  // recept malými přísmeny převede na text bez diakritiky 
//     let vyhledavanaPolozka = hledat.value.toLowerCase();  // vyhledávaný text převede na malá písmena
    
//     if (receptBezDiakritiky.includes(hledat.value.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) { // porovnáná vyhledávaný text převedený na text bez diakritiky, jestli se shoduje s nadpisem receptu
//       vyhledaneRecepty.push(vypsaneRecepty[i]);  // pokud ano přidá do pole vyhledaných receptů
//       smazVypsaneRecepty(); // smaže aktuálně vypsané recepty
//     }
//   }
  
//   vypsaneRecepty = [];  // smaže pole s vypsanými recepty v HTML
//   vypisRecepty(vyhledaneRecepty); // vypíše recepty, kde se nadpis (nebo jeho část) shoduje s hledaným textem
  
//   if (hledat.value === '' && trideniKategorie.value === '') { // pokud se smaže vyhledávaný text a není vybrána kategorie, vypíše všechny recepty abecedy
//     smazVypsaneRecepty(); // smaže vypsané recepty z HTML
//     vyhledaneRecepty = [];  // smaže hodnoty z pole vyhledaných receptů
//     seradPodleAbecedy(poleRecepty); // seřadí všechny recepty podle abecedy
//     vypisRecepty(poleRecepty);  // vypíše tyto recepty do HTML
//   }

//     if (hledat.value === '' && trideniKategorie.value === 'snidane') {  // pokud se smaže vyhledávaný text a je vybrána kategorie ,,snídaně", vypíšou se snídaně podle abecedy
//       smazVypsaneRecepty();// smaže vypsané recepty z HTML
//       vyhledaneRecepty = [];// smaže hodnoty z pole vyhledaných receptů
//       seradPodleAbecedy(receptySnidane); // seřadí všechny snídaně podle abecedy
//       vypisRecepty(receptySnidane);// vypíše tyto recepty do HTML
//     }

//     if (hledat.value === '' && trideniKategorie.value === 'hlavni-jidlo') {  // pokud se smaže vyhledávaný text a je vybrána kategorie ,,hlavní jídlo", vypíšou se hlavní jídla podle abecedy
//       smazVypsaneRecepty();// smaže vypsané recepty z HTML
//       vyhledaneRecepty = [];// smaže hodnoty z pole vyhledaných receptů
//       seradPodleAbecedy(receptyHlavniJidlo); // seřadí všechna hlavní jídla podle abecedy
//       vypisRecepty(receptyHlavniJidlo);// vypíše tyto recepty do HTML
//     }

//     if (hledat.value === '' && trideniKategorie.value === 'dezert') {  // pokud se smaže vyhledávaný text a je vybrána kategorie ,,dezert", vypíšou se dezerty podle abecedy 
//       smazVypsaneRecepty();// smaže vypsané recepty z HTML
//       vyhledaneRecepty = [];// smaže hodnoty z pole vyhledaných receptů
//       seradPodleAbecedy(receptyDezert); // seřadí všechny dezerty podle abecedy
//       vypisRecepty(receptyDezert);// vypíše tyto recepty do HTML
//     }
// }