document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos <a> con el texto "detalles o explicacion de la pieza"
    var detailLinks = document.querySelectorAll("a[href='./product/details.html']");

    // Agregar un manejador de clic a cada enlace
    detailLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevenir la acción predeterminada del enlace
            alert("Redirigiendo a la página de detalles del producto.");
            // Puedes reemplazar la alerta con la lógica de redirección real aquí
            // Por ejemplo: window.location.href = link.getAttribute("href");
        });
    });
});
