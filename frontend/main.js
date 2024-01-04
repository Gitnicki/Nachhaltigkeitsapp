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

// Funktion zur Berechnung der CO2-Emissionen für die Auto-Nutzung
function berechneAutoCO2Emissionen(verkehrsmittel, kraftstoff, verbrauchPro100km, jahreskilometer) {
    let co2EmissionenProLiter; // CO2-Emissionen pro Liter Kraftstoff
    let verbrauchInLiter; // Verbrauch in Litern pro Jahr
    let co2Emissionen; // Gesamte CO2-Emissionen pro Jahr

    // Annahme: CO2-Emissionswerte für verschiedene Kraftstoffe
    if (kraftstoff === 'Benzin') {
        co2EmissionenProLiter = 2.31; // Beispielwert für Benzin in kg CO2 pro Liter
    } else if (kraftstoff === 'Diesel') {
        co2EmissionenProLiter = 2.68; // Beispielwert für Diesel in kg CO2 pro Liter
    } else {
        // Wenn der Kraftstoff nicht erkannt wird, hier einen Standardwert verwenden
        co2EmissionenProLiter = 2.5; // Beispielwert für andere Kraftstoffe
    }

    // Berechnung des Verbrauchs in Litern pro Jahr
    verbrauchInLiter = (verbrauchPro100km / 100) * jahreskilometer;

    // Berechnung der Gesamten CO2-Emissionen pro Jahr
    co2Emissionen = verbrauchInLiter * co2EmissionenProLiter;

    return co2Emissionen;
}

// Beispielaufruf der Funktion
const autoCO2Emissionen = berechneAutoCO2Emissionen('Eigenes Fahrzeug', 'Benzin', 7.5, 15000);
console.log(`Geschätzte CO2-Emissionen für die Auto-Nutzung: ${autoCO2Emissionen} kg CO2 pro Jahr`);
