document.addEventListener('DOMContentLoaded', () => {
    // Obtener los datos del carrito (esto lo puedes pasar de otra manera, por ejemplo, localStorage)
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Generar número de factura aleatorio
    const numeroFactura = Math.floor(Math.random() * 1000000);

    const clienteFactura = Math.floor(Math.random() * 1000000);

    const metodoPago = "Efectivo" ; 

    // Obtener la fecha actual
    const fecha = new Date();
    const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;

    // Mostrar la fecha y número de factura
    document.getElementById('fecha').textContent = fechaFormateada;
    document.getElementById('numero-factura').textContent = numeroFactura;
    document.getElementById('cliente-factura').textContent = clienteFactura ;
    document.getElementById('metodo-pago').textContent = metodoPago ;  

    // Mostrar los productos en la tabla
    const productosTbody = document.getElementById('productos-tbody');
    let total = 0;

    carrito.forEach(producto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
        `;
        productosTbody.appendChild(row);
        total += producto.precio;
    });

    // Mostrar el total
    document.getElementById('total').textContent = total.toFixed(2);
});
