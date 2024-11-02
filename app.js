//importo express, cors y la conexión 
const express = require('express');
const dbConnect = require('./config/dbConnect');
const cors = require('cors')

// Importo las variables de entorno
require("dotenv").config();
const port = process.env.PORT || 3001;

//Inicio express
const app = express();

//Declaro que expres pueda utilizar cors, json y el router
app.use(cors());
app.use(express.json());
app.use("/", require("./routes"));


app.listen(port, () => {
  console.log(`\nTu app está lista por http://localhost:${port}`)
});

dbConnect();


