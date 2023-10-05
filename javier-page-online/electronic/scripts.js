// scripts.js

// Función para cambiar el color de fondo al pasar el mouse sobre un producto
function cambiarColorFondo(event) {
    const producto = event.currentTarget;
    producto.classList.toggle('hovered');
}

// Función para restaurar el color original cuando el mouse se aleja
function restaurarColorFondo(event) {
    const producto = event.currentTarget;
    producto.classList.remove('hovered');
}

// Obtener todos los elementos de producto
const productos = document.querySelectorAll('.producto');

// Agregar eventos de mouseover y mouseout a cada producto
productos.forEach(producto => {
    producto.addEventListener('mouseover', cambiarColorFondo);
    producto.addEventListener('mouseout', restaurarColorFondo);
});
