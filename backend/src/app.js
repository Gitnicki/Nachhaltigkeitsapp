
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

// Check if the .env file exists
if (config().parsed == undefined) {
    console.error('Error: .env file is missing (copy/adapt .env.example and rename it to .env)');
    process.exit(1); // Exit the process with an error code
}


// Debug-Ausgabe für Umgebung
if (process.env.ENABLE_DEBUG == "TRUE") {
    console.log("env:", process.env);
}

// CORS Options definieren
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Express mit Json Req/Res aktivieren
app.use(express.json(), cors(corsOptions));

// This will catch unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Datenbank Verbindung mit Umgebungsvariablen
function getConnection() {
    const requiredEnvVariables = ['DB_HOST', 'DB_USER', 'DB_PASSWORD', 'DB_NAME'];
    const missingVariables = requiredEnvVariables.filter(key => !process.env[key]);
    if (missingVariables.length > 0)
        console.error(`Error: Missing required environment variables: ${missingVariables.join(', ')}`);
    try {
        var cnx = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });


    } catch (error) {
        console.error("Database connection error", error);
    }

    // run sample query to check DB setup
    // try to execute code that might fail
    try {
        cnx.query('SELECT * FROM abdruck;', function (error, results, fields) {
            if (error) {
                console.log("mySQL Error:", error);
                process.exit(1); // exit
            } else {
                console.log("SQL Connection Self-Check: Ok");
                console.log("DB Connection set up successfully");
                console.log('Connected to MySQL as id ' + cnx.threadId);
            }
        });
    } catch (error) {
        // An error occurred
        console.error("SQL Schema Error: Could not retrieve co2 (see sql-scripts for DB setup)", error);
    }
    return cnx;
}
const cnx = getConnection(); 
// http://localhost:3000/
app.get('/', function(req, res) {
	// Render login template
	res.sendFile(path.join(__dirname + '/login.html'));
});
//sign up route
app.post('/register', (req, res) => {
    const { benutzername, passwort, email } = req.body;
    console.log("req:", req.body);
        if (benutzername && passwort && email){
            cnx.query('SELECT * FROM users WHERE benutzername = ? OR email = ?', [benutzername, email], function (error, results, fields) {
                if (error) {
                    console.error("Fehler bei der Überprüfung des vorhandenen Benutzers : ", error);
                    return res.status(500).send('Fehler beim Server');
                } else {
                    if (results.length > 0) {
                        return res.status(400).send('Benutzername oder e-mail schon verwendet');
                    } else {
                        cnx.query('INSERT INTO users (benutzername, passwort, email) VALUES (?, ?, ?)', [benutzername, passwort, email], function (error, result) {
                            if (error) {
                                console.error("Fehler bei der Benutzerserstellung : ", error);
                                return res.status(500).send('Fehler beim Server');
                            } else {
                                return res.status(201).send('Benutzer erfolgreich erstellt ');
                            }
                        });
                    }
                }
            });
        } else {
            return res.status(400).send('Veuillez fournir des informations valides pour l\'inscription');
        }
    } catch (error) {
        console.error("Une erreur s'est produite : ", error);
        return res.status(500).send('Erreur interne du serveur');
    }
});


//login route
app.post('/login', (req, res) => {
    try {
        const { benutzername, passwort } = req.body;
        console.log("req:", req.body);
        if (benutzername && passwort){
            cnx.query('SELECT * FROM users WHERE benutzername = ? AND passwort = ?', [benutzername, passwort], function (error, results ,fields) {
                if (error) throw error;
                if (results.length > 0) {
                    req.session.loggedin = true;
				    req.session.benutzername = benutzername;
                    res.redirect('/home');
                } else {
                    res.send('Falscher Benutzername und/oder Passwort!');
                }			
            });
        } else {
            res.send('Bitte Benutzername and Passwort eingeben!');
            res.end();
        }
    }catch (error) {
        // Es ist ein Fehler aufgetreten!
        console.error("Could not retrieve ", error);
        return res.status(500).send('Fehler beim Server!');
        res.end();
    }
    
});

// localhost listen port app 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

