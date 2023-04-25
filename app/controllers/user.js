const User = require("../models/user")

exports.signup = async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message
        });
    }
};

exports.login = (req, res) => {
    res.send('You are logged in');
    res.json(req.body)
}