document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("miFormulario");
    const respuesta = document.getElementById("respuesta");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;

        // Envía los datos del formulario a través de una solicitud HTTP (puedes usar Fetch o AJAX)
        enviarDatos(nombre, email, mensaje);
    });

    function enviarDatos(nombre, email, mensaje) {
        // Simula una solicitud de envío de datos al servidor (reemplaza esto con tu lógica real)
        setTimeout(function () {
            respuesta.innerHTML = `
                <p>¡Gracias, ${nombre}!</p>
                <p>Hemos recibido tu mensaje:</p>
                <p>Correo Electrónico: ${email}</p>
                <p>Mensaje: ${mensaje}</p>
            `;
        }, 1000); // Simula una demora de 1 segundo

        // Limpia el formulario después de enviar
        formulario.reset();
    }
});
