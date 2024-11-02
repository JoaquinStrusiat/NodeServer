require("dotenv").config();
const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const DB_URL = process.env.DB_URL;
    await mongoose.connect(DB_URL);
    console.log("--- Conexión exitosa a la base de datos ---");
  } catch (error) {
    console.error("--- Error de conexión a la base de datos ---", error);
    process.exit(1); // Opcional: para salir del proceso en caso de fallo
  }
};


module.exports = dbConnect;
