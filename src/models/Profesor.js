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
    }
  },
  { timestamps: true }
);

export default mongoose.model("Profesor", postSchema);
