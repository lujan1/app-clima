// Verificar si el usuario ya está registrado al cargar la página
window.addEventListener('load', function() {
    const user = localStorage.getItem('user');
    if (user) {
        // Mostrar mensaje y sección de login
        document.getElementById('mensajeRegistrado').style.display = 'block';
        document.getElementById('loginSection').style.display = 'block';
        document.getElementById('registroForm').style.display = 'none';
    }
});

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
        localStorage.setItem('user', JSON.stringify(user));

        // Mostrar mensaje de éxito
        alert(`¡Registro exitoso! Tu ID es: ${id}. Ahora inicia sesión.`);

        // Mostrar sección de login y ocultar registro
        document.getElementById('mensajeRegistrado').style.display = 'block';
        document.getElementById('loginSection').style.display = 'block';
        document.getElementById('registroForm').style.display = 'none';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para manejar el envío del formulario de login
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener los valores del formulario
    const loginId = document.getElementById('loginId').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Buscar el usuario en localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
        const user = JSON.parse(userData);
        if (user.id === loginId && user.password === loginPassword) {
            // Login exitoso
            alert(`¡Bienvenido, ${user.nombres}! Redirigiendo a la app...`);
            // Redirigir a la URL de Render
            window.location.href = 'https://app-clima-5-vfd1.onrender.com';
        } else {
            alert('ID o contraseña incorrectos.');
        }
    } else {
        alert('Usuario no registrado. Regístrate primero.');
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
