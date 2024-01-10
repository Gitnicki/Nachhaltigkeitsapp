  function co2berechnungwohnen(anzahlpersonen, anzahlstromkwh, strommix, heizform, heizkwh) {
    let co2EmissionenProKwh; // CO2-Emissionen pro kwh
    let co2Emissionenwohnen = 0; // Gesamte CO2-Emissionen im Bereich Wohnen

      switch (strommix) {
        case 'erneuerbar':
          co2EmissionenProStunde = 0; // Menge für erneuerbaren Strommix in g CO2 pro kwh
          break;
        case 'ausgeglichen':
          co2EmissionenProStunde = 300; // Menge für ausgegeglichenen Strommix in g CO2 pro kwh
          break;
        case 'gas':
          co2EmissionenProStunde = 500; // Menge für einen Strommix mit dem Großteil an Gas in g CO2 pro kwh
          break;
        case 'kohle':
          co2EmissionenProStunde = 900; // Menge für einen Strommix mit dem Großteil an Kohle in g CO2 pro kwh
          break;
        default:
          co2EmissionenProStunde = 0;
      }
        console.log(co2EmissionenProStunde);
        console.log(anzahlstromkwh);
        // Berechnung der CO2 Emissionen in g pro Jahr
        co2Emissionenwohnen = anzahlstromkwh * co2EmissionenProStunde;
      
        switch (heizform) {
        case 'heizoel':
          co2EmissionenProKwh = 260; // Menge CO2 für eine kwh Heizöl
          break;
        case 'erdgas':
          co2EmissionenProKwh = 230; // Menge CO2 für eine kwh Erdgas
          break;
        case 'brennholz':
          co2EmissionenProKwh = 575; // Menge CO2 für eine kwh Brennholz
          break;
        case 'strom':
          co2EmissionenProKwh = 420; // Menge CO2 für eine kwh Strom
          break;
        default:
          co2EmissionenProKwh = 0;
      }
        console.log(co2EmissionenProKwh);
        console.log(heizkwh);
        // Berechnung der CO2 Emissionen in g pro Jahr
        co2Emissionenwohnen += heizkwh * co2EmissionenProKwh;

      return co2Emissionenwohnen / anzahlpersonen;
      }



// Anruf der Funktion
document.getElementById('button-berechnen').addEventListener('click', function () {
  const anzahlpersonen = parseInt(document.getElementById('anzahlp').value);
  const anzahlstromkwh = parseInt(document.getElementById('anzahlstromkwh').value);
  const strommix = document.getElementById('strommix').value;
  const heizform = document.getElementById('heizform').value;
  const heizkwh = parseInt(document.getElementById('heizkwh').value);

  const co2berechnung = co2berechnungwohnen(anzahlpersonen, anzahlstromkwh, strommix, heizform, heizkwh);
  console.log('Geschätzte CO2-Emissionen für die Wohn-Nutzung:', co2berechnung);
});

// Definieren Sie eine GET-Route für q4.html
app.get('/q4', (req, res) => {
  // Verwenden Sie path.join, um den vollständigen Pfad zur q4.html zu erstellen
  const filePath = path.join(__dirname, + '../../../q4.html');
  res.sendFile(filePath);})
