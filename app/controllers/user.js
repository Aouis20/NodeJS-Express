const bcrypt = require('bcrypt');
const {
    User
} = require("../models");

exports.signup = async (req, res) => {
    const {
        firstname,
        lastname,
        email,
        password
    } = req.body

    try {
        const existingUser = await User.findOne({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.status(401).json({
                error: 'User already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: hashedPassword
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.login = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    try {

        const user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            return res.status(401).json({
                error: 'Utilisateur introuvable',
            });
        }

        // Vérification du mot de passe
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Mot de passe incorrect',
            });
        }

        res.status(200).json({
            error: 'Connexion réussi'
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};