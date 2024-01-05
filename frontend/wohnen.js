function calculateCO2perKwh(strommix, durationInKwh) {
    // CO2-Emissionen in Gramm pro Stunde für verschiedene Aktivitäten
    const emissionsPerKwh = {
      erneuerbar: 0, // Durchschnittswert Gramm Co2
      ausgeglichen: 300, // Durchschnittswert Gramm Co2
      gas: 500, // Durchschnittswert Gramm Co2
      kohle: 900, // Durchschnittswert Gramm Co2
    };
  
    
    // Überprüfe, ob die Aktivität in den CO2-Werten enthalten ist
    if (strommix in emissionsPerKwh) {
      // Berechne die CO2-Emissionen für die angegebene Dauer
      const totalCO2 = emissionsPerKwh[strommix] * durationInKwh;
      return totalCO2.toFixed(2); // Begrenze die Anzahl der Dezimalstellen
    } else {
      return "Aktivität nicht gefunden";
    }
  }

  function calculateCO2perkwh(heizform, durationInkwh) {
    // CO2-Emissionen in Gramm pro Jahr für verschiedene Aktivitäten
    const emissionsPerkwh = {
      heizöl: 260, // Durchschnittswert Co2 pro kwh
      erdgas: 230, // Durchschnittswert Co2 pro kwh
      brennholz: 575, // Durchschnitsswert Co2 pro kwh
      strom: 420, // Durchschnittswert Co2 pro kwh
    }

     // Überprüfe, ob die Aktivität in den CO2-Werten enthalten ist
     if (heizform in emissionsPerkwh) {
      // Berechne die CO2-Emissionen für die angegebene Dauer
      const totalCO2 = emissionsPerkwh[heizform] * durationInkwh;
      return totalCO2.toFixed(2); // Begrenze die Anzahl der Dezimalstellen
    } else {
      return "Aktivität nicht gefunden";
    }
  }; 
  
  var anzahlp = document.getElementById('anzahlp');
  anzahlpb.addEventListener('click', function (){
    anzahlp = "anzahlp";
    console.log(anzahlp);
  });

  var anzahlstromkwh=0
  document.getElementById('anzahlstromkwhb').addEventListener('click', function (){
    let anzahlstromkwh = document.getElementById ('anzahlstromkwh').value;
    console.log(anzahlstromkwh);
  });
  
  var strommix = "";

  var erneuerbar = document.getElementById('strommixerneuerbar');
  erneuerbar.addEventListener('click', function () {
    strommix = "strommixerneuerbar";
    console.log(strommix);
  });

  var gas = document.getElementById('strommixgas');
  gas.addEventListener('click', function () {
    strommix = "strommixgas";
    console.log(strommix);
  });

  var kohle = document.getElementById('strommixkohle');
  kohle.addEventListener('click', function () {
    strommix = "strommixkohle";
    console.log(strommix);
  });

  var ausgeglichen = document.getElementById('strommixausgeglichen');
  ausgeglichen.addEventListener('click', function () {
    strommix = "strommixausgeglichen";
    console.log(strommix);
  });

  var anzahlheizkwh=0
  document.getElementById('anzahlheizkwhb').addEventListener('click', function (){
    let anzahlstromkwh = document.getElementById ('anzahlheizkwh').value;
    console.log(anzahlstromkwh);
  });

  var heizform = "";

  var heizoel = document.getElementById('heizformheizoel');
    heizoel.addEventListener('click', function () {
    heizform = "heizformheizoel";
    console.log(heizform);
  });

  var erdgas = document.getElementById('heizformerdgas');
  erdgas.addEventListener('click', function () {
    heizform = "heizformerdgas";
    console.log(heizform);
  });

  var brennholz = document.getElementById('heizformbrennholz');
  brennholz.addEventListener('click', function () {
    heizform = "heizformbrennholz";
    console.log(heizform);
  });

  var strom = document.getElementById('heizformstrom');
  strom.addEventListener('click', function () {
    heizform = "heizformstrom";
    console.log(heizform);
  });
 
  function co2berechnung(anzahlp, anzahlheizkwh, anzahlstromkwh, strommix, heizform){
    let co2EmissionenProKwh; // CO2-Emissionen pro kwh
    let genutztestromkwh; // angegebene strom kwh pro Jahr
    let genutzteheizkwh; // angegebene heiz kwh pro Jahr
    let co2Emissionenstrom; // Gesamte CO2-Emissionen Strom pro Jahr
    let co2Emissionenheiz; // Gesamte CO2-Emissionen Heiz pro Jahr
    let gesamtEmissionen; // Gesamte CO2-Emissionen im Bereich Wohnen

    if (strommix === 'erneuerbar') {
       co2EmissionenProKwh = 0; // Menge für erneuerbaren Strommix in g CO2 pro kwh
    } else if (strommix === 'ausgeglichen') {
      co2EmissionenProKwh = 300; // Menge für ausgegeglichenen Strommix in g CO2 pro kwh
    } else if (strommix === 'gas') {
      co2EmissionenProKwh = 500; // Menge für einen Strommix mit dem Großteil an Gas in g CO2 pro kwh
    }  else if (strommix === 'kohle') {
      co2EmissionenProKwh = 900; // Menge für einen Strommix mit dem Großteil an Kohle in g CO2 pro kwh
    }

    if (heizform === 'heizoel') {
      co2EmissionenProKwh = 260; // Menge CO2 für eine kwh Heizöl
    }  else if (heizform === 'erdgas') {
      co2EmissionenProKwh = 230; // Menge CO2 für eine kwh Erdgas
    }  else if (heizform === 'brennholz') {
      co2EmissionenProKwh = 575; // Menge CO2 für eine kwh Brennholz
    }  else if (heizform === 'strom') {
      co2EmissionenProKwh = 420; // Menge CO2 für eine kwh Strom
      }
      }

    // Berechnung der CO2 Emissionen in g pro Jahr
    co2Emissionenstrom = genutztestromkwh * co2EmissionenProKwh;

    return co2Emissionenstrom;

    co2Emissionenheiz = genutzteheizkwh * co2EmissionenProKwh;

    return co2Emissionenheiz;


    return gesamtEmissionen;

// Anruf der Funktion
const gesamtEmissionen = co2berechnung(anzahlp, anzahlheizkwh, anzahlstromkwh, strommix, heizform);
console.log('Geschätzte CO2-Emissionen für den Bereich Wohnen:' , gesamtEmissionen , 'g CO2 pro Jahr');
