function mostrarOpcion() {
  let select = document.getElementById("cuentaOrigen");
  let input = document.getElementById("miInput");

  input.value = select.value;

}


function cargarDatosContacto() {
  let nombreContacto = this.parentNode.parentNode.querySelector('.nombre').textContent;
  let rutContacto = this.parentNode.parentNode.querySelector('.rut').textContent;
  let tipoCuenta = this.parentNode.parentNode.querySelector('.tipoCuenta').textContent;
  let cuentaDestino = this.parentNode.parentNode.querySelector('.cuenta').textContent;
  let banco = this.parentNode.parentNode.querySelector('.banco').textContent;

  document.getElementById('contactoDestino').value = nombreContacto;
  document.getElementById('rutContacto').value = rutContacto;
  document.getElementById('tipoCuenta').value = tipoCuenta;
  document.getElementById('cuentaDestino').value = cuentaDestino;
  document.getElementById('banco').value = banco;
}

function transferirDinero() {
  let monto = parseFloat(document.getElementById('monto').value);

  if (isNaN(monto) || monto <= 0) {
    alert('Por favor, ingresa un monto válido.');
    return;
  }

  let cuentaOrigen = document.getElementById('cuentaOrigen').value;
  let contactoDestino = document.getElementById('contactoDestino').value;
  let cuentaDestino = document.getElementById('cuentaDestino').value;

  alert('La transferencia de ' + monto + ' ha sido realizada exitosamente de la cuenta ' + cuentaOrigen + ' a la cuenta ' + cuentaDestino + ' (' + contactoDestino + ').');
}

document.addEventListener('DOMContentLoaded', function() {
  let botonesSeleccionar = document.getElementsByClassName('botonSeleccionar');
  for (let i = 0; i < botonesSeleccionar.length; i++) {
    botonesSeleccionar[i].addEventListener('click', cargarDatosContacto);
  }

  document.getElementById('btnTransferir').addEventListener('click', transferirDinero);
});