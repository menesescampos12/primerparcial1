document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector("#registration-form");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value;
        const correo = document.querySelector("#correo").value;
        const telefono = document.querySelector("#telefono").value;

        // Aquí puedes agregar la lógica para procesar el registro, como enviar los datos al servidor.

        // Por ahora, mostraremos un mensaje de éxito.
        mostrarMensaje("¡Registro exitoso! Te esperamos en el evento.");
    });

    function mostrarMensaje(mensaje) {
        alert(mensaje);
    }
});
