var usuarioValido = "usuario123";
var contrasenaValida = "claveSecreta";

function verificarCredenciales(event){

    const usuarioIngresado = document.getElementById('usuario').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;

    if (usuarioIngresado === usuarioValido && contrasenaIngresada === contrasenaValida) {
        alert('Inicio de sesión exitoso');
        window.location.href = '../menu.html';
    } 
    
    else {
        
        alert('Credenciales incorrectas');
    }
} //cierre

// asociar la funcion al formulario
document.getElementById("login-form").addEventListener("submit", verificarCredenciales);




