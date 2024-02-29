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