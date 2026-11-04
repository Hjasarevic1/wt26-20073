function generisiPlanBrojanja(n, k) {
    console.log("Pocnite brojati:");
    for (let i = 1; i <= n; i++) {
        console.log("Izbrojano: " + i);
        if (i % k === 0 && i !== n) {
            console.log("Uzmite predah!");
        }
    }
    console.log("Svaka cast, izbrojali ste!");
}
let N = prompt("Unesite do kojeg broja želite brojati:");
let K = prompt("Unesite nakon koliko izbrojanih brojeva slijedi pauza:");
if (N === null || K === null || N.trim() === "" || K.trim() === "") {
    alert("Greška: Unesite validno parametre!");
} else {
    let n = Number(N.trim());
    let k = Number(K.trim());
    if (isNaN(n) || isNaN(k) || !Number.isInteger(n) || !Number.isInteger(k) || n <= 0 || k <= 0) {
        alert("Greška: Parametri n i k moraju biti pozitivni cijeli brojevi!");
    } else {
        generisiPlanBrojanja(n, k);
    }
}