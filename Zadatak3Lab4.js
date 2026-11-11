window.onload = function () {
  const tabela = document.getElementById('tabela-evidencija');
  const tbody = tabela.querySelector('tbody');
  const btnDodaj = document.getElementById('btn-dodaj');
  const greskaUnos = document.getElementById('greska-unos');
  const elBrojStavki = document.getElementById('broj-stavki');
  const elUkupniZbir = document.getElementById('ukupni-zbir');
  const elMaxVrijednost = document.getElementById('max-vrijednost');
  const elProsjecnaVrijednost = document.getElementById('prosjecna-vrijednost');

  function azurirajStatistiku() {
    const redovi = tbody.querySelectorAll('tr');
    const ukupnoStavki = redovi.length;

    if (ukupnoStavki === 0) {
      elBrojStavki.textContent = 0;
      elUkupniZbir.textContent = "0.00";
      elMaxVrijednost.textContent = "0.00";
      elProsjecnaVrijednost.textContent = "0.00";
      return;
    }

    let zbir = 0;
    let max = -Infinity;

    redovi.forEach((red, index) => {
      red.cells[0].textContent = index + 1;
      const vrednost = parseFloat(red.cells[2].textContent);
      if (!isNaN(vrednost)) {
        zbir += vrednost;
        if (vrednost > max) {
          max = vrednost;
        }
      }
    });
    const prosjek = zbir / ukupnoStavki;
    elBrojStavki.textContent = ukupnoStavki;
    elUkupniZbir.textContent = zbir.toFixed(2);
    elMaxVrijednost.textContent = max.toFixed(2);
    elProsjecnaVrijednost.textContent = prosjek.toFixed(2);
  }

  btnDodaj.onclick = function () {
    const nazivInput = document.getElementById('naziv');
    const iznosInput = document.getElementById('iznos');
    const naziv = nazivInput.value.trim();
    const iznos = parseFloat(iznosInput.value);
    if (naziv === '' || isNaN(iznos) || iznos < 0) {
      greskaUnos.textContent = "Greška: Unesite ispravan naziv i nenegativan broj za iznos!";
      return;
    }
    greskaUnos.textContent = '';
    const noviRed = tbody.insertRow();
    const celijaBr = noviRed.insertCell(0);
    const celijaNaziv = noviRed.insertCell(1);
    const celijaIznos = noviRed.insertCell(2);

    celijaBr.textContent = tbody.children.length;
    celijaNaziv.textContent = naziv;
    celijaIznos.className = 'broj-kolona';
    celijaIznos.textContent = iznos.toFixed(2);
    nazivInput.value = '';
    iznosInput.value = '';
    azurirajStatistiku();
  };
  azurirajStatistiku();
};