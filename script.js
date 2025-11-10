/**
 * Script para manejar la interacción del frontend de la App del Clima.
 * Incluye registro, login, alternancia de formularios y envío de PQRS.
 * Ahora conecta con el backend API en lugar de localStorage.
 */

// Función para alternar entre registro y login
document.getElementById('toggleButton').addEventListener('click', function() {
    const registroForm = document.getElementById('registroForm');
    const loginSection = document.getElementById('loginSection');
    if (loginSection.style.display === 'none') {
        loginSection.style.display = 'block';
        registroForm.style.display = 'none';
        this.textContent = 'Registrarse';
    } else {
        loginSection.style.display = 'none';
        registroForm.style.display = 'block';
        this.textContent = 'Iniciar Sesión';
    }
});

// Función para manejar el envío del formulario de registro
document.getElementById('registroForm')?.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener los valores del formulario simplificado
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar que los campos no estén vacíos
    if (nombre && email && password) {
        try {
            // Enviar petición POST al backend para registrar usuario
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre, email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Registro exitoso
                alert(`¡Registro exitoso! ${data.message}. Ahora inicia sesión.`);
                // Mostrar sección de login y ocultar registro
                document.getElementById('loginSection').style.display = 'block';
                document.getElementById('registroForm').style.display = 'none';
                this.textContent = 'Registrarse'; // Resetear botón
            } else {
                // Error en el registro (ej: usuario ya existe)
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            // Error de conexión
            console.error('Error al registrar:', error);
            alert('Error al conectar con el servidor. Verifica que el backend esté corriendo.');
        }
    } else {
        alert('Por favor, completa todos los campos.');
    }
});

// Función para manejar el envío del formulario de login
document.getElementById('loginForm')?.addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío por defecto

    // Obtener los valores del formulario (ahora con email)
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validar que los campos no estén vacíos
    if (email && password) {
        try {
            // Enviar petición POST al backend para login
            const response = await fetch('http://localhost:5000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                // Login exitoso
                alert(`¡Bienvenido, ${data.user.nombre}! Redirigiendo a la app...`);
                // Redirigir a la URL de Render (o localhost si es desarrollo)
                window.location.href = 'https://app-clima-5-vfd1.onrender.com';
            } else {
                // Error en el login
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            // Error de conexión
            console.error('Error al iniciar sesión:', error);
            alert('Error al conectar con el servidor. Verifica que el backend esté corriendo.');
        }
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

// Función para mostrar avisos legales en modal
function showLegal(type) {
    const modal = document.getElementById('legalModal');
    const content = document.getElementById('legalContent');

    let title = '';
    let text = '';

    switch(type) {
        case 'privacidad':
            title = 'Política de Privacidad';
            text = `
                <h2>Política de Privacidad</h2>
                <p>En App Clima, nos comprometemos a proteger tu privacidad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal.</p>

                <h3>Información que recopilamos:</h3>
                <ul>
                    <li>Nombre completo</li>
                    <li>Correo electrónico</li>
                    <li>Contraseña (almacenada de forma segura)</li>
                </ul>

                <h3>Uso de la información:</h3>
                <ul>
                    <li>Crear y gestionar tu cuenta</li>
                    <li>Proporcionar servicios meteorológicos personalizados</li>
                    <li>Mejorar nuestra aplicación</li>
                </ul>

                <h3>Protección de datos:</h3>
                <p>Utilizamos encriptación y medidas de seguridad para proteger tu información.</p>
            `;
            break;
        case 'terminos':
            title = 'Términos de Servicio';
            text = `
                <h2>Términos de Servicio</h2>
                <p>Al usar App Clima, aceptas estos términos de servicio.</p>

                <h3>Servicio:</h3>
                <p>App Clima proporciona información meteorológica basada en datos de fuentes externas.</p>

                <h3>Responsabilidades del usuario:</h3>
                <ul>
                    <li>Proporcionar información precisa</li>
                    <li>Usar la aplicación de manera responsable</li>
                    <li>No compartir credenciales de acceso</li>
                </ul>

                <h3>Limitación de responsabilidad:</h3>
                <p>La información meteorológica es solo para fines informativos. No nos hacemos responsables por decisiones tomadas basadas en esta información.</p>
            `;
            break;
        case 'cookies':
            title = 'Política de Cookies';
            text = `
                <h2>Política de Cookies</h2>
                <p>Utilizamos cookies para mejorar tu experiencia en App Clima.</p>

                <h3>Tipos de cookies:</h3>
                <ul>
                    <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la aplicación</li>
                    <li><strong>Cookies de preferencias:</strong> Para recordar tus configuraciones</li>
                </ul>

                <h3>Gestión de cookies:</h3>
                <p>Puedes gestionar las cookies a través de la configuración de tu navegador.</p>
            `;
            break;
    }

    content.innerHTML = text;
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('legalModal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('legalModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
