/**
 * fetch("data/user.json").then(function (response) {
    return response.json();
}).then(user => {
    return user.cliente.nombre.toUpperCase();
}).then(displayNameAsUppercase => {
    console.log(displayNameAsUppercase);
}).catch(error => {
    console.log(error);
});
 */

async function showUserInConsole() {
    //Wait for the response to come back
    const response = await fetch("data/user.json");
    //Before running the code down here
    const user = await response.json();

    console.log(user);
}

showUserInConsole();