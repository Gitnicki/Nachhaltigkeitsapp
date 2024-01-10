//Berechnungsfunktion
function co2berechnungverkehr(fahrzeugnutzung, kraftstoff, verbrauch, kmprojahr, dropdownifbusbahn, kmjahroeffis) {
    let co2EmissionenProLiter = 0;
    let verbrauchinLiter = 0;
    let co2Emissionenauto = 0;

    if (fahrzeugnutzung === "pkw") {
        switch (kraftstoff) {
            case 'benzin':
                co2EmissionenProLiter = 2390; // Menge für Benzin in g CO2 pro Liter
                break;
            case 'diesel':
                co2EmissionenProLiter = 2640; // Menge für Diesel in g CO2 pro Liter
                break;
            case 'hybridbenzin':
                co2EmissionenProLiter = 1770; // Menge für Hybridbenzin in g CO2 pro Liter
                break;
            case 'hybriddiesel':
                co2EmissionenProLiter = 1980; // Menge für Hybriddiesel in g CO2 pro Liter
                break;
            case 'hybridgas':
                co2EmissionenProLiter = 1245; // Menge für Hybridgas in g CO2 pro Liter
                break;
            case 'elektro':
                co2EmissionenProLiter = 563; // Menge für KW/H in g CO2 pro KW
                break;
            case 'gaslpg':
                co2EmissionenProLiter = 1660; // Menge für LPG in g CO2 pro Liter
                break;
            case 'gascng':
                co2EmissionenProLiter = 2666; // Menge für CNG in g CO2 pro Liter
                break;
            default:
                co2EmissionenProLiter = 0;
        }
        console.log(co2EmissionenProLiter);
        // Berechnung des Verbrauchs auf einen Liter
        verbrauchinLiter = (verbrauch / 100) * kmprojahr ;
        console.log(verbrauchinLiter);
        // Berechnung der Gesamten CO2-Emissionen pro Jahr
        co2Emissionenauto = verbrauchinLiter * co2EmissionenProLiter;
    }
    
    if (fahrzeugnutzung === "oeffis") {
        switch (dropdownifbusbahn) {
            case "bus":
                co2Emissionenauto += kmjahroeffis * 23;
            case "bahn":
                co2Emissionenauto += kmjahroeffis * 36;
        }
    }

    return co2Emissionenauto;
};

// Anruf der Funktion
document.getElementById('button-berechnen').addEventListener('click', function () {
    const fahrzeugnutzung = document.getElementById('fahrzeugnutzung').value;
    const kraftstoff = document.getElementById('kraftstoff').value;
    const verbrauch = parseInt(document.getElementById('verbrauch').value);
    const kmprojahr = parseInt(document.getElementById('kmjahr').value);
    const dropdownifbusbahn = document.getElementById('dropdownifbusbahn').value;
    const kmjahroeffis = parseInt(document.getElementById('kmjahroeffis').value);

    const co2berechnung = co2berechnungverkehr(fahrzeugnutzung, kraftstoff, verbrauch, kmprojahr, dropdownifbusbahn, kmjahroeffis);
    console.log('Geschätzte CO2-Emissionen für die Fahrzeugnutzung:', co2berechnung);
    localStorage.setItem("auto_co2", co2berechnung);
  });

  // client (auto.js)
// const co2berechnungverkehr = 16;

// fetch('/q1', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ co2berechnungverkehr: co2berechnungverkehr }),
// })
//     .then(res => res.json())
//     .then(data => {
//     console.log('Response Server :', data);
//     })
//     .catch(error => {
//     console.error('Error :', error);
//     });''


//   module.exports = co2berechnungverkehr;

// Um mit Weder Noch andere Optionen auszublenden, allerdings nur die derselben Frage, nicht aller

// document.addEventListener('DOMContentLoaded', function () {
//     const select = document.getElementById('fahrzeugnutzung');
  
//     // Event-Listener für das Ändern der Auswahl
//     select.addEventListener('change', function () {
//       const selectedValue = select.value;
  
//       // Überprüfen, ob "weder noch" ausgewählt wurde
//       if (selectedValue === 'none') {
//         // Deaktiviere alle anderen Optionen
//         const options = select.options;
//         for (let i = 0; i < options.length; i++) {
//           if (options[i].value !== 'none') {
//             options[i].disabled = true;
//           }
//         }
//       } else {
//         // Aktiviere alle Optionen
//         const options = select.options;
//         for (let i = 0; i < options.length; i++) {
//           options[i].disabled = false;
//         }
//       }
//     });
//   });

