document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el botón
    const btn = document.querySelector(".btn");

    // Función para cambiar el texto del botón
    function cambiarTexto() {
        btn.textContent = "¡Gracias por registrarte!";
    }

    // Agrega un evento clic al botón
    btn.addEventListener("click", cambiarTexto);
});
