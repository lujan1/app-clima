// Función para manejar el envío del formulario de registro
document.getElementById('registroForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener los valores del formulario
    const nombres = document.getElementById('nombres').value;
    const apellido1 = document.getElementById('apellido1').value;
    const apellido2 = document.getElementById('apellido2').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const password = document.getElementById('password').value;

    // Validar que los campos no estén vacíos
    if (nombres && apellido1 && apellido2 && email && telefono && password) {
        // Crear un ID único (simulando documento de identidad)
        const id = Math.floor(Math.random() * 1000000000).toString();

        // Guardar en localStorage (simulación de base de datos)
        const user = { id, nombres, apellido1, apellido2, email, telefono, password };
        localStorage.setItem('user_' + id, JSON.stringify(user));

        // Mostrar mensaje de éxito
        alert(`¡Registro exitoso! Tu ID es: ${id}. Ahora inicia sesión.`);

        // Redirigir a la página de login
        window.location.href = 'login.html';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para manejar el envío del formulario de login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener los valores del formulario
    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;

    // Buscar el usuario en localStorage
    const userData = localStorage.getItem('user_' + id);
    if (userData) {
        const user = JSON.parse(userData);
        if (user.password === password) {
            // Login exitoso
            alert(`¡Bienvenido, ${user.nombres}! Redirigiendo a la app...`);
            // Redirigir a la URL de Render
            window.location.href = 'https://app-clima-5-vfd1.onrender.com';
        } else {
            document.getElementById('message').textContent = 'Contraseña incorrecta.';
        }
    } else {
        document.getElementById('message').textContent = 'ID no encontrado. Regístrate primero.';
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
