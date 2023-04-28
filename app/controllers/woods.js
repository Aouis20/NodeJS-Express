const {
    Wood,
    Type,
    Hardness
} = require("../models");
const path = require('path')
const fs = require('fs');
const hardness = require("../models/hardness");

exports.readAll = async (req, res) => {
    try {
        const woods = await Wood.findAll({
            include: [{
                    model: Type,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                },
                {
                    model: Hardness,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            ],
            attributes: {
                exclude: ["typeId", "hardnessId"]
            }
        })
        res.status(201).json(woods);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.create = async (req, res) => {
    const pathname = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    try {
        const newWood = await Wood.create({
            ...JSON.parse(req.body.datas), //Transforme les données en format utilisable
            image: pathname,
        })
        res.status(201).json({
            message: `New wood created successfully : ${newWood.name}`,
            datas: newWood
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.readOne = async (req, res) => {
    try {
        const wood = await Wood.findOne({
            where: {
                id: req.params.id,
            },
            include: [{
                    model: Type,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                },
                {
                    model: Hardness,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            ],
            attributes: {
                exclude: ["typeId", "hardnessId"]
            }

        });
        res.status(201).json(wood);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.update = async (req, res) => {
    const pathname = req.file ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}` : null;

    try {
        const wood = await Wood.findOne({
            where: {
                id: req.params.id,
            },
        })

        if (!wood) {
            return res.status(404).json({
                message: "Wood not found"
            });
        }

        if (pathname && wood.image) {
            const imageName = path.basename(wood.image);
            const imagePath = path.join(__dirname, "..", "..", "uploads", imageName);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        wood.update({
            ...(req.body.datas ? JSON.parse(req.body.datas) : {}),
            image: pathname,
        })

        await wood.save()

        res.status(201).json({
            message: 'Updated successfully',
            datas: wood
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
}

exports.delete = async (req, res) => {
    try {
        const wood = await Wood.findOne({
            where: {
                id: req.params.id,
            },
        });
        if (!wood) {
            return res.status(404).json({
                message: "Wood not found"
            });
        }

        if (wood.image) {
            const imageName = path.basename(wood.image);
            const imagePath = path.join(__dirname, "..", "..", "uploads", imageName);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        await wood.destroy();

        res.status(204).json({
            message: "Wood deleted successfully",
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};


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