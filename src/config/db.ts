import mongoose from 'mongoose';

const MONGO_URI = "mongodb://localhost:27017/Todo-List";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB conectado!");
  } catch (err) {
    console.error("Erro ao conectar MongoDB:", err);
  }
};