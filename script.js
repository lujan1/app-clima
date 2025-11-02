// Función para manejar el envío del formulario de registro
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener los valores del formulario
    const nombres = document.getElementById('nombres').value;
    const apellido1 = document.getElementById('apellido1').value;
    const apellido2 = document.getElementById('apellido2').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;

    // Validar que los campos no estén vacíos (aunque ya están marcados como required)
    if (nombres && apellido1 && apellido2 && email && telefono) {
        // Mostrar un mensaje de éxito (puedes personalizar esto)
        alert(`¡Registro exitoso! Bienvenido, ${nombres} ${apellido1} ${apellido2}. Redirigiendo a la app...`);

        // Redirigir a la URL de Render
        window.location.href = 'https://app-clima-5-vfd1.onrender.com';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para manejar el envío del formulario PQRS
document.getElementById('pqrsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener los valores del formulario PQRS
    const tipo = document.getElementById('pqrsTipo').value;
    const mensaje = document.getElementById('pqrsMensaje').value;

    // Validar que los campos no estén vacíos
    if (tipo && mensaje) {
        // Aquí puedes agregar lógica para enviar el PQRS, por ejemplo, a un servidor
        alert(`PQRS enviado: ${tipo} - ${mensaje}`);
        // Limpiar el formulario
        document.getElementById('pqrsForm').reset();
    } else {
        alert('Por favor, completa todos los campos del PQRS.');
    }
});
