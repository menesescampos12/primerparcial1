// scripts.js

// Función para cambiar la imagen principal al hacer clic
function cambiarImagenPrincipal(event) {
    const producto = event.currentTarget;
    const imagenes = producto.querySelectorAll('img');
    const imagenPrincipal = imagenes[0];
    const imagenSecundaria = imagenes[1];

    // Intercambiar las imágenes
    [imagenPrincipal.src, imagenSecundaria.src] = [imagenSecundaria.src, imagenPrincipal.src];
}

// Obtener todos los elementos de producto
const productos = document.querySelectorAll('.producto');

// Agregar un evento de clic para cambiar la imagen principal en cada producto
productos.forEach(producto => {
    producto.addEventListener('click', cambiarImagenPrincipal);
});
