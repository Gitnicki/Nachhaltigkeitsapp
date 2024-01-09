// Importieren Sie die auto.js-Datei
const autoberechnung = require ("./auto.js");

// Importieren Sie die freizeit.js-Datei
const freizeitberechnung = require ("./freizeit.js");

// Importieren Sie die wasser.js-Datei
const wasserberechnung = require ("./wasser.js");

// Importieren Sie die wohnen.js-Datei
const wohnberechnung = require ("./wohnen.js");

// Importieren Sie die ernaehrung.js-Datei
const nahrungsberechnung = require ("./ernaehrung.js");

// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungauto = co2berechnungverkehr(fahrzeugnutzung, kraftstoff, verbrauch, kmprojahr, dropdownifbusbahn, kmjahroeffis);

// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungfreizeit = co2berechnungperHour(gamingHours, dropdownvalue, platform, dropdownisstreaming, streamingHours, dropdownissocialmedia, socialHours, dropdowniszeitung, dropdowniszeitungdp, dropdownistiere, dropdownwelchestier, dropdownanzahltiere);
 
// Rufe eine Funktion aus dem separaten Modul auf
const wasserVerbrauch = waterperUse(sliderwaschmaschinew, slidergeschirrspuelerw, sliderduschenw, sliderbadenw, sliderreinigenw, slidergartenw, sliderkochenw);
 
// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungwohnen = co2berechnungwohnen(anzahlpersonen, anzahlstromkwh, strommix, heizform, heizkwh);

// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungnahrung = co2berechnungernaehrung(ernaehrungsart);

function fazitberechnung(display) {
   let Endco2Emissionen = 0;
   

   
    
    
    return Endco2Emissionen;
};

// Anruf der Funktion
document.getElementById('show').addEventListener('click', function () {
    const display = document.getElementById('display').value;


    const endco2berechnung = fazitberechnung(display);
    console.log('Geschätzte CO2-Emissionen für die Gaming-Nutzung:', endco2berechnung);
  });

