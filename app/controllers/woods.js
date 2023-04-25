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