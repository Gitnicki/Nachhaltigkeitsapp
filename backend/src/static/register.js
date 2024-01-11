const apiUrl = "http://localhost:3000/";

function redirectToLogin(benutzername) {
    benutzername= document.getElementById('benutzername')

    console.log("Benuzer registriert ", benutzername);
    const options = {
        method: "POST"
    }
    fetch(apiUrl + 'register/', options)
        .then(response => {
            //    getuser();
            console.log("POST Response", response);
        })
}
