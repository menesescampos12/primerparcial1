// scripts.js

// Obtenemos todas las tarjetas de animales
const cards = document.querySelectorAll('.card');

// Función para redirigir a las páginas de detalles de los animales
function redirectToAnimalPage(animalName) {
    // Aquí debes definir las URL de las páginas de detalles de los animales
    const animalPages = {
        'LEON': 'leon.html', // Reemplaza 'leon.html' con la URL correcta
        'LOBO': 'lobo.html', // Reemplaza 'lobo.html' con la URL correcta
        'TIGRE': 'tigre.html', // Reemplaza 'tigre.html' con la URL correcta
    };

    // Verificamos si el nombre del animal existe en el objeto animalPages
    if (animalName in animalPages) {
        // Redirigimos a la página de detalles del animal correspondiente
        window.location.href = animalPages[animalName];
    } else {
        alert('Página no encontrada para este animal.');
    }
}

// Agregamos un evento click a cada tarjeta
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Obtenemos el nombre del animal desde el título de la tarjeta
        const animalName = card.querySelector('h3').textContent.trim();
        // Redirigimos a la página de detalles del animal
        redirectToAnimalPage(animalName);
    });
});
