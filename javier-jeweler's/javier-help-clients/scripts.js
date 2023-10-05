document.addEventListener("DOMContentLoaded", function () {
    // Obtener todas las preguntas frecuentes
    var preguntasFrecuentes = document.querySelectorAll(".preguntas-frecuentes h3");

    // Agregar un manejador de clic para cada pregunta frecuente
    preguntasFrecuentes.forEach(function (pregunta) {
        pregunta.addEventListener("click", function () {
            // Obtener el elemento hermano siguiente (la respuesta)
            var respuesta = pregunta.nextElementSibling;

            // Verificar si la respuesta está oculta y mostrarla, o viceversa
            if (respuesta.style.display === "none" || respuesta.style.display === "") {
                respuesta.style.display = "block";
            } else {
                respuesta.style.display = "none";
            }
        });
    });
});
