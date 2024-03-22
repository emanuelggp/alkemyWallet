$(document).ready(function(){

    let balance = 0;

    function updateBalance(){
        $('#balance').text(balance.toFixed(0));
    }

    $('#depositBtn').click(function(e){
        e.preventDefault();
        let amount = parseFloat($('#amount').val());

        if(!isNaN(amount) && amount > 0){
            balance += amount;
            updateBalance();

            $('#amount').val('');

            alert('Depósito realizado');
        } else
        alert('Monto inválido');

    })
})

$(document).ready(function() {
    // Manejar el evento de envío del formulario para agregar contactos
    $('#add-contact-form').submit(function(f) {
      f.preventDefault(); // Evitar el envío del formulario

      // Obtener los valores del formulario
    let name = $('#contact-name').val();
    let rut = $('#contact-rut').val();
    let acountType = $('#acount-type').val();
    let acount = $('#acount-number').val();
    let banc = $('#banc').val();
    let selectBtn = '<button id="botonSeleccionar" class="btn btn-primary">Seleccionar</button>'


      // Crear una nueva fila de tabla con los valores del formulario
    let tableRow = $('<tr>').append(
        $('<td>').text(name),
        $('<td>').text(rut),
        $('<td>').text(acountType),
        $('<td>').text(acount),
        $('<td>').text(banc),
        $('<td>').append(selectBtn),


    );

      // Agregar la nueva fila de tabla a la tabla de contactos
    $('#contactTable tbody').append(tableRow);

      // Limpiar los campos del formulario
    $('#contact-name').val('');
    $('#contact-rut').val('');
    $('#acount-type').val('');
    $('#acount-number').val('');
    $('#banc').val('');
    });
});

