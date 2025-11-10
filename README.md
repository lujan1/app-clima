# 🌦️ App Clima

Una aplicación web completa para consultar el clima con sistema de registro y autenticación de usuarios. Incluye un diseño moderno y futurista con backend robusto.

## ✨ Características

- 🔐 **Sistema de Autenticación**: Registro y login de usuarios con validación
- 🌤️ **Información Meteorológica**: Consultas del clima en tiempo real
- 🎨 **Diseño Futurista**: Interfaz moderna con animaciones y efectos visuales
- 📱 **Responsive Design**: Optimizado para móvil, tablet y desktop
- 🔒 **Backend Seguro**: API REST con encriptación de contraseñas
- 🗄️ **Base de Datos**: MongoDB para almacenamiento de usuarios
- 📧 **Sistema PQRS**: Formulario de peticiones, quejas, reclamos y sugerencias
- 🌐 **Redes Sociales**: Enlaces directos a WhatsApp, Facebook, Instagram, Twitter/X y Email

## 🚀 Tecnologías Utilizadas

### Frontend
- HTML5
- CSS3 (con animaciones y gradientes)
- JavaScript (ES6+)
- Diseño responsivo con media queries

### Backend
- Node.js
- Express.js
- MongoDB con Mongoose
- bcryptjs para encriptación
- CORS para manejo de solicitudes cruzadas
- dotenv para variables de entorno

## 📋 Requisitos Previos

- Node.js (versión 14 o superior)
- MongoDB (local o Atlas)
- npm o yarn

## 🛠️ Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone https://github.com/lujan1/app-clima.git
cd app-clima
```

### 2. Instalar Dependencias del Backend
```bash
cd backend
npm install
```

### 3. Configurar Variables de Entorno
Crear un archivo `.env` en la carpeta `backend`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/app-clima
# O para MongoDB Atlas:
# MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/app-clima
JWT_SECRET=tu_clave_secreta_muy_segura_aqui
```

### 4. Instalar Dependencias del Frontend (si existe)
```bash
cd ../frontend
npm install
```

## ▶️ Ejecución

### Desarrollo Local

#### Backend:
```bash
cd backend
npm run dev
```
El servidor se ejecutará en `http://localhost:5000`

#### Frontend:
```bash
cd frontend
npm start
```
La aplicación se ejecutará en `http://localhost:3000`

### Producción

#### Backend:
```bash
cd backend
npm start
```

#### Frontend:
```bash
cd frontend
npm run build
npm run serve
```

## 📡 API Endpoints

### Usuarios
- `POST /api/users/register` - Registrar nuevo usuario
- `POST /api/users/login` - Iniciar sesión

### Clima (si implementado)
- `GET /api/weather/:city` - Obtener clima de una ciudad

## 🗂️ Estructura del Proyecto

```
app-clima/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript del frontend
├── backend/            # Servidor backend
│   ├── index.js        # Punto de entrada del servidor
│   ├── routes/         # Definición de rutas
│   ├── controllers/    # Lógica de negocio
│   ├── models/         # Modelos de datos
│   ├── db.js           # Conexión a base de datos
│   └── package.json    # Dependencias del backend
├── frontend/           # Aplicación React (opcional)
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md           # Este archivo
```

## 🔧 Configuración de Base de Datos

### MongoDB Local
1. Instalar MongoDB Community Server
2. Iniciar MongoDB: `mongod`
3. La aplicación se conectará automáticamente

### MongoDB Atlas (Recomendado para Producción)
1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Crear un cluster gratuito
3. Obtener la cadena de conexión
4. Actualizar `MONGODB_URI` en el archivo `.env`

## 🚀 Despliegue

### Backend en Render
1. Crear cuenta en [Render](https://render.com)
2. Conectar el repositorio de GitHub
3. Configurar variables de entorno
4. Desplegar

### Frontend en Vercel/Netlify
1. Crear cuenta en [Vercel](https://vercel.com) o [Netlify](https://netlify.com)
2. Conectar el repositorio
3. Configurar build settings
4. Desplegar automáticamente

## 📱 Uso de la Aplicación

1. **Registro**: Crear una cuenta con nombre, email y contraseña
2. **Login**: Iniciar sesión con email y contraseña
3. **PQRS**: Enviar peticiones, quejas, reclamos o sugerencias
4. **Redes Sociales**: Contactar al soporte a través de WhatsApp, Facebook, Instagram, Twitter/X o Email

## 🔒 Seguridad

- Contraseñas encriptadas con bcrypt
- Validación de entrada de datos
- Protección contra inyección SQL
- CORS configurado
- Variables de entorno para datos sensibles

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📞 Contacto

- **Email**: contacto@appclima.com
- **WhatsApp**: [+57 318 338 4076](https://wa.me/573183384076)
- **Facebook**: [App Clima](https://www.facebook.com/appclima)
- **Instagram**: [@appclima](https://www.instagram.com/appclima)
- **Twitter/X**: [@appclima](https://twitter.com/appclima)

## 🙏 Agradecimientos

- OpenWeatherMap por la API de clima
- MongoDB por la base de datos
- La comunidad de desarrollo open source

---

⭐ **Si te gusta este proyecto, ¡dale una estrella en GitHub!**
