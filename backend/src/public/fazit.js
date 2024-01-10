//ggf. vor dem require functionsnamen einfügen und functionen unten rausnehmen

// Importieren Sie die auto.js-Datei
const autoberechnung = require("./auto.js");

// Importieren Sie die freizeit.js-Datei
const freizeitberechnung = require("./freizeit.js");

// Importieren Sie die wasser.js-Datei
const wasserberechnung = require("./wasser.js");

// Importieren Sie die wohnen.js-Datei
const wohnberechnung = require("./wohnen.js");

// Importieren Sie die ernaehrung.js-Datei
const nahrungsberechnung = require("./ernaehrung.js");

// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungverkehr = co2berechnungverkehr(fahrzeugnutzung, kraftstoff, verbrauch, kmprojahr, dropdownifbusbahn, kmjahroeffis);

// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungperHour = co2berechnungperHour(gamingHours, dropdownvalue, platform, dropdownisstreaming, streamingHours, dropdownissocialmedia, socialHours, dropdowniszeitung, dropdowniszeitungdp, dropdownistiere, dropdownwelchestier, dropdownanzahltiere);
 
// Rufe eine Funktion aus dem separaten Modul auf
const waterperUse = waterperUse(sliderwaschmaschinew, slidergeschirrspuelerw, sliderduschenw, sliderbadenw, sliderreinigenw, slidergartenw, sliderkochenw);
 
// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungwohnen = co2berechnungwohnen(anzahlpersonen, anzahlstromkwh, strommix, heizform, heizkwh);

// Rufe eine Funktion aus dem separaten Modul auf
const co2berechnungernaehrung = co2berechnungernaehrung(ernaehrungsart);

function fazitberechnung(display, displaywasser) {
   let Endco2Emissionen = 0;

  // Datenbank muss implementiert werden 
   Endco2Emissionen = co2Emissionenauto + (co2Emissionenfreizeit * 52.1786) + (co2Emissionenwohnen / anzahlpersonen) + co2EmissionenimJahr;
   display.value = Endco2Emissionen;
    displaywasser.value = Wasserverbrauch;
    
    return Endco2Emissionen;
};

// Anruf der Funktion
document.getElementById('show').addEventListener('click', function () {
    const display = document.getElementById('display');
    const displaywasser = document.getElementById('displaywasser');


    const endco2berechnung = fazitberechnung(display, displaywasser);
    console.log('Geschätzte CO2-Emissionen für die Gaming-Nutzung:', endco2berechnung);
  });

  // Definieren Sie eine GET-Route für zusammenfassung.html
app.get('/zusammenfassung', (req, res) => {
  // Verwenden Sie path.join, um den vollständigen Pfad zur zusammenfassung.html zu erstellen
  const filePath = path.join(__dirname, + '../../../zusammenfassung.html');
  res.sendFile(filePath);})

