const {
    Wood
} = require("../models");

exports.readAll = async (req, res) => {
    try {
        const woods = await Wood.findAll()
        res.status(201).json(woods);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.findByHardness = async (req, res) => {
    try {
        const woods = await Wood.findAll({
            where: {
                hardness: req.params.hardness,
            },
        })
        res.status(201).json(woods);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.create = async (req, res) => {
    try {
        const newWood = await Wood.create({
            ...req.body
        })
        res.status(201).json({
            message: `Création réussi : ${newWood.name}`
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}