
    // Función para mostrar un mensaje de confirmación
    function mostrarConfirmacion() {
        alert("¡Gracias por enviar tu solicitud! Hemos recibido tu información.");
    }

    // Asigna la función mostrarConfirmacion al evento "submit" del formulario
    document.querySelector("form").addEventListener("submit", mostrarConfirmacion);
