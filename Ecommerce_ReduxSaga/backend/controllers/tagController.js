const slugify = require("slugify");
const tagModel = require("../models/tagModel");

//createTagCtrl
const createTagCtrl = async (req, res) => {
    try {
        const { name, slug } = req.body;
        if (!name) {
            return res.status(201).send({ success: false, message: `Tag name is required` })
        }

        if (!slug) {
            const newTag = new tagModel({ name: req.body.name, slug: slugify(name) });
            await newTag.save();
            return res.status(200).send({ success: true, message: `${newTag.name} created successfully`, newTag });
        } else {
            const newTag = new tagModel({ name: req.body.name, slug: slugify(req.body.slug) });
            await newTag.save();
            return res.status(200).send({ success: true, message: `${newTag.name} created successfully`, newTag });
        }
    } catch (err) {
        return res.status(500).send({ success: false, message: `Error in createTagCtrl : ${err.message}` });
    }
};

//updateTagCtrl
const updateTagCtrl = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug } = req.body;
        if (!name) {
            return res.status(201).send({ success: false, message: `Tag name is required` })
        }

        const existingName = await tagModel.findOne({ name: req.body.name });
        if (existingName) {
            return res.status(201).send({ success: false, message: `${existingName.name} already exists` });
        } else {
            if (!slug) {
                const updatedTag = await tagModel.findByIdAndUpdate(id, { name: req.body.name, slug: slugify(name) }, { new: true });
                console.log(updatedTag)
                await updatedTag.save();
                return res.status(200).send({ success: true, message: `${updatedTag.name} updated successfully`, updatedTag });
            } else {
                const updatedTag = await tagModel.findByIdAndUpdate(id, { name: req.body.name, slug: slugify(req.body.slug) }, { new: true });
                console.log(updatedTag)
                await updatedTag.save();
                return res.status(200).send({ success: true, message: `${updatedTag.name} updated successfully`, updatedTag });
            }
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in updateTagCtrl : ${error.message}` })
    }
}

//deleteTagCtrl
const deleteTagCtrl = async (req, res) => {
    try {
        const tag = await tagModel.findByIdAndDelete(req.params.id);
        return res.status(200).send({ success: true, message: `${tag.name} deleted successfully`, tag });
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in deleteTagCtrl : ${error.message}` })
    }
}

//getSingleTagCtrl
const getSingleTagCtrl = async (req, res) => {
    try {
        const tag = await tagModel.findOne({ slug: req.params.slug });
        if (tag) {
            return res.send({ success: true, message: `${tag.name} fetched successfully`, tag });
        } else {
            return res.status(201).send({ success: false, message: 'No such tag found' });
        }
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in getSingleTagCtrl : ${error.message}` })
    }
}

//getAllTagsCtrl
const getAllTagsCtrl = async (req, res) => {
    try {
        const tags = await tagModel.find({});
        return res.status(200).send({ success: true, message: `All tags fetched successfully`, tags });
    } catch (error) {
        return res.status(500).send({ success: false, message: `Error in getAllTagsCtrl : ${error.message}` })
    }
}

module.exports = { createTagCtrl, updateTagCtrl, deleteTagCtrl, getSingleTagCtrl, getAllTagsCtrl }