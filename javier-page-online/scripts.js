// scripts.js

// Función para mostrar un mensaje de bienvenida personalizado
function mostrarMensajeBienvenida() {
    const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
    if (nombreUsuario) {
        const mensaje = `¡Hola, ${nombreUsuario}! Bienvenido a nuestra tienda en línea.`;
        alert(mensaje);
    }
}

// Agregar un evento de clic al título de la página para mostrar el mensaje de bienvenida
const tituloPagina = document.querySelector('h1');
tituloPagina.addEventListener('click', mostrarMensajeBienvenida);
