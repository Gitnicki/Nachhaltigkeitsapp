function calculateCO2perGramm(ernährung, durationInG) {
    // CO2-Emissionen in Gramm pro Stunde für verschiedene Aktivitäten
    const CO2PerG = {
      vegan: 1500000, // g Co2
      vegetarisch: 1800000, // g Co2
      fleischesser: 3600000, // g Co2
    };
  
    
    // Überprüfe, ob die Aktivität in den Verbräuchen enthalten ist
    if (ernährung in CO2PerG) {
      // Berechne die CO2-Emissionen für die angegebene Ernährungsform
      const totalG = CO2PerG[ernährung] * durationInG;
      return totalG.toFixed(2); // Begrenze die Anzahl der Dezimalstellen
    } else {
      return "Aktivität nicht gefunden";
    }
  }

  // Beispielaufruf
  const Grammvegan = calculateCO2perGramm("vegan", 1);
  console.log(`Co2 Verbrauch pro Jahr : ${Grammvegan} g/Co2`);
  
  const Grammvegetarisch = calculateCO2perGramm("vegetarisch", 1);
  console.log(`Co2 Verbrauch pro Jahr : ${Grammvegetarisch} g/Co2`);

  const Grammfleischesser = calculateCO2perGramm("fleischesser", 1);
  console.log(`Co2 Verbrauch pro Jahr : ${Grammfleischesser} g/Co2`);