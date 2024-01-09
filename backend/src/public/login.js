const apiUrl = "http://localhost:3000/";

function Anmelden(id) {
    console.log("Benuzer angemeldet ", id);
    const options = {
        method: "POST"
    }
    fetch(apiUrl + 'login/' + id, options)
        .then(response => {
            //    getuser();
            console.log("POST Response", response);
        })
}

// // http://localhost:3000/home
// app.get('/home', function(req, res) {

// 	res.sendFile(path.join(__dirname + '../../../home.html'));
// });

// Definieren Sie eine GET-Route für home.html
app.get('/home', (req, res) => {
    // Verwenden Sie path.join, um den vollständigen Pfad zur home.html zu erstellen
    const filePath = path.join(__dirname, + '/home');
    res.sendFile(filePath);})