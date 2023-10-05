// JavaScript sencillo para la página de música

// Selecciona todos los títulos de canciones en la lista
const canciones = document.querySelectorAll('h3');

// Agrega un evento de clic a cada título de canción
canciones.forEach((cancion) => {
    cancion.addEventListener('click', () => {
        const nombreCancion = cancion.textContent;
        alert(`Has seleccionado la canción: ${nombreCancion}`);
    });
});
