// Agregar un evento de escucha para el envío del formulario
document.getElementById('citaForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el envío por defecto del formulario
    alert('Cita agendada exitosamente. ¡Te esperamos en la fecha y hora indicadas!');
    this.reset(); // Limpiar el formulario después de la alerta
});
