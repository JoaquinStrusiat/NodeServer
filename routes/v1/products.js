const express = require('express');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../../controllers/products');
const router = express.Router();

//Método para obtener todos los productos
router.get("/", getProducts);

//método para obtener un producto en específico
router.get("/:id", getProduct);

//Método para crear productos
router.post("/", createProduct);

//Método para actualizar un producto segun el id
router.put("/:id", updateProduct);

//Método para eliminar un producto segun el id
router.delete("/:id", deleteProduct);

module.exports = router;