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
