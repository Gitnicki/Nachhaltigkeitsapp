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

// Annahme: Die spezifischen CO2-Emissionswerte können je nach Fahrzeugtyp und Kraftstoff variieren.
// Hier werden allgemeine Durchschnittswerte verwendet.

let verkehrsmittel = ""


document.getElementById('auto').addEventListener('click', function () {
    verkersmittel = "auto";
})

document.getElementById('öffentlich').addEventListener('click')
document.getElementById('bus').addEventListener('click')
document.getElementById('bahn').addEventListener('click')

if (verkersmittel.includes("bus") && verkehrsmittel.includes("öffentlich")) {
    verkersmittel = "bus";
}
if (verkersmittel.includes("bahn") && verkehrsmittel.includes("öffentlich")) {
    verkersmittel = "bahn";
}


// Funktion zur Berechnung der CO2-Emissionen für die Auto-Nutzung
function co2berechnung(verkehrsmittel, kraftstoff, verbrauchPro100km, jahreskilometer, maxico2) {
    let co2EmissionenProLiter; // CO2-Emissionen pro Liter Kraftstoff
    let verbrauchInLiter; // Verbrauch in Litern pro Jahr
    let co2Emissionen; // Gesamte CO2-Emissionen pro Jahr
    if (verkehrsmittel === 'Auto') {
        // Annahme: CO2-Emissionswerte für verschiedene Kraftstoffe
        if (kraftstoff === 'Benzin') {
            co2EmissionenProLiter = 2390; // Menge für Benzin in g CO2 pro Liter
        } else if (kraftstoff === 'Diesel') {
            co2EmissionenProLiter = 2640; // Menge für Diesel in g CO2 pro Liter
        } else if (kraftstoff === 'Hybrid') {
            co2EmissionenProLiter = 1111; // 
        } else if (kraftstoff === 'Elektro') {
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
    } else if (verkehrsmittel === 'Bus') {

        co2Emissionen = jahreskilometer * 23;
    } else if (verkehrsmittel === 'Bahn') {
        co2Emissionen = jahreskilometer * 36
    }
    return co2Emissionen;
}

// Beispielaufruf der Funktion
const autoCO2Emissionen = co2berechnung('Auto', 'Benzin', 7.5, 15000);
console.log(`Geschätzte CO2-Emissionen für die Auto-Nutzung: ${autoCO2Emissionen} kg CO2 pro Jahr`);