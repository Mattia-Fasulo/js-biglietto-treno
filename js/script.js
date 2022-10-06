/**
x-Chiedere la distanza che si vuole percorrere in km
x-Chiedere l'età del passegero
x-Calcolare il prezzo del viaggio (0.21€ per km )
x-Applicare uno sconto del 20% per gli under 18
x-Applicare uno sconto del 40% per gli over 65
x-Calcolare il prezzo finale con massimo due cifre decimali
-Stampare il biglietto sulla pagina html
 */

//distanza e età
let travelDistance =prompt('Inserire la lunghezza del viaggio che si vuole percorrere') ;
let passengerAge=parseInt(prompt("Inserire l'età del passeggero")) ;
console.log(travelDistance);
console.log(passengerAge);

if(isNaN(travelDistance) || isNaN(passengerAge)){
    alert('inserire un valore numerico');
}


//calcolo il prezzo senza sconti
let travelPrice = parseFloat((travelDistance * '0.21').toFixed(2));
console.log(travelPrice);

//applico lo sconto in base all'età
if(passengerAge <= 18){
    travelPrice = parseFloat((travelPrice - ((travelPrice) / 5)).toFixed(2));
}
else if(passengerAge >= 65){
    travelPrice = parseFloat((travelPrice - ((travelPrice * 2) / 5)).toFixed(2));
}
else {
    travelPrice = 'Inserire nuovamente i Dati'
}
console.log(travelPrice);

if(!isNaN(travelPrice)){
document.getElementById("my-h2").innerHTML = travelPrice + ' ' + '€';
}
else {
    document.getElementById("my-h2").innerHTML = 'Inserire nuovamente i Dati'
}
