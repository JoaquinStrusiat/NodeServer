// routes/index.js
const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");

function removeExtension(fileName) {
    return fileName.split(".").shift();
}

fs.readdirSync(__dirname).forEach((version) => {
    //Creo la ruta relativa de cada directorio
    const versionPath = path.join(__dirname, version);
    //Consulto si la ruta es un directorio
    if (fs.lstatSync(versionPath).isDirectory()) {
        fs.readdirSync(versionPath).forEach((file) => {
            //Creo la ruta relativa de cada archivo dentro del directorio
            const filePath = path.join(versionPath, file);
            // Asegurarse de que es un archivo JS
            if (file.endsWith(".js")) { 
                //remuevo la extension
                const nameCleaned = removeExtension(file);
                //creo la ruta
                router.use(`/${version}/${nameCleaned}`, require(filePath));
                //Imprimo las rutas
                console.log(`Ruta creada: http://localhost:3000/${version}/${nameCleaned}`);
            }
        });
    }
});

module.exports = router;