
let usuarioValido = "usuario123";
let contrasenaValida = "12345";

function verificarCredenciales(event){

    const usuarioIngresado = document.getElementById('usuario').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;

    event.preventDefault()

    if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
        alert('Inicio de sesión exitoso');
        window.location.href = "../menu.html";

        
    } 
    
    else {
        
        alert('Credenciales incorrectas');
    }
} 

document.getElementById("login-form").addEventListener("submit", verificarCredenciales);




