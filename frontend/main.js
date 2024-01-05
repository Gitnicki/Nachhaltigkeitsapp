window.onload = function () {
    showPopup();
}

function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

// Annahme: Die spezifischen CO2-Emissionswerte koennen je nach Fahrzeugtyp und Kraftstoff variieren.
// Hier werden allgemeine Durchschnittswerte verwendet.

const container = document.getElementsByClassName('container mt-4');
var verkehrsmittel = "";

var auto = document.getElementById('auto');
auto.addEventListener('click', function () {
    verkehrsmittel = "auto";
    console.log(verkehrsmittel);
});

document.getElementById('oeffentlich').addEventListener('click', function () {
    verkehrsmittel = "oeffentlich";
});

document.getElementById('bus').addEventListener('click', function () {
    if (verkehrsmittel === "oeffentlich") {
        verkehrsmittel = "bus";
        console.log(verkehrsmittel);
    }
});

document.getElementById('bahn').addEventListener('click', function () {
    if (verkehrsmittel === "oeffentlich") {
        verkehrsmittel = "bahn";
        console.log(verkehrsmittel);
    }
});

var kraftstoff ="";

document.getElementById('benzin').addEventListener('click', function () {
    kraftstoff = "benzin";
    console.log(kraftstoff)
})
document.getElementById('diesel').addEventListener('click', function () {
    kraftstoff = "diesel";
})
document.getElementById('hybrid').addEventListener('click', function () {
    kraftstoff = "hybrid";
});
document.getElementById('elektro').addEventListener('click', function () {
    kraftstoff = "elektro";
});
document.getElementById('gas').addEventListener('click', function () {
    kraftstoff = "gas";
});
var verbrauchPro100km=0;
document.getElementById('button-addon2').addEventListener('click', function () {
    verbrauchPro100km = document.getElementById ('tank100').value;
    console.log(verbrauchPro100km);
});
var jahreskilometer=0
document.getElementById('button-kilometer').addEventListener('click', function () {
    jahreskilometer = document.getElementById ('kilometer/auto').value;
console.log(jahreskilometer);
});
var personenkilometer = 0;
document.getElementById('button-oeffentlich').addEventListener('click', function () {
    personenkilometer = document.getElementById ('kilometer/oeffentlich').value;
console.log(personenkilometer);
});
//console.log(personenkilometer);


// Funktion zur Berechnung der CO2-Emissionen für die Auto-Nutzung
function co2berechnung(verkehrsmittel, kraftstoff, verbrauchPro100km, jahreskilometer, personenkilometer) {
    let co2EmissionenProLiter; // CO2-Emissionen pro Liter Kraftstoff
    let verbrauchInLiter; // Verbrauch in Litern pro Jahr
    let co2Emissionen; // Gesamte CO2-Emissionen pro Jahr
    if (verkehrsmittel === 'auto') {
        // Annahme: CO2-Emissionswerte für verschiedene Kraftstoffe
        if (kraftstoff === 'benzin') {
            co2EmissionenProLiter = 2390; // Menge für Benzin in g CO2 pro Liter
        } else if (kraftstoff === 'diesel') {
            co2EmissionenProLiter = 2640; // Menge für Diesel in g CO2 pro Liter
        } else if (kraftstoff === 'hybrid') {
            co2EmissionenProLiter = 1111; // 
        } else if (kraftstoff === 'elektro') {
            co2EmissionenProLiter = 1111; // 
        } else if (kraftstoff === 'LPG') {
            co2EmissionenProLiter = 1660; // Menge für LPG in g CO2 pro Liter
        } else if (kraftstoff === 'CNG') {
            co2EmissionenProLiter = 2666; // Menge für CNG in g CO2 pro Liter
        }
        // Berechnung des Verbrauchs in Litern pro Jahr
        verbrauchInLiter = (verbrauchPro100km / 100) * jahreskilometer;
        // Berechnung der Gesamten CO2-Emissionen pro Jahr
        co2Emissionen = verbrauchInLiter * co2EmissionenProLiter;
    } else if (verkehrsmittel === 'bus') {

        co2Emissionen = personenkilometer * 23;
    } else if (verkehrsmittel === 'bahn') {
        co2Emissionen = personenkilometer * 36
    }
    return co2Emissionen;
}

//Anruf der Funktion
document.getElementById('button-berechnen').addEventListener('click', function () {
const autoCO2Emissionen = co2berechnung(verkehrsmittel , kraftstoff,verbrauchPro100km, jahreskilometer, personenkilometer);
console.log('Geschätzte CO2-Emissionen für die Auto-Nutzung:', autoCO2Emissionen);
});
//Beispielaufruf der Funktion
// const autoCO2Emissionen = co2berechnung('Auto', 'Benzin', 7.5, 15000, null);
// console.log('Geschätzte CO2-Emissionen für die Auto-Nutzung:', autoCO2Emissionen, 'g CO2 pro Jahr');
