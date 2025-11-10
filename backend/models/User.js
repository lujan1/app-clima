/**
 * Modelo de Usuario para la App del Clima.
 * Define el esquema de datos para usuarios en MongoDB usando Mongoose.
 * Incluye validaciones y restricciones para asegurar integridad de datos.
 */

// Importar Mongoose para definir esquemas y modelos de MongoDB
import mongoose from "mongoose";

// Definir el esquema del usuario
const userSchema = new mongoose.Schema({
  // Campo para el nombre del usuario (obligatorio)
  nombre: {
    type: String, // Tipo de dato: cadena de texto
    required: true, // Campo obligatorio
  },

  // Campo para el email del usuario (obligatorio y único)
  email: {
    type: String, // Tipo de dato: cadena de texto
    required: true, // Campo obligatorio
    unique: true, // Debe ser único en la colección (evita duplicados)
  },

  // Campo para la contraseña del usuario (obligatorio, hasheada)
  password: {
    type: String, // Tipo de dato: cadena de texto
    required: true, // Campo obligatorio
  },
});

// Crear y exportar el modelo de Usuario basado en el esquema
// El modelo permite interactuar con la colección "users" en MongoDB
export default mongoose.model("User", userSchema);
