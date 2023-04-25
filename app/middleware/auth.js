const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    // Récupérer le token depuis le header Authorization
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({
            message: 'Token manquant'
        });
    }

    try {
        // Vérifier la signature du token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Stocker les informations du token dans l'objet req.user
        req.user = decoded;

        // Passer au middleware suivant
        next();
    } catch (error) {
        res.status(403).json({
            message: 'Token invalide'
        });
    }
};

module.exports = verifyToken;