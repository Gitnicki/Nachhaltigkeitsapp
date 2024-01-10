// Funktion zur Berechnung der CO2-Emissionen für die Freizeit-Nutzung
function co2berechnungperHour(gamingHours, dropdownvalue, platform, dropdownisstreaming, streamingHours, dropdownissocialmedia, socialHours, dropdowniszeitung, dropdowniszeitungdp, dropdownistiere, dropdownwelchestier, dropdownanzahltiere) {
  let co2EmissionenProStunde; // CO2-Emissionen pro Stunde
  let co2EmissionenProNutzung; // CO2-Emissionen pro Nutzung der Zeitung
  let co2EmissionenProTier; // Co2-Emissionen pro Tier auf ein Jahr
  let co2Emissionenfreizeit = 0; // Gesamte CO2-Emissionen pro Woche

  if (dropdownvalue === "Ja") {
    switch (platform) {
      case 'standpc':
        co2EmissionenProStunde = 210;
        break;
      case 'gaminglaptop':
        co2EmissionenProStunde = 101;
        break;
      case 'nintendo':
        co2EmissionenProStunde = 5;
        break;
      case 'ps5':
        co2EmissionenProStunde = 90;
        break;
      case 'ps4':
        co2EmissionenProStunde = 69;
        break;
      case 'xbox':
        co2EmissionenProStunde = 63;
        break;
      default:
        co2EmissionenProStunde = 0;
    }

    console.log(gamingHours);
    console.log(co2EmissionenProStunde);

    // Berechnung der Gesamten CO2-Emissionen pro Woche
    co2Emissionenfreizeit = gamingHours * co2EmissionenProStunde;

    if (dropdownisstreaming === "Ja") {
      console.log(streamingHours);
      console.log(130);
      co2Emissionenfreizeit += 130 * streamingHours;
    }
    
    if (dropdownissocialmedia === "Ja") {
      console.log(socialHours);
      console.log(138);
      co2Emissionenfreizeit += 138 * socialHours;
    }

    if (dropdowniszeitung === "Ja") {
      co2EmissionenProNutzung = (dropdowniszeitungdp === 'Digital') ? 150 : 250;
      console.log(co2EmissionenProNutzung);
      co2Emissionenfreizeit += co2EmissionenProNutzung * 7;
    }

    if (dropdownistiere === "Ja") {
      switch (dropdownwelchestier) {
        case 'Hund':
          co2EmissionenProTier = 725000;
          break;
        case 'Katze':
          co2EmissionenProTier = 400000;
          break;
        case 'Kleintier':
          co2EmissionenProTier = 100000;
          break;
        case 'Pferd':
          co2EmissionenProTier = 3100000;
          break;
        case 'Vogel':
          co2EmissionenProTier = 25000;
          break;
        default:
          co2EmissionenProTier = 0;
      }
      console.log(co2EmissionenProTier);
      console.log(dropdownanzahltiere);
      co2Emissionenfreizeit += co2EmissionenProTier * dropdownanzahltiere;
    }
  }

  console.log(co2Emissionenfreizeit);
  return co2Emissionenfreizeit;
}

// Anruf der Funktion
document.getElementById('button-berechnen').addEventListener('click', function () {
  const dropdownvalue = document.getElementById('dropdownisgaming').value;
  const platform = document.getElementById('platform').value;
  const gamingHours = parseInt(document.getElementById('gamingh').value);
  const dropdownisstreaming = document.getElementById('dropdownisstreaming').value;
  const streamingHours = parseInt(document.getElementById('streamingh').value);
  const dropdownissocialmedia = document.getElementById('dropdownissocialmedia').value;
  const socialHours = parseInt(document.getElementById('socialh').value);
  const dropdowniszeitung = document.getElementById('dropdowniszeitung').value;
  const dropdowniszeitungdp = document.getElementById('dropdowniszeitungdp').value;
  const dropdownistiere = document.getElementById('dropdownistiere').value;
  const dropdownwelchestier = document.getElementById('dropdownwelchestier').value;
  const dropdownanzahltiere = parseInt(document.getElementById('dropdownanzahltiere').value);

  const co2berechnungfreizeit = co2berechnungperHour(gamingHours, dropdownvalue, platform, dropdownisstreaming, streamingHours, dropdownissocialmedia, socialHours, dropdowniszeitung, dropdowniszeitungdp, dropdownistiere, dropdownwelchestier, dropdownanzahltiere);
  console.log('Geschätzte CO2-Emissionen für die Gaming-Nutzung:', co2berechnungfreizeit);
});

// Definieren Sie eine GET-Route für q2.html
app.get('/q2', (req, res) => {
  // Verwenden Sie path.join, um den vollständigen Pfad zur q2.html zu erstellen
  const filePath = path.join(__dirname, + '../../../../q2.html');
  res.sendFile(filePath);})
