
// Mustache.js
// var template = "{{name}} is {{age}} years old.";
// var data = { name: "John", age: 30 };
// var rendered = Mustache.render(template, data);

// var mime = require('mime-types')

// Importieren Sie die routing.js-Datei
// const routing = require ("./routing.js");

// console.log("gefunden")
// Fügen Sie hier Ihren eigenen Code für die app.js hinzu, falls erforderlich
console.log("app.js wurde aufgerufen");

const bodyParser = require('body-parser');

const fs = require('fs');

// Express importieren
const express = require('express');

// Express initialisieren
const app = express();

// session express importieren
const session = require('express-session');

// Path importieren
const path = require('path');

// Port definieren (optional)
const port = 3000;

// CORS (Cross Origin Ressource Sharing) aktivieren
const cors = require('cors');

// MySQL als Konstante
const mysql = require('mysql2');

//dotenv package initialisieren
const { config } = require('dotenv');

app.use('/images', express.static(__dirname + '/static/images'));
// Stellen Sie sicher, dass der Server statische Dateien aus dem "images"-Ordner bereitstellt


app.use('/static', express.static(__dirname + '/static'));
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript');
        }
        if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
        }
    };
    // app.use('./', express.static(__dirname));
    // setHeaders: (res, path, stat) => {
    //     if (path.endsWith('.js')) {
    //     res.setHeader('Content-Type', 'application/javascript');
    //     }
    
    // };
app.use('/', express.static(__dirname + '../../../frontend/'));
setHeaders: (res, path, stat) => {
    if (path.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css');
    }
    };

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
        cnx.query('SELECT * FROM USERS;', function (error, results, fields) {
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

app.use('/', express.static(__dirname + '../../../frontend/'));

// http://localhost:3000/login
app.get('/login', function(req, res) {
	// Render login template
	res.sendFile(path.join(__dirname + './../../frontend/login.html'));
});
// http://localhost:3000/register
app.get('/register', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/register.html'));
});

// http://localhost:3000/home
app.get('/home', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/home.html'));
});

// http://localhost:3000/index
app.get('/index', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/index.html'));
});

// http://localhost:3000/impressum
app.get('/impressum', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/impressum.html'));
});

// http://localhost:3000/contact
app.get('/contact', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/contact.html'));
});

// http://localhost:3000/datenschutz
app.get('/datenschutz', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/datenschutz.html'));
});
// http://localhost:3000/q1
app.get('/q1', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/q1.html'));
});

// http://localhost:3000/q2
app.get('/q2', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/q2.html'));
});

// http://localhost:3000/q3
app.get('/q3', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/q3.html'));
});
// http://localhost:3000/q4
app.get('/q4', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/q4.html'));
});
// http://localhost:3000/q5
app.get('/q5', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/q5.html'));
});
// http://localhost:3000/co2
app.get('/co2', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/co2.html'));
});
// http://localhost:3000/zusammenfassung
app.get('/zusammenfassung', function(req, res) {
	// Render register template
	res.sendFile(path.join(__dirname + './../../frontend/zusammenfassung.html'));
});

// Express Session konfigurieren
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

//sign up route
app.post('/register', (req, res) => {
    const { benutzername, passwort, email } = req.body;
    console.log("req:", req.body);
    try{    

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
                                // return res.status(201).send('Benutzer erfolgreich erstellt ');
                                // return res.status(201).sendFile(path.join(__dirname, '../../register.html'));
                                // return res.status(201).redirect('/register.html?message=Benutzer%20erfolgreich%20erstellt');
                            //     const scriptTag = `
                            //     <script>
                            //         alert('Benutzer erfolgreich erstellt');
                            //         window.location.href = '/register';
                            //     </script>
                            // `;
                            // return res.status(201).send(scriptTag);
                            fs.readFile(path.join(__dirname, '/../../frontend/register.html'), 'utf8', function (err, data) {
                                if (err) {
                                    console.error("Fehler beim Lesen der Datei: ", err);
                                    return res.status(500).send('Fehler beim Server');
                                }
                                const scriptTag = `
                                    <script>
                                        alert('Benutzer erfolgreich erstellt');
                                    </script>
                                `;
                                const modifiedData = data.replace('</body>', `${scriptTag}</body>`);
                                res.status(201).send(modifiedData);
                                // res.redirect('/login');
                            });
                            
                            }
                        });
                    }
                }
            });
        } else {
            return res.status(400).send('Bitte gib die richtige Informationen ein');
        }
    } catch (error) {
        console.error("Ein Fehler ist aufgetreten : ", error);
        return res.status(500).send('Ein Fehler beim Server');
    }
    });


//login route
app.post('/login', (req, res) => {
    try {
        const { benutzername, passwort } = req.body;
        console.log("benutzername", benutzername);
        console.log("passwort",passwort);
        //console.log("req:", req.body);
        if (benutzername && passwort){
            cnx.query('SELECT * FROM users WHERE benutzername = ? AND passwort = ?', [benutzername, passwort], function (error, results ,fields) {
                if (error) throw error;
                if (results.length > 0) {
                    req.session.loggedin = true;
				    req.session.benutzername = benutzername;
                    res.redirect('/home');
                    const user_id = results[0].user_id;
                    console.log(user_id)
                    // const co2berechnungValues = {
                    //     user_id : user_id,
                    //     verkehresmittel : co2berechnungverkehr,
                    //     ernaehrung : 10, 
                    //     freizeitverbrauch : 10,
                    //     wasserverbrauch : 10,
                    //     haushaltverbrauch : 10,
                    //     gesamtverbrauch : 10,
                    // };
                    // cnx.query('INSERT INTO co2endberechnung SET ?', co2berechnungValues, function (error, results, fields) {
                    //     if (error) throw error;
                    // });
                } else {
                    res.send('Falscher Benutzername und/oder Passwort!');
                }			
            });
        } else {
            res.send('Bitte Benutzername und Passwort eingeben!');
            res.end();
        }
    }catch (error) {
        // Es ist ein Fehler aufgetreten!
        console.error("Fehler beim Server: ", error);
        return res.status(500).send('Fehler beim Server!');
        res.end();
    }
    
});
// server side(app.js)
app.post('/q1', (req, res) => {
    const co2berechnungverkehr = req.body.co2berechnungverkehr; // data from auto.js
    console.log(co2berechnungverkehr);
    const co2berechnungValues = {
                        user_id : user_id,
                        verkehresmittel : co2berechnungverkehr,
                        ernaehrung : 10, 
                        freizeitverbrauch : 10,
                        wasserverbrauch : 10,
                        haushaltverbrauch : 10,
                        gesamtverbrauch : 10,
                    };
                    cnx.query('INSERT INTO co2endberechnung SET ?', co2berechnungValues, function (error, results, fields) {
                    
    if (error) {
        console.error('Fehler beim Speichern in der Datenbank:', error);
        res.status(500).send('Fehler beim Speichern in der Datenbank:');
    } else {
        res.status(200).json({ message: 'Daten erfolgreich gespeichert' });
    }
    });
});

// http://localhost:3000/home
app.get('/home', function(req, res) {
	// If the user is loggedin
	if (req.session.loggedin) {
		// Output username
		res.send('Welcome back, ' + req.session.benutzername + '!');
        // res.sendFile(path.join(__dirname, 'public', 'home.html'));
	} else {
		// Not logged in
		res.send('Please login to view this page!');
	}
	res.end();
});



  // Verwendung von bodyParser für das Parsen von Anfragekörpern
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST-Route für die Verarbeitung der Benutzereingabe und Speicherung in der Datenbank
// app.post('/processInput', (req, res) => {
//     try {
//         const userInput = req.body.userInput;
//         console.log('erfolg');
//         const questionId = req.body.questionId; // Frage-ID aus dem Anfragekörper holen
//         // Daten in der MySQL-Datenbank speichern
//         cnx.query('INSERT INTO user_inputs (question_id, user_input) VALUES (?, ?)', [questionId, userInput], function (error, result) {
//             if (error) {
//                 console.error('Fehler beim Speichern des Eintrags:', error);
//                 return res.status(500).send('Interner Serverfehler');
//             } else {
//                 return res.status(200).send('Daten erfolgreich gespeichert');
//             }
//         });
//     } catch (error) {
//         console.error("Ein Fehler ist aufgetreten: ", error);
//         return res.status(500).send('Serverfehler');
//     }
// });

// const co2berechnungverkehr = require('../../frontend/auto');
// console.log(co2berechnungverkehr);

// localhost listen port app 
app.listen(port, () => {
    
    console.log(`Example app listening at http://localhost:${port}`);
});