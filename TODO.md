# TODO: Revisar y Arreglar App Clima - Plan Aprobado

## Backend - Agregar Comentarios y Verificar Funcionalidad
- [x] Agregar comentarios detallados a backend/index.js (imports, middlewares, rutas, servidor).
- [x] Agregar comentarios a backend/routes/UserRoutes.js (rutas de registro y login).
- [x] Agregar comentarios a backend/controllers/User.Controller.js (funciones CRUD de usuarios).
- [x] Agregar comentarios a backend/models/User.js (esquema de usuario).
- [x] Agregar comentarios a backend/db.js (conexión a MongoDB).
- [ ] Verificar que backend esté funcional (conexión DB, rutas API).

## Frontend - Conectar a Backend y Simplificar
- [x] Modificar index.html: Simplificar formulario de registro (solo nombre, email, password). Combinar nombres/apellidos. Remover documento, teléfono.
- [x] Modificar script.js: Cambiar registro a fetch /api/users/register. Cambiar login a usar email y fetch /api/users/login. Agregar manejo de errores backend.
- [x] Modificar login.html: Cambiar formulario a usar email en lugar de documento.
- [x] Mejorar styles.css: Agregar animaciones de clima (nubes flotando, sol dinámico, lluvia opcional, cambio de fondo tipo clima).

## Pruebas y Funcionalidad
- [x] Iniciar backend con npm run dev.
- [x] Abrir index.html en navegador, registrar usuario (debe guardarse en DB).
- [ ] Verificar en MongoDB que se guardó el usuario.
- [ ] Intentar registrar mismo email (debe fallar con error "usuario ya existe").
- [ ] Hacer login exitoso con email/password.
- [ ] Probar que no haya errores, todo funcional.
- [ ] No subir a GitHub hasta que el usuario lo pida.

## Mejoras Adicionales
- [x] Organizar código impecablemente (indentación, estructura).
- [x] Hacer la mejor app de clima: Animaciones fluidas, diseño elegante, UX perfecta.
- [ ] Mantener APIs conectadas al backend (clima y pronóstico).
