// Slider
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

function waterperUse(sliderwaschmaschinew, slidergeschirrspuelerw, sliderduschenw, sliderbadenw, sliderreinigenw, slidergartenw, sliderkochenw) {
    // Berechnung des Wasserverbrauchs
    Wasserverbrauch = sliderwaschmaschinew * 75;
    console.log(sliderwaschmaschinew);
    console.log(Wasserverbrauch);

    Wasserverbrauch += slidergeschirrspuelerw * 15;
    console.log(slidergeschirrspuelerw);
    console.log(Wasserverbrauch);

    Wasserverbrauch += sliderduschenw * 14;
    console.log(sliderduschenw);
    console.log(Wasserverbrauch);

    Wasserverbrauch += sliderbadenw * 175;
    console.log(sliderbadenw);
    console.log(Wasserverbrauch);

    Wasserverbrauch += sliderreinigenw * 26;
    console.log(sliderreinigenw);
    console.log(Wasserverbrauch);

    Wasserverbrauch += slidergartenw * 26;
    console.log(slidergartenw);
    console.log(Wasserverbrauch);

    Wasserverbrauch += sliderkochenw * 5;
    console.log(sliderkochenw);
    console.log(Wasserverbrauch);

  return Wasserverbrauch;

};

// Anruf der Funktion
document.getElementById('button-berechnen').addEventListener('click', function () {
  const sliderwaschmaschinew = parseInt(document.getElementById('sliderwaschmaschine').value);
  const slidergeschirrspuelerw = parseInt(document.getElementById('slidergeschirrspueler').value);
  const sliderduschenw = parseInt(document.getElementById('sliderduschen').value);
  const sliderbadenw = parseInt(document.getElementById('sliderbaden').value);
  const sliderreinigenw = parseInt(document.getElementById('sliderreinigen').value);
  const slidergartenw = parseInt(document.getElementById('slidergarten').value);
  const sliderkochenw = parseInt(document.getElementById('sliderkochen').value);

  const wasserverbrauch = waterperUse(sliderwaschmaschinew, slidergeschirrspuelerw, sliderduschenw, sliderbadenw, sliderreinigenw, slidergartenw, sliderkochenw);
  console.log('Geschätzte Wasser-Nutzung:', wasserverbrauch);
});

// Definieren Sie eine GET-Route für q3.html
app.get('/q3', (req, res) => {
  // Verwenden Sie path.join, um den vollständigen Pfad zur q3.html zu erstellen
  const filePath = path.join(__dirname, + '../../../q3.html');
  res.sendFile(filePath);})
