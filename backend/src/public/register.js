const apiUrl = "http://localhost:3000/";

function Registrieren(id) {
    console.log("Benuzer registriert ", id);
    const options = {
        method: "POST"
    }
    fetch(apiUrl + 'register/' + id, options)
        .then(response => {
            //    getuser();
            console.log("POST Response", response);
        })
}

// Definieren Sie eine GET-Route für home.html
app.get('/login', (req, res) => {
    // Verwenden Sie path.join, um den vollständigen Pfad zur home.html zu erstellen
    const filePath = path.join(__dirname, + '../../../../login.html');
    res.sendFile(filePath);})

