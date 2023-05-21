const slugify = require("slugify");
const categoryModel = require("../models/categoryModel");

//createCategoryCtrl
const createCategoryCtrl = async (req, res) => {
    try {
        const { name, slug } = req.body;
        if (!name) {
            return res.status(201).send({ success: false, message: `category name is required` })
        }

        const isCategoryExists = await categoryModel.findOne({ name: req.body.name });
        if (isCategoryExists) {
            return res.status(201).send({ success: false, message: `${isCategoryExists.name} category already exists` })
        } else {
            if (slug) {
                const newCategory = new categoryModel({ name: req.body.name, slug: slugify(slug) });
                await newCategory.save();
                return res.status(200).send({ success: true, message: `${newCategory.name} category created successfully`, newCategory });
            } else {
                const newCategory = new categoryModel({ name: req.body.name, slug: slugify(name) });
                await newCategory.save();
                return res.status(200).send({ success: true, message: `${newCategory.name} category created successfully`, newCategory });
            }
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in createCategoryCtrl : ${error}` });
    }
}

//updateCategoryCtrl
const updateCategoryCtrl = async (req, res) => {
    try {
        const { name, slug } = req.body;
        if (!name) {
            return res.status(201).send({ success: false, message: `category name is required` })
        }

        const isCategoryExists = await categoryModel.findOne({ name: req.body.name });
        if (isCategoryExists) {
            return res.status(201).send({ success: false, message: `${isCategoryExists.name} category already exists` })
        } else {
            if (slug) {
                const category = await categoryModel.findByIdAndUpdate(req.params.id, { name: req.body.name, slug: slugify(req.body.slug) }, { new: true });
                await category.save();
                return res.status(200).send({ success: true, message: `${category.name} updated successfully`, category })
            } else {
                const category = await categoryModel.findByIdAndUpdate(req.params.id, { name: req.body.name, slug: slugify(req.body.name) }, { new: true });
                await category.save();
                return res.status(200).send({ success: true, message: `${category.name} updated successfully`, category })
            }
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in updateCategoryCtrl : ${error}` });
    }
}

//deleteCategoryCtrl
const deleteCategoryCtrl = async (req, res) => {
    try {
        const category = await categoryModel.findByIdAndDelete(req.params.id);
        res.status(200).send({ success: true, message: `${category.name} category deleted successfully` });
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in deleteCategoryCtrl : ${error}` });
    }
}

//getAllCategoriesCtrl
const getAllCategoriesCtrl = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        res.status(200).send({ success: true, message: 'All categories fetched successfully', categories })
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in getAllCategoriesCtrl : ${error}` });
    }
}

//getSingleCategoryCtrl
const getSingleCategoryCtrl = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.id);
        if (!category) {
            return res.status(201).send({ success: false, message: 'No such category exists' })
        } else {
            return res.status(200).send({ success: true, message: `${category.name} fetched successfully`, category })
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in getSingleCategoryCtrl : ${error}` });
    }
}

module.exports = { createCategoryCtrl, updateCategoryCtrl, deleteCategoryCtrl, getAllCategoriesCtrl, getSingleCategoryCtrl }