// routes/index.js
const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require("path");
const os = require('os');

function getLocalIP() {
    const interfaces = os.networkInterfaces();
    for (const interfaceName in interfaces) {
        const interfaceInfo = interfaces[interfaceName];
        for (const iface of interfaceInfo) {
            // Ignora direcciones IPv6 y direcciones que no sean internas
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '0.0.0.0'; // Si no se encuentra ninguna dirección IP
}

const localIP = getLocalIP();


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
                console.log(`Ruta creada: http://${localIP}:${process.env.PORT || 3001}/${version}/${nameCleaned}`);
            }
        });
    }
});

module.exports = router;