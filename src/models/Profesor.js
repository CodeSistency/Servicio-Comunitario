import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    cedula: {
      type: Number,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    apellido: {
      type: String,
      default: " ",
    },
    cedula: {
      type: Number,
      default: 0,
    },
    curso_actual: {
      type: Number,
      default: 0,
    },
    seccion: {
      type: String,
      default: " ",
    },
    notas: {
      type: Array,
      default: new Array([{}]),
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profesor", postSchema);
