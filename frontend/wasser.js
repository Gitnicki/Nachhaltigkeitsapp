document.addEventListener('DOMContentLoaded', function () {
  const sliderwaschmaschine = document.getElementById('sliderwaschmaschine');
  const slidergeschirrspueler = document.getElementById('slidergeschirrspueler');
  const sliderduschen = document.getElementById('sliderduschen');
  const sliderbaden = document.getElementById('sliderbaden');
  const sliderreinigen = document.getElementById('sliderreinigen');
  const slidergarten = document.getElementById('slidergarten');
  const sliderkochen = document.getElementById('sliderkochen');
  const sliderValuewaschmaschine = document.getElementById('sliderValuewaschmaschine');
  const sliderValuegeschirrspueler = document.getElementById('sliderValuegeschirrspueler');
  const sliderValueduschen = document.getElementById('sliderValueduschen');
  const sliderValuebaden = document.getElementById('sliderValuebaden');
  const sliderValuereinigen = document.getElementById('sliderValuereinigen');
  const sliderValuegarten = document.getElementById('sliderValuegarten');
  const sliderValuekochen = document.getElementById('sliderValuekochen');

  // Funktion zur Aktualisierung des Slider-Werts
  function updateSliderValue() {
    sliderValuewaschmaschine.textContent = sliderwaschmaschine.value;
    sliderValuegeschirrspueler.textContent = slidergeschirrspueler.value;
    sliderValueduschen.textContent = sliderduschen.value;
    sliderValuebaden.textContent = sliderbaden.value;
    sliderValuereinigen.textContent = sliderreinigen.value;
    sliderValuegarten.textContent = slidergarten.value;
    sliderValuekochen.textContent = sliderkochen.value;
  }

  // Event-Listener für den Slider
  sliderwaschmaschine.addEventListener('input', updateSliderValue);
  slidergeschirrspueler.addEventListener('input', updateSliderValue);
  sliderduschen.addEventListener('input', updateSliderValue);
  sliderbaden.addEventListener('input', updateSliderValue);
  sliderreinigen.addEventListener('input', updateSliderValue);
  slidergarten.addEventListener('input', updateSliderValue);
  sliderkochen.addEventListener('input', updateSliderValue);
});


function calculateLitreperUse(activity, durationInUses) {
    // CO2-Emissionen in Gramm pro Stunde für verschiedene Aktivitäten
    const litrePerUse = {
      waschmaschine: 75, // Liter pro Waschgang
      spülmaschine: 15, // Liter pro Spülgang
      duschen: 14, // Liter pro Duschgang
      baden: 175, // Liter pro Badevorgang
      haushalt: 26, // Liter pro Reinigung
      garten: 26, // Liter pro Pflege
      ernährung: 5, // Liter pro Tag, an welchem selbst gekocht wird
    };
  
    
    // Überprüfe, ob die Aktivität in den Verbräuchen enthalten ist
    if (activity in litrePerUse) {
      // Berechne die CO2-Emissionen für die angegebene Dauer
      const totalLitre = litrePerUse[activity] * durationInUses;
      return totalLitre.toFixed(2); // Begrenze die Anzahl der Dezimalstellen
    } else {
      return "Aktivität nicht gefunden";
    }
  }

  // Beispielaufruf
  const litrewaschmaschine = calculateLitreperUse("waschmaschine", 2);
  console.log(`Wasserverbrauch pro Vorgang : ${litrewaschmaschine} Liter`);
  
  const litrespülmaschine = calculateLitreperUse("spülmaschine", 2);
  console.log(`Wasserverbrauch pro Vorgang : ${litrespülmaschine} Liter`);

  const litreduschen = calculateLitreperUse("duschen", 5);
  console.log(`Wasserverbrauch pro Vorgang : ${litreduschen} Liter`);

  const litrebaden = calculateLitreperUse("baden", 10);
  console.log(`Wasserverbrauch pro Vorgang : ${litrebaden} Liter`);

  const litrehaushalt = calculateLitreperUse("haushalt", 2);
  console.log(`Wasserverbrauch pro Vorgang : ${litrehaushalt} Liter`);

  const litregarten = calculateLitreperUse("garten", 2);
  console.log(`Wasserverbrauch pro Vorgang : ${litregarten} Liter`);

  const litreernährung = calculateLitreperUse("ernährung", 2);
  console.log(`Wasserverbrauch pro Vorgang : ${litreernährung} Liter`);