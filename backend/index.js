/**
 * Archivo principal del backend de la App del Clima.
 * Configura el servidor Express, conecta a la base de datos MongoDB,
 * define rutas para usuarios, clima y pronóstico, y sirve el frontend.
 */

// Importaciones necesarias para el servidor
import express from "express"; // Framework web para Node.js
import cors from "cors"; // Middleware para habilitar CORS (Cross-Origin Resource Sharing)
import dotenv from "dotenv"; // Cargar variables de entorno desde .env
import path from "path"; // Utilidades para manejar rutas de archivos
import { fileURLToPath } from "url"; // Para obtener __dirname en ES modules
import { connectDB } from "./db.js"; // Función para conectar a MongoDB
import userRoutes from "./routes/UserRoutes.js"; // Rutas para gestión de usuarios (registro, login, etc.)
import weatherRoutes from "./routes/weather.js"; // Rutas para obtener clima actual
import forecastRoutes from "./routes/forecast.js"; // Rutas para obtener pronóstico del clima

// Configurar variables de entorno
dotenv.config();

// Crear instancia de la aplicación Express
const app = express();

// Conectar a la base de datos MongoDB
connectDB();

// Definir puerto del servidor (usa PORT de .env o 5000 por defecto)
const PORT = process.env.PORT || 5000;

// Obtener directorio actual para rutas estáticas
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares globales
app.use(cors()); // Habilitar CORS para permitir peticiones desde el frontend
app.use(express.json()); // Parsear cuerpos de peticiones en formato JSON
app.use(express.urlencoded({ extended: true })); // Parsear datos de formularios URL-encoded

// Rutas de la API
// 🔥 Esta línea debe existir y estar antes del frontend para que las rutas de API funcionen
app.use("/api/users", userRoutes); // Rutas para usuarios (registro, login, etc.)
app.use("/clima", weatherRoutes); // Rutas para clima actual
app.use("/pronostico", forecastRoutes); // Rutas para pronóstico

// Ruta raíz de la API para verificar que esté funcionando
app.get("/api", (req, res) => {
  res.json({ message: "🌦️ API del Clima funcionando correctamente" });
});

// Servir archivos estáticos del directorio raíz (para index.html, login.html, etc.)
app.use(express.static(path.join(__dirname, "../")));

// Rutas específicas para páginas HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../login.html"));
});

// Iniciar servidor y escuchar en el puerto definido
app.listen(PORT, () => console.log(`✅ Servidor corriendo en puerto ${PORT}`));
