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
