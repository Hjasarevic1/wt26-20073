window.onload = function () {
  const btnPregled = document.getElementById('btn-pregled');
  const btnReset = document.getElementById('btn-reset-forma');
  const porukaGreske = document.getElementById('poruka-greske');
  const pregledSadrzaj = document.getElementById('pregled-sadrzaj');
  const forma = document.getElementById('forma-obavijest');

  btnPregled.onclick = function () {
    const naslovVal = document.getElementById('naslov').value.trim();
    const tekstVal = document.getElementById('tekst').value.trim();
    const kategorijaVal = document.getElementById('kategorija').value;
    if (naslovVal === '' || tekstVal === '') {
      porukaGreske.textContent = "Greška: Naslov i tekst obavijesti ne smiju biti prazni!";
      porukaGreske.style.display = 'block';
      porukaGreske.style.border = '1px solid red';
      return;
    }
    porukaGreske.style.display = 'none';
    pregledSadrzaj.innerHTML = '';
    const kontejnerKategorija = document.createElement('div');
    if (kategorijaVal === 'Hitno') {
      kontejnerKategorija.className = 'kategorija-hitno';
    } else {
      kontejnerKategorija.className = 'kategorija-obavjestenje';
    }

    const tagKat = document.createElement('span');
    tagKat.className = 'oznaka-kat';
    tagKat.textContent = `[${kategorijaVal}]`;

    const elNaslov = document.createElement('h4');
    elNaslov.style.margin = '5px 0';
    elNaslov.textContent = naslovVal;

    const elTekst = document.createElement('p');
    elTekst.style.margin = '5px 0';
    elTekst.textContent = tekstVal;
    kontejnerKategorija.appendChild(tagKat);
    kontejnerKategorija.appendChild(elNaslov);
    kontejnerKategorija.appendChild(elTekst);
    pregledSadrzaj.appendChild(kontejnerKategorija);
  };

  btnReset.onclick = function () {
    forma.reset();
    porukaGreske.style.display = 'none';
    pregledSadrzaj.innerHTML = '<p><i>Nema unesenih podataka za pregled.</i></p>';
  };
};