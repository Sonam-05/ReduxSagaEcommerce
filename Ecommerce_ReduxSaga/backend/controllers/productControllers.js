const productModel = require("../models/productModel");

//createProductCtrl
const createProductCtrl = async (req, res) => {
    try {
        const { name, category, photo, description, originalPrice, sellingPrice, quantity } = req.body;
        if (!name) {
            return res.status(201).send({ success: false, message: 'name is required' })
        } else if (!category) {
            return res.status(201).send({ success: false, message: 'category is required' })
        }else if (!photo) {
            return res.status(201).send({ success: false, message: 'photo is required' })
        } else if (!description) {
            return res.status(201).send({ success: false, message: 'description is required' })
        } else if (!originalPrice) {
            return res.status(201).send({ success: false, message: 'originalPrice is required' })
        } else if (!sellingPrice) {
            return res.status(201).send({ success: false, message: 'sellingPrice is required' })
        } else if (!quantity) {
            return res.status(201).send({ success: false, message: 'quantity is required' })
        }

        const newProduct = new productModel(req.body);
        await newProduct.save();
        return res.status(200).send({ success: true, message: `${newProduct.name} added successfully`, newProduct });

    } catch (error) {
        res.status(500).send({ success: false, message: `Error in createProductCtrl : ${error}` })
    }
}

//updateProductCtrl
const updateProductCtrl = async (req, res) => {
    try {
        const {  id, category, name, photo, description, originalPrice, sellingPrice, quantity } = req.body;
        if (!name) {
            return res.status(201).send({ success: false, message: 'name is required' })
        } else if (!category) {
            return res.status(201).send({ success: false, message: 'category is required' })
        }else if (!photo) {
            return res.status(201).send({ success: false, message: 'photo is required' })
        } else if (!description) {
            return res.status(201).send({ success: false, message: 'description is required' })
        } else if (!originalPrice) {
            return res.status(201).send({ success: false, message: 'originalPrice is required' })
        } else if (!sellingPrice) {
            return res.status(201).send({ success: false, message: 'sellingPrice is required' })
        } else if (!quantity) {
            return res.status(201).send({ success: false, message: 'quantity is required' })
        }
        const updatedProduct = await productModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
        // await updatedProduct.save();
        return res.status(200).send({ success: true, message: `${updatedProduct.name} product updated successfully`, updatedProduct });
    } catch (error) {
        res.status(500).send({ success: false, message: `Error in updateProductCtrl : ${error}` })
    }
}

//deleteProductCtrl
const deleteProductCtrl = async (req, res) => {
    try {
        const product = await productModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({ success: true, message: `${product.name} deleted successfully` });
    } catch (error) {
        res.status(500).send({ success: false, message: `Error in deleteProductCtrl : ${error}` })
    }
}

//getAllProductsCtrl
const getAllProductsCtrl = async (req, res) => {
    try {
        const products = await productModel.find({}).populate('category');
        return res.status(200).send({ success: true, message: `Fetched all products successfully`, products })
    } catch (error) {
        res.status(500).send({ success: false, message: `Error in getAllProductsCtrl : ${error}` })
    }
}

//getSingleProductCtrl
const getSingleProductCtrl = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id).populate('category');
        if (!product) {
            return res.status(201).send({ success: false, message: 'No such product exists!' })
        } else {
            return res.status(200).send({ success: true, message: `${product.name} product fetched successfully`, product })
        }
    } catch (error) {
        res.status(500).send({ success: false, message: `Error in getAllProductsCtrl : ${error}` })
    }
}

module.exports = { createProductCtrl, updateProductCtrl, deleteProductCtrl, getAllProductsCtrl, getSingleProductCtrl }