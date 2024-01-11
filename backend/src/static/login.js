const apiUrl = "http://localhost:3000/";

function redirectToHome(benutzername) {
    benutzername= document.getElementById('benutzername')
    console.log("Benuzer angemeldet ", benutzername);
    const options = {
        method: "POST"
    }
    fetch(apiUrl + 'login', options)
        .then(response => {
            //    getuser();
            console.log("POST Response", response);
        })
}
