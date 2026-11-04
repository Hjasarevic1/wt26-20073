function procijeniProfitKompanije(vrijednost, profit_prethodnog_mjeseca, idealni_profit) {
    if (vrijednost <= profit_prethodnog_mjeseca) {
        return "Nizak profit";
    }
    if (vrijednost <= idealni_profit) {
        return "Umjeren profit";
    } else {
        return "Visok profit";
    }
}
let profit_prethodnog_mjeseca = 15;
let idealni_profit = 50;
let unos = prompt("Unesite ostvareni profit kompanije:");
if (unos === null || unos.trim() === "") {
    alert("Greška: Unesite vrijednost profita!");
} else {
    let vrijednost = Number(unos.trim());
    if (isNaN(vrijednost) || vrijednost < 0) {
        alert("Greška: Uneseni podatak mora biti nenegativan broj!");
    } else {
        let kategorija = procijeniProfitKompanije(vrijednost, profit_prethodnog_mjeseca, idealni_profit);
        alert("Rezultat procjene profita: " + kategorija);
    }
}