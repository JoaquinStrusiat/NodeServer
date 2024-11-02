const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Datos de la versión 2.");
});

module.exports = router;