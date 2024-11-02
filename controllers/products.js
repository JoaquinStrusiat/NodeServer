const { productModel } = require("../model");

const getProducts = async (req, res) =>{
    const data = await productModel.find({});
    res.send({ data });
};

const getProduct = async (req, res) =>{
    try {
        const { id } = req.params;
        const data = await productModel.findById(id);
        res.send({data})  
    } catch (error) {
        console.log(error);
    }
};

const createProduct = async (req, res) =>{
    try {
        const { body } = req;
        const data = await productModel.create(body);
        res.send({data});
    } catch (error) {
        console.log(error)
    }  
};

const updateProduct = async (req, res) =>{
    try {
        const { id } = req.params;
        const { body } = req;
        const data = await productModel.findByIdAndUpdate(id, body, { new: true });
        res.send({data});
    } catch (error) {
        console.log(error)
    }
};

const deleteProduct = async (req, res) =>{
    try {
        const { id } = req.params; 
        const deletedProduct = await productModel.findByIdAndDelete(id); 
        res.send({ data: deletedProduct }); 
    } catch (error) {
        console.log(error)
    }
};

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct};