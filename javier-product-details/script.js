document.addEventListener("DOMContentLoaded", function () {
    // Obtener una referencia a la imagen del producto
    const imagenProducto = document.querySelector("#producto img");

    // Agregar un evento de ratón para cambiar la imagen cuando se pasa el ratón sobre ella
    imagenProducto.addEventListener("mouseover", function () {
        // Cambiar la imagen a una versión alternativa (podrías cargar otra imagen o cambiar el src)
        imagenProducto.src = "product_hover.jpeg";
    });

    // Restaurar la imagen original cuando el ratón sale de la imagen
    imagenProducto.addEventListener("mouseout", function () {
        imagenProducto.src = "product.jpeg";
    });

    // Obtener una referencia al botón "Agregar al Carrito"
    const botonAgregar = document.querySelector("button");

    // Agregar un evento de clic al botón
    botonAgregar.addEventListener("click", function () {
        // Aquí puedes agregar tu lógica para manejar el evento de agregar al carrito
        alert("Producto agregado al carrito");
    });
});
