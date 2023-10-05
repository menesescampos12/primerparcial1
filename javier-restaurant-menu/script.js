const tarjetasMenu = document.querySelectorAll('ul li');

// Agregar un evento de clic a cada tarjeta de menú
tarjetasMenu.forEach((tarjeta) => {
    tarjeta.addEventListener('click', () => {
        const precio = tarjeta.querySelector('p').textContent.match(/\d+\.\d{2}/); // Extraer el precio
        if (precio) {
            alert(`El precio es: $${precio[0]}`);
        }
    });
});
