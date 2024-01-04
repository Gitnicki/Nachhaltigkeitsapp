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
  const co2standPC = calculateCO2perHour("standPC", 2);
  console.log(`CO2-Emissionen beim Zocken am StandPC für 2 Stunden: ${co2standPC} Gramm`);
  
  const co2Laptop = calculateCO2perHour("Laptop", 1);
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

  
  



