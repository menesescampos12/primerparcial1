// scripts.js

// Obtener todos los elementos de clase "platillo"
const platillos = document.querySelectorAll(".platillo");

// Función para mostrar información del platillo cuando se hace clic
function mostrarInformacionPlatillo(event) {
  const platillo = event.currentTarget; // El platillo en el que se hizo clic
  const nombrePlatillo = platillo.querySelector("h3").textContent;
  const precioPlatillo = platillo.querySelector(".precio").textContent;
  
  // Crear un mensaje con la información del platillo
  const mensaje = `Platillo: ${nombrePlatillo}\nPrecio: ${precioPlatillo}`;
  
  // Mostrar una alerta con la información del platillo
  alert(mensaje);
}

// Agregar un evento de clic a cada platillo
platillos.forEach((platillo) => {
  platillo.addEventListener("click", mostrarInformacionPlatillo);
});
