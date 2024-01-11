const apiUrl = "http://localhost:3000/";

function redirectToHome(benutzernamelogin) {
    benutzername= document.getElementById('benutzernamelogin')
    console.log("Benutzer angemeldet ", benutzernamelogin);
    const options = {
        method: "POST"
    }
    fetch(apiUrl + 'login/', options)
        .then(response => {
            //    getuser();
            console.log("POST Response", response);
        })
}
