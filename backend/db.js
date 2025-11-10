/**
 * Archivo de conexión a la base de datos MongoDB.
 * Configura y establece la conexión usando Mongoose.
 * Maneja errores de conexión y confirma éxito.
 */

// Importaciones necesarias para la conexión a la base de datos
import mongoose from "mongoose"; // Para la conexión a MongoDB
import dotenv from "dotenv"; // Para cargar variables de entorno

// Configurar variables de entorno
dotenv.config();

// Función para conectar a la base de datos MongoDB
export const connectDB = async () => {
  try {
    // Usar MONGO_URI de variables de entorno, o fallback a local para pruebas
    const mongoUri = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/app-clima";

    // Intentar conectar a MongoDB
    await mongoose.connect(mongoUri);

    // Mensaje de éxito en la conexión
    console.log("✅ Conectado a MongoDB correctamente");
  } catch (error) {
    // Log del error y salida del proceso si falla la conexión
    console.error("❌ Error al conectar a MongoDB:", error.message);
    process.exit(1); // Terminar el proceso con código de error
  }
};
