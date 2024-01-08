
// Mustache.js
// var template = "{{name}} is {{age}} years old.";
// var data = { name: "John", age: 30 };
// var rendered = Mustache.render(template, data);

const fs = require('fs');

// Express importieren
const express = require('express');

// Express initialisieren
const app = express();

// Port definieren (optional)
const port = 3000;

// CORS (Cross Origin Ressource Sharing) aktivieren
const cors = require('cors');

// MySQL als Konstante
const mysql = require('mysql2');

//dotenv package initialisieren
const { config } = require('dotenv');

// localhost listen port app 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

