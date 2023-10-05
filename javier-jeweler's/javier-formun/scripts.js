
    // Función para validar el formulario
    function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;

        // Verificar si los campos están vacíos
        if (nombre === "" || email === "") {
            alert("Por favor, complete los campos de Nombre y Correo Electrónico.");
            return false; // Evita el envío del formulario
        }

        // Validar el formato del correo electrónico
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailPattern)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            return false; // Evita el envío del formulario
        }

        // Si todos los campos están completos y el correo es válido, el formulario se enviará
        return true;
    }
