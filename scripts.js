function comprarProducto(producto) {
    alert('Has agregado ' + producto + ' a tu carrito de compras.');
    // Aquí puedes agregar lógica para agregar el producto a un carrito de compras real
}
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Tu mensaje ha sido enviado. Nos pondremos en contacto contigo pronto.');
    // Aquí puedes agregar lógica para enviar el formulario a un servidor real
    document.getElementById('contactForm').reset();
});

function agregarAlCarrito(producto, precio, cantidad) {
    alert(`Has agregado ${cantidad} de ${producto} a tu carrito. Total: $${(precio * cantidad).toFixed(2)}`);
    // Aquí puedes agregar la lógica para agregar el producto al carrito real
}
