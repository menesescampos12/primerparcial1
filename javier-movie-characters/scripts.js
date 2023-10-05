// Obtener todos los elementos de la lista de personajes
const characterItems = document.querySelectorAll('.character-list-item');

// Agregar un controlador de eventos para cuando el cursor se desplaza sobre un elemento
characterItems.forEach((item) => {
    item.addEventListener('mouseover', () => {
        // Cambiar el color de fondo al pasar el cursor
        item.style.backgroundColor = 'lightgray';
    });

    // Agregar un controlador de eventos para cuando el cursor se quita de un elemento
    item.addEventListener('mouseout', () => {
        // Restaurar el color de fondo original
        item.style.backgroundColor = '';
    });
});
