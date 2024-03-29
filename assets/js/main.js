/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1: ( obbiettivo di ieri )
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
*/

function prezzoViaggio() {

    let nomeCognome = document.getElementById('nomeCognome').value;
    let km = parseFloat(document.getElementById('km').value);
    let etaPersona = document.getElementById('eta').value;

    const prezzoKm = 0.21;

    let prezzoBiglietto = km * prezzoKm;

    let totale = prezzoBiglietto;

    let numeroRandom = Math.floor(Math.random() * 10) + 1;

    let numeroRandom2 = Math.floor(Math.random() * 9999) + 1;

    if (etaPersona == 'minorenne') {
        totale *= 0.80;
        offerta = 'Biglietto Under 18';

    } else if (etaPersona == 'over65') {
        totale *= 0.60;
        offerta = 'Biglietto Over 65';
    } else {
        offerta = 'Biglietto Standard';
    }

    let costoTotale = `${(totale.toFixed(2))}€`
    document.getElementById('nomePassegero').innerHTML = nomeCognome
    document.getElementById('offerta').innerHTML = offerta
    document.getElementById('carrozza').innerHTML = numeroRandom
    document.getElementById('codiceCP').innerHTML = numeroRandom2
    document.getElementById('risultato').innerHTML = costoTotale;
}

function clearInput() {
    document.getElementById("nomeCognome").value = "";
    document.getElementById("km").value = "";
}