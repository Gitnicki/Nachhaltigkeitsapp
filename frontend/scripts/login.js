const apiUrl = "http://localhost:3000/";

function Anmelden(benutzernamelogin) {
    console.log("Benutzer angemeldet ", benutzernamelogin);
    const options = {
        method: "POST"
    }
    fetch(apiUrl + 'login/' + benutzernamelogin, options)
        .then(response => {
            //    getuser();
            console.log("POST Response", response);
        })
}
