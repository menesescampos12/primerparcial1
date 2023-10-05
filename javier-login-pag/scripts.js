// Obtener los formularios
const loginForm = document.querySelector("#login form");
const registroForm = document.querySelector("#registro form");

// Agregar controladores de eventos para enviar los formularios
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    iniciarSesion(email, password);
});

registroForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const emailRegistro = document.querySelector("#email_registro").value;
    const passwordRegistro = document.querySelector("#password_registro").value;
    registrarUsuario(nombre, emailRegistro, passwordRegistro);
});

// Simular la funcionalidad de inicio de sesión
function iniciarSesion(email, password) {
    // Aquí puedes agregar tu lógica de inicio de sesión
    // Por ahora, mostraremos un mensaje de éxito
    mostrarMensaje("¡Iniciaste sesión con éxito!");
}

// Simular la funcionalidad de registro de usuario
function registrarUsuario(nombre, email, password) {
    // Aquí puedes agregar tu lógica de registro de usuario
    // Por ahora, mostraremos un mensaje de éxito
    mostrarMensaje("¡Te has registrado con éxito!");
}

// Función para mostrar un mensaje en un div de mensaje
function mostrarMensaje(mensaje) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.classList.add("mensaje");
    document.body.appendChild(mensajeDiv);

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function () {
        mensajeDiv.style.display = "none";
    }, 3000);
}
