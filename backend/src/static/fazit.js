//ggf. vor dem require functionsnamen einfügen und functionen unten rausnehmen

// Importieren Sie die auto.js-Datei
const autoberechnung = localStorage.getItem("auto_co2");

// Importieren Sie die freizeit.js-Datei
const freizeitberechnung = localStorage.getItem("freizeit_co2");

// Importieren Sie die wasser.js-Datei
const wasserberechnung = localStorage.getItem("wasser_verbrauch");

// Importieren Sie die wohnen.js-Datei
const wohnberechnung = localStorage.getItem("wohnen_co2");

// Importieren Sie die ernaehrung.js-Datei
const nahrungsberechnung = localStorage.getItem("ernaehrung_co2");



function fazitberechnung(display, displaywasser) {
   let Endco2Emissionen = 0;

  // Datenbank muss implementiert werden 
   Endco2Emissionen = autoberechnung + (freizeitberechnung * 52.1786) + wohnberechnung + nahrungsberechnung;
   display.value = Endco2Emissionen;
    displaywasser.value = wasserberechnung;
    
    return Endco2Emissionen / 1000000;
};

// Anruf der Funktion
document.getElementById('show').addEventListener('click', function () {
    const display = document.getElementById('display');
    const displaywasser = document.getElementById('displaywasser');


    const endco2berechnung = fazitberechnung(display, displaywasser);
    console.log('Geschätzte CO2-Emissionen für das gesamte Jahr in Tonnen:', endco2berechnung);
  });
