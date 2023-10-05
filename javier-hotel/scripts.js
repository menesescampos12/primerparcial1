document.addEventListener("DOMContentLoaded", function () {
    // Obtener la imagen de la habitación
    var roomImage = document.querySelector("img[alt='Habitación de lujo']");

    // Agregar un manejador para el evento mouseover (cambio de imagen)
    roomImage.addEventListener("mouseover", function () {
        roomImage.src = "habitacion-lujo.jpeg"; // Cambia la imagen al pasar el cursor sobre ella
    });

    // Agregar un manejador para el evento mouseout (restablecer la imagen)
    roomImage.addEventListener("mouseout", function () {
        roomImage.src = "habitacion.jpeg"; // Restablece la imagen cuando se quita el cursor
    });

    // Obtener el enlace de "Reservas"
    var reservationsLink = document.querySelector("a[href='./reservations/reservations.html']");

    // Agregar un manejador para el evento click (alerta al hacer clic en "Reservas")
    reservationsLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevenir la acción predeterminada del enlace
        alert("¡Gracias por tu interés en reservar con nosotros! Por favor, contáctanos para completar tu reserva.");
    });
});
