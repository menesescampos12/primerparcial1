// Obtener el enlace de correo electrónico
const emailLink = document.querySelector('a[href="https://mail.google.com/mail/u/0/"]');

// Agregar un evento de clic al enlace de correo electrónico
emailLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    alert('¡Gracias por tu interés alumno de la UNID! Puedes contactarme en menesesjavier474@gmail.com');
});
