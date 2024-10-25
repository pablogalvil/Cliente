let email = prompt("Introduce tu correo electronico");

function proteger(email) {
    let nomCorreo = email.substring(0, email.indexOf("@"));
    let nuevoEmail = email.replace(nomCorreo, "******");
    return nuevoEmail;
}

document.write(proteger(email));