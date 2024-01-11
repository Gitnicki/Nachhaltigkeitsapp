//ggf. vor dem require functionsnamen einfügen und functionen unten rausnehmen

// Importieren Sie die auto.js-Datei
const autoberechnung = parseInt(localStorage.getItem("auto_co2"));

// Importieren Sie die freizeit.js-Datei
const freizeitberechnung = parseInt(localStorage.getItem("freizeit_co2"));

// Importieren Sie die wasser.js-Datei
const wasserberechnung = parseInt(localStorage.getItem("wasser_verbrauch"));

// Importieren Sie die wohnen.js-Datei
const wohnberechnung = parseInt(localStorage.getItem("wohnen_co2"));

// Importieren Sie die ernaehrung.js-Datei
const nahrungsberechnung = parseInt(localStorage.getItem("ernaehrung_co2"));



function fazitberechnung(display, displaywasser) {
   let Endco2Emissionen = 0;

  // Datenbank muss implementiert werden 
   Endco2Emissionen = (autoberechnung + (freizeitberechnung * 52.1786) + wohnberechnung + nahrungsberechnung) / 1000000;
   console.log(autoberechnung);
   console.log(freizeitberechnung);
   console.log(wohnberechnung);
   console.log(nahrungsberechnung);
   display.value = Endco2Emissionen.toFixed(2);
    displaywasser.value = wasserberechnung;
    
    return Endco2Emissionen;
};

// Anruf der Funktion
document.getElementById('show').addEventListener('click', function () {
    const display = document.getElementById('display');
    const displaywasser = document.getElementById('displaywasser');


    const endco2berechnung = fazitberechnung(display, displaywasser);
    console.log('Geschätzte CO2-Emissionen für das gesamte Jahr in Tonnen:', endco2berechnung.toFixed(2));
  });
