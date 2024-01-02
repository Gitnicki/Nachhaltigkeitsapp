
// Mustache.js
// var template = "{{name}} is {{age}} years old.";
// var data = { name: "John", age: 30 };
// var rendered = Mustache.render(template, data);

window.onload = function () {
    showPopup();
}

function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}