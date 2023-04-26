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
    const pathname = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    try {
        const newWood = await Wood.create({
            ...JSON.parse(req.body.datas), //Transforme les données en format utilisable
            image: pathname,
        })
        res.status(201).json({
            message: `Création réussi : ${newWood.name}`,
            datas: newWood
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}