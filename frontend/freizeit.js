// Funktion zur Berechnung der CO2-Emissionen für die Freizeit-Nutzung
function co2berechnungperHour(gamingHours, dropdownvalue, platform, dropdownisstreaming, streamingHours, dropdownissocialmedia, socialHours, dropdowniszeitung, dropdowniszeitungdp) {
  let co2EmissionenProStunde; // CO2-Emissionen pro Stunde
  let co2EmissionenProNutzung; // CO2-Emissionen pro Nutzung der Zeitung
  let co2Emissionen = 0; // Gesamte CO2-Emissionen pro Woche
    if (dropdownvalue === "Ja") {
      if (platform === 'standpc') {
          co2EmissionenProStunde = 210; 
      } else if (platform === 'gaminglaptop') {
          co2EmissionenProStunde = 101; 
      } else if (platform === 'nintendo') {
          co2EmissionenProStunde = 5;  
      } else if (platform === 'ps5') {
          co2EmissionenProStunde = 90;  
      } else if (platform === 'ps4') {
          co2EmissionenProStunde = 69; 
      } else if (platform === 'xbox') {
          co2EmissionenProStunde = 63; 
      }
      console.log(gamingHours);
      console.log(co2EmissionenProStunde);
      // Berechnung der Gesamten CO2-Emissionen pro Woche
      co2Emissionen = gamingHours * co2EmissionenProStunde;
      if (dropdownisstreaming === "Ja") {
        console.log(streamingHours);
        co2Emissionen += 130 * streamingHours;
      }
      if (dropdownissocialmedia === "Ja") {
        console.log(socialHours);
        co2Emissionen += 138 * socialHours;
      }
      if (dropdowniszeitung === "Ja") {
        if (dropdowniszeitungdp === 'Digital') {
          co2EmissionenProNutzung = 150; 
      } else if (dropdowniszeitungdp === 'Print') {
          co2EmissionenProNutzung = 250; 
      }
      co2Emissionen += co2EmissionenProNutzung * 7;
    }
  
    }
    if (dropdownisstreaming === "Ja") {
      console.log(streamingHours);
      co2Emissionen += 130 * streamingHours;

      if (dropdownissocialmedia === "Ja") {
        console.log(socialHours);
        co2Emissionen += 138 * socialHours;
      }
      if (dropdowniszeitung === "Ja") {
        if (dropdowniszeitungdp === 'Digital') {
          co2EmissionenProNutzung = 150; 
      } else if (dropdowniszeitungdp === 'Print') {
          co2EmissionenProNutzung = 250; 
      }
      co2Emissionen += co2EmissionenProNutzung * 7;
    }
    }

    if (dropdownissocialmedia === "Ja") {
      console.log(socialHours);
      co2Emissionen += 138 * socialHours;

      if (dropdowniszeitung === "Ja") {
        if (dropdowniszeitungdp === 'Digital') {
          co2EmissionenProNutzung = 150; 
      } else if (dropdowniszeitungdp === 'Print') {
          co2EmissionenProNutzung = 250; 
      }
      co2Emissionen += co2EmissionenProNutzung * 7;
    }
    }

    if (dropdowniszeitung === "Ja") {
      if (dropdowniszeitungdp === 'Digital') {
        co2EmissionenProNutzung = 150; 
    } else if (dropdowniszeitungdp === 'Print') {
        co2EmissionenProNutzung = 250; 
    }
    co2Emissionen += co2EmissionenProNutzung * 7;
  }

      
  console.log(co2Emissionen);
  return co2Emissionen; // Brgrenze die Anzahl der Dezimalstellen
}


//Anruf der Funktion
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
  const co2berechnung = co2berechnungperHour(gamingHours, dropdownvalue, platform, dropdownisstreaming, streamingHours, dropdownissocialmedia, socialHours, dropdowniszeitung, dropdowniszeitungdp);
  console.log('Geschätzte CO2-Emissionen für die Gaming-Nutzung:', co2berechnung);
  });





