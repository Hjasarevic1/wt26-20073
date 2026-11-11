window.onload = function () {
  const lista = document.getElementById('lista-aktivnosti');
  const stavke = lista.querySelectorAll('li');
  const sazetak = document.getElementById('sazetak');
  const btnReset = document.getElementById('btn-reset');
  function azurirajSazetak() {
    const ukupno = stavke.length;
    let zavrseno = 0;
    stavke.forEach(li => {
      if (li.querySelector('span').classList.contains('zavrseno')) {
        zavrseno++;
      }
    });
    sazetak.textContent = `Završeno: ${zavrseno} / ${ukupno}`;
  }
  function toggleStanje(li) {
    const span = li.querySelector('span');
    span.classList.toggle('zavrseno');
    azurirajSazetak();
  }
  stavke.forEach(li => {
    const btn = li.querySelector('button');
    btn.onclick = function (e) {
      toggleStanje(li);
    };
  });
  btnReset.onclick = function () {
    stavke.forEach(li => {
      li.querySelector('span').classList.remove('zavrseno');
    });
    azurirajSazetak();
  };
  azurirajSazetak();
};