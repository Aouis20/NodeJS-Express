const express = require('express')
const router = require("./app/routes/index.js");
const app = express()
const path = require('path')

const db = require("./app/models/index.js");
db.sequelize
    .authenticate()
    .then(() => console.log("Database connected ..."))
    .catch((err) => console.log(err));


//Ajout des routes
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use("/api", router);

// Permet de servir statiquement les assets
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


module.exports = app;