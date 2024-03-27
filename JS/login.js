
// let usuarioValido = "usuario123";
// let contrasenaValida = "claveSecreta";

// function verificarCredenciales(event){

//     const usuarioIngresado = document.getElementById('usuario').value;
//     const contrasenaIngresada = document.getElementById('contrasena').value;

//     console.log(usuarioIngresado)
//     console.log(contrasenaIngresada)
//     if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
//         alert('Inicio de sesión exitoso');
//         window.location.href = "../menu.html";
// console.log("ingreso realizado primera prueba")
        
//     } 
    
//     else {
        
//         alert('Credenciales incorrectas');

// console.log("ingreso no realizado")

//     }
// console.log("ingreso realizado primera prueba")

// } 

// document.getElementById("login-form").addEventListener("submit", verificarCredenciales);

let usuarioValido = "usuario123";
let contrasenaValida = "claveSecreta";

function verificarCredenciales(event) {
    event.preventDefault(); // formulario se envie

    const usuarioIngresado = document.getElementById('usuario').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;

    console.log("Usuario ingresado:", usuarioIngresado);
    console.log("Contraseña ingresada:", contrasenaIngresada);

    if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
        console.log("Inicio de sesión exitoso");
        alert('Inicio de sesión exitoso');
        window.location.href = "../menu.html";
    } else {
        console.log("Credenciales incorrectas");
        alert('Credenciales incorrectas');
    }
}

document.getElementById("login-form").addEventListener("submit", verificarCredenciales);



