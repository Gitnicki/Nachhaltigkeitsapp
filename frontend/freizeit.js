// window.onload = function () {
//   showPopup();
// }

// function showPopup() {
//   document.getElementById('overlay').style.display = 'block';
//   document.getElementById('popup').style.display = 'block';
// }

// function closePopup() {
//   document.getElementById('overlay').style.display = 'none';
//   document.getElementById('popup').style.display = 'none';
// }

// Hier werden allgemeine Durchschnittswerte verwendet.

const container = document.getElementsByClassName('container mt-4');
var gaming = "";

var dropdownvalue = document.getElementById('dropdownisgaming').value;



var standPC = document.getElementById('standpc');
document.addEventListener('click', function () {
  gaming = "standPC";
})
var Laptop = document.getElementById('gaminglaptop');
document.addEventListener('click', function () {
  gaming = "Laptop";
})
var NintendoSwitch = document.getElementById('nintendo');
document.addEventListener('click', function () {
  gaming = "NintendoSwitch";
})
var XboxOne = document.getElementById('xbox');
document.addEventListener('click', function () {
  gaming = "XboxOne";
})
var PS5 = document.getElementById('ps5');
document.addEventListener('click', function () {
  gaming = "PS5";
})
var PS4 = document.getElementById('ps4');
document.addEventListener('click', function () {
  gaming = "PS4";
})
var streaming = "";
document.getElementById('streamingh').addEventListener('click', function () {
  streaming = "streamingh";
});

// Funktion zur Berechnung der CO2-Emissionen für die Auto-Nutzung
function co2berechnungperHour(gaming, gamingHours, dropdownvalue) {
  let co2EmissionenProStunde; // CO2-Emissionen pro Stunde
  let co2Emissionen; // Gesamte CO2-Emissionen pro Woche
    if (dropdownvalue === "Ja") {
      if (gaming === 'standpc') {
          co2EmissionenProStunde = 210; 
      } else if (gaming === 'gaminglaptop') {
          co2EmissionenProStunde = 101; 
      } else if (gaming === 'nintendo') {
          co2EmissionenProStunde = 5;  
      } else if (gaming === 'ps5') {
          co2EmissionenProStunde = 90;  
      } else if (gaming === 'ps4') {
          co2EmissionenProStunde = 69; 
      } else if (gaming === 'xbox') {
          co2EmissionenProStunde = 63; 
      }
      // Berechnung der Gesamten CO2-Emissionen pro Woche
      co2Emissionen = gamingHours * co2EmissionenProStunde;

    }
      
  // } else if (streaming === 'streaming') {
  //   co2EmissionenProStunde = 130;
  //     co2Emissionen = streamingh * co2EmissionenProStunde;
  // } else if (socialmedia === 'socialmedia') {
  //   co2EmissionenProStunde = 138;
  //     co2Emissionen = socialh * co2EmissionenProStunde;
  // }
  return co2Emissionen; // Brgrenze die Anzahl der Dezimalstellen
}

document.getElementById('gaminghb').addEventListener('click', () => {
  const gamingHours = parseInt(document.getElementById('gamingh').value);
  console.log(gamingHours);
});

// function savegaminghours() {
//   const gamingHours = document.getElementById('gamingh').innerHTML;
//   console.log('gaminghours, ', gamingHours);
// };

function calculateCO2perHour(activity, durationInHours) {
    // CO2-Emissionen in Gramm pro Stunde für verschiedene Aktivitäten
    const emissionsPerHour = {
      standPC: 210, // Durchschnittswert Stand PC
      Laptop: 101, // Durchschnittswert Laptop
      NintendoSwitch: 5, // Durchschnittswert NintendoSwitch
      XboxOne: 63, // Durchschnittswert XboxOne
      PS5: 90, // Durchschnittswert PS5
      PS4: 69, // Durchschnittswert PS4
      streaming: 130, // Durchschnittswert im Streaming
      socialMedia: 138, // Durchschnittswert im Social Media    

    };
    
    
    // Überprüfe, ob die Aktivität in den CO2-Werten enthalten ist
    if (activity in emissionsPerHour) {
      // Berechne die CO2-Emissionen für die angegebene Dauer
      const totalCO2 = emissionsPerHour[activity] * durationInHours;
      return totalCO2.toFixed(2); // Begrenze die Anzahl der Dezimalstellen
    } else {
      return "Aktivität nicht gefunden";
    }
  }

  function calculateCO2perYear(activity, durationInYears) {
    // CO2-Emissionen in Gramm pro Jahr für verschiedene Aktivitäten
    const emissionsPerYear = {
      zeitungP: 91250, // Durchschnittswert Zeitung pro Jahr
      zeitungD: 54750, // Durchschnittswert Zeitung pro Jahr
      hund: 725000, // Durchschnittswert pro Jahr
      katze: 400000, // Durchschnittswert pro Jahr
      pferd: 3100000, // Durchschnittswert pro Jahr
      kleintier: 100000, // Durchschnittswert pro Jahr
      vogel: 25000, // Durchschnitsswert pro Jahr
    }

     // Überprüfe, ob die Aktivität in den CO2-Werten enthalten ist
     if (activity in emissionsPerYear) {
      // Berechne die CO2-Emissionen für die angegebene Dauer
      const totalCO2 = emissionsPerYear[activity] * durationInYears;
      return totalCO2.toFixed(2); // Begrenze die Anzahl der Dezimalstellen
    } else {
      return "Aktivität nicht gefunden";
    }
  };  
  
  // Beispielaufruf
  const gamingh = document.getElementById("gamingh");
  const co2standPC = calculateCO2perHour("standPC", gamingh);
  console.log(`CO2-Emissionen beim Zocken am StandPC für 2 Stunden: ${co2standPC} Gramm`);
  
  const co2Laptop = calculateCO2perHour("Laptop", 2);
  console.log(`CO2-Emissionen beim Zocken am Laptop für 1 Stunde: ${co2Laptop} Gramm`);

  const co2NintendoSwitch = calculateCO2perHour("NintendoSwitch", 1);
  console.log(`CO2-Emissionen beim Zocken an der NintendoSwitch für 1 Stunde: ${co2NintendoSwitch} Gramm`);

  const co2XboxOne = calculateCO2perHour("XboxOne", 1);
  console.log(`CO2-Emissionen beim Zocken an der XboxOne für 1 Stunde: ${co2XboxOne} Gramm`);

  const co2PS5 = calculateCO2perHour("PS5", 1);
  console.log(`CO2-Emissionen beim Zocken an der Playstation5 für 1 Stunde: ${co2PS5} Gramm`);

  const co2PS4 = calculateCO2perHour("PS4", 1);
  console.log(`CO2-Emissionen beim Zocken an der Playstation4 für 1 Stunde: ${co2PS4} Gramm`);

  const co2streaming = calculateCO2perHour("streaming", 1);
  console.log(`CO2-Emissionen beim Streaming für 1 Stunde: ${co2streaming} Gramm`);

  const co2socialMedia = calculateCO2perHour("socialMedia", 1);
  console.log(`CO2-Emissionen beim Nutzen von Social Media für 1 Stunde: ${co2socialMedia} Gramm`);

//Anruf der Funktion
document.getElementById('button-berechnen').addEventListener('click', function () {
  const co2berechnung = co2berechnungperHour(gaming , gamingh);
  console.log('Geschätzte CO2-Emissionen für die Gaming-Nutzung:', co2berechnung);
  });
  //Beispielaufruf der Funktion
  // const autoCO2Emissionen = co2berechnung('Auto', 'Benzin', 7.5, 15000, null);
  // console.log('Geschätzte CO2-Emissionen für die Auto-Nutzung:', autoCO2Emissionen, 'g CO2 pro Jahr');
  



// // Event-Handler für Button, um CO2 pro Stunde zu berechnen
//     document.getElementById('calculateHourBtn').addEventListener('click', function () {
//         // Werte aus den Eingabefeldern abrufen
//         var activity = document.getElementById('activity').value;
//         var duration = parseFloat(document.getElementById('duration').value);

//         // Überprüfen, ob die Dauer eine gültige Zahl ist
//         if (!isNaN(duration)) {
//             // JavaScript-Funktion aufrufen und Ergebnis anzeigen
//             var result = calculateCO2perHour(activity, duration);
//             console.log(`CO2-Emissionen für ${activity} in ${duration} Stunden: ${result} Gramm`);
//         } else {
//             console.error('Ungültige Eingabe für Dauer');
//         }
//     });




