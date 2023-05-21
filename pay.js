function calculateTotal() {
    var cantidadElement = document.getElementById('cantidad');
    var categoriaElement = document.getElementById('categoria');
    var totalAmountElement = document.getElementById('totalAmount');
    
    var cantidad = parseInt(cantidadElement.value);
    var categoria = categoriaElement.value;
    
    var descuento = 0;
    if (categoria === 'opcion1') {
        descuento = 0.8;
    } else if (categoria === 'opcion2') {
        descuento = 0.5;
    } else if (categoria === 'opcion3') {
        descuento = 0.15;
    }
    
    var valorBoleto = 200;
    var total = valorBoleto * cantidad * (1 - descuento);
    totalAmountElement.innerText = total.toFixed(2);}