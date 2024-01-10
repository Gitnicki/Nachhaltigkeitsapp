function co2berechnungernaehrung(ernaehrungsart) {
  let co2EmissionenimJahr = 0;

  switch (ernaehrungsart) {
    case 'vegan':
      co2EmissionenimJahr = 1500000; // g Co2
      break;
    case 'vegetarisch':
      co2EmissionenimJahr = 1800000; // g Co2
      break;
    case 'fleischesser':
      co2EmissionenimJahr = 3600000; // g Co2
      break;
    default:
      co2EmissionenimJahr = 0;
  } 
  console.log(co2EmissionenimJahr);
  return co2EmissionenimJahr;
};

// Anruf der Funktion
document.getElementById('button-berechnen').addEventListener('click', function () {
  const ernaehrungsart = document.getElementById('ernaehrungsart').value;

  const co2berechnung = co2berechnungernaehrung(ernaehrungsart);
  console.log('Geschätzte CO2-Emissionen für die Ernährung:', co2berechnung);
});
  
