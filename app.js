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

// promenne
let aktualniReceptStorage = localStorage.getItem("aktualniRecept");
let nalezeneRecepty = recepty;


let receptySlana = [];
let receptySladka = [];
let receptySpecialni = [];
let poleRecepty = []

receptyKategorie();

function receptyKategorie () {  // vytřídím si recepty podle kategorií a vložím do samostatných polí
console.log("recepty kategorie push")
  for (i = 0; i < nalezeneRecepty.length; i++) {
    if (nalezeneRecepty[i].kategorie === 'Slaná pizza') {
        receptySlana.push(poleRecepty[i]);
    }

    if (nalezeneRecepty[i].kategorie === 'Sladká pizza') {
      receptySladka.push(poleRecepty[i]);
    }

    if (nalezeneRecepty[i].kategorie === 'Speciální pizza') {
      receptySpecialni.push(poleRecepty[i]);
    }
  }
}

// kontrola zobrazeni posledniho receptu z local storage
if (aktualniReceptStorage !== null){
        zobrazReceptDetail(Number(aktualniReceptStorage));
}


zobrazSeznamReceptu(nalezeneRecepty)

let hledat = document.querySelector('#hledat');
//  Pokud uživatel začně hledat, zavolá se funkce hledejRecept v pizzách
hledat.addEventListener('input', () => {
        hledejRecept();
});



function hledejRecept(){
        let hledat = document.querySelector('#hledat');
        let vyhledaneRecepty = recepty.filter(recept => recept.nadpis.toLowerCase().includes(hledat.value))
        // console.log(vyhledaneRecepty);
        zobrazSeznamReceptu(vyhledaneRecepty);
};


// // jednotlive objekty pole by se mely zobrazovat v id recepty
function zobrazSeznamReceptu(recepty) {
        // console.log(nalezeneRecepty);
        let seznamReceptuElement = document.getElementById('recepty');
        seznamReceptuElement.innerHTML = "";

        recepty.forEach((recept, index) => {
                let receptElement = zobrazReceptMenu(recept, index);
                seznamReceptuElement.appendChild(receptElement)

        })


}
// // konkretni recept po rozkliknuti
        function zobrazReceptDetail(index){
        let aktualniRecept = recepty[index];
        let receptNadpis = document.querySelector("#recept-nazev");
        receptNadpis.textContent = aktualniRecept.nadpis;

        let receptPopis = document.querySelector("#recept-popis");
        receptPopis.textContent = aktualniRecept.popis;

        let receptHodnoceni = document.querySelector("#recept-hodnoceni");
        receptHodnoceni.textContent = aktualniRecept.hodnoceni;

        let receptKategorie = document.querySelector("#recept-kategorie");
        receptKategorie.textContent = aktualniRecept.kategorie;

        let receptFoto = document.querySelector("#recept-foto");
        receptFoto.src = aktualniRecept.img;   
        
        

// let aktualniReceptStorage = 
localStorage.setItem("aktualniRecept", index);
// if(aktualniReceptStorage !== null) {
//         zobrazReceptDetail(Number(aktualniReceptStorage))
// }

        }
        


// }
// )
// }
// // vytvorime kontejnery pro jednotlive casti objektu a sparujeme s html
function zobrazReceptMenu(recept, index) {
let receptElement = document.createElement('div');
receptElement.className = "recept";
// seznamReceptu.appendChild(receptElement);

// // Vytvorime kontejner pro obrazek
let receptObrazekElement = document.createElement('div');
receptObrazekElement.className = "recept-obrazek";

let receptObrazekSrcElement = document.createElement('img');
receptObrazekSrcElement.src = recept.img;
receptObrazekSrcElement.alt = "Obrazek";

receptObrazekElement.appendChild(receptObrazekSrcElement);
receptElement.appendChild(receptObrazekElement);


// // vytvorime kontejner pro info
let receptInfoElement = document.createElement('div');
receptInfoElement.className = "recept-info";
receptElement.appendChild(receptInfoElement);

// vytvorime kontejner pro nadpis
let receptNadpisElement = document.createElement('h3');
receptNadpisElement.textContent = recept.nadpis;
receptInfoElement.appendChild(receptNadpisElement);

// console.log(receptElement);

// Pridam spoustec akce
receptElement.addEventListener("click", () => {
        zobrazReceptDetail(index);
});

return receptElement

}

// FILTROVANI

// promenne na zobrazeni receptu podle kategorie a hodnoceni
let razeni = document.querySelector("#razeni");
let kategorie = document.querySelector("#kategorie");
let seznamReceptuElement = document.getElementById('recepty');
// Ma tam byt append child poli slana, sladka a speacialni?

filtrRecepty();

// po spusteni funkce filtr recepty a pokud nebude vybrana kategorie ani hodnoceni, vypisou se vsechny recepty
function filtrRecepty(){
        console.log("filtr recepty")
if (kategorie.value === '' && razeni.value === ''){
        //   vymazu seznam receptu
        seznamReceptuElement.innerHTML = "";
        // seradim podle abecedy
        seradPodleAbecedy(nalezeneRecepty);
        // zobrazim jen recepty z kategorie recepty Slana
        zobrazSeznamReceptu(nalezeneRecepty);
        console.log("nic vybrano")
}

// pokud není vybráno hodnoceni, ale kategorie je slana pizza, zobrazi vsechny slane pizzy 
  if (kategorie.value === 'Slaná pizza' && razeni.value === '') { 
        //   vymazu seznam receptu
        seznamReceptuElement.innerHTML = ""; 
        // seradim podle abecedy
        seradPodleAbecedy(nalezeneRecepty);
        // zobrazim jen recepty z kategorie recepty Slana
        zobrazSeznamReceptu(receptySlana);
        console.log("slana pizza")
}
// pokud není vybráno hodnoceni, ale kategorie je sladka pizza, zobrazi vsechny slane pizzy 
if (kategorie.value === 'Sladká pizza' && razeni.value === '') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        zobrazSeznamReceptu(receptySladka);
        console.log("sladka pizza")
}
// pokud není vybráno hodnoceni, ale kategorie je specialni pizza, zobrazi vsechny slane pizzy 
if (kategorie.value === 'Speciální pizza' && razeni.value === '') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        zobrazSeznamReceptu(receptySpecialni);
        console.log("specialni pizza")
}

// pokud není vybrána kategorie, ale hodnocení podle "od nejlepších", zobrazí všechny recepty ve funkci od nejlepšího 
  if (kategorie.value === '' && razeni.value === 'Od nejlepších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejlepsiho(nalezeneRecepty); 
        vypisRecepty(nalezeneRecepty);  
  }

// pokud není vybrána kategorie, ale hodnocení podle "od nejhorsich", zobrazí všechny recepty ve funkci od nejhorsiho
if (kategorie.value === '' && razeni.value === 'Od nejhorších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejhorsiho(nalezeneRecepty); 
        vypisRecepty(nalezeneRecepty);  
  }

  // kombinace kategorie a razeni

  if (kategorie.value === 'Slaná pizza' && razeni.value === 'Od nejlepších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejlepsiho(receptySlana); 
        vypisRecepty(receptySlana);  
  }

// pokud není vybrána kategorie, ale hodnocení podle "od nejhorsich", zobrazí všechny recepty od nejlepšího 
if (kategorie.value === 'Slaná pizza' && razeni.value === 'Od nejhorších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejhorsiho(receptySlana); 
        vypisRecepty(receptySlana);  
  }

  if (kategorie.value === 'Sladká pizza' && razeni.value === 'Od nejlepších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejlepsiho(receptySladka); 
        vypisRecepty(receptySladka);  
  }

// pokud není vybrána kategorie, ale hodnocení podle "od nejhorsich", zobrazí všechny recepty od nejlepšího 
if (kategorie.value === 'Sladká pizza' && razeni.value === 'Od nejhorších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejhorsiho(receptySlana); 
        vypisRecepty(receptySladka);  
}

if (kategorie.value === 'Speciální pizza' && razeni.value === 'Od nejlepších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejlepsiho(receptySpecialni); 
        vypisRecepty(receptySpecialni);  
  }

// pokud není vybrána kategorie, ale hodnocení podle "od nejhorsich", zobrazí všechny recepty od nejlepšího 
if (kategorie.value === 'Speciální pizza' && razeni.value === 'Od nejhorších') { 
        seznamReceptuElement.innerHTML = "";
        seradPodleAbecedy(nalezeneRecepty);
        seradOdNejhorsiho(receptySpecialni); 
        vypisRecepty(receptySpecialni);  
}
}


// seřadí nalezeneRecepty podle abecedy
function seradPodleAbecedy(nalezeneRecepty) { 
        console.log("Serad podle abecedy"); 
          nalezeneRecepty.sort((a,b) => (a.nadpis > b.nadpis) ? 1 : -1);
        }

// seřadí vložené pole od nejlepšího hodnocení
function seradOdNejlepsiho(nalezeneRecepty) { 
        console.log("Serad od nejlepsiho");  
        nalezeneRecepty.sort(function(a,b) {
    return b.receptHodnoceni - a.receptHodnoceni;
  });
}

// seřadí vložené pole od nejhoršího hodnocení
function seradOdNejhorsiho(nalezeneRecepty) { 
        console.log("Serad od nejhorsiho");  
        nalezeneRecepty.sort(function(a,b) {
  return a.receptHodnoceni - b.receptHodnoceni;
  });
}


