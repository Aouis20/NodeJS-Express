const express = require('express')
const router = require("./app/routes/index.js");
const app = express()
const path = require('path')
const cors = require('cors')


const db = require("./app/models/index.js");
db.sequelize
    .authenticate()
    .then(() => console.log("Database connected ..."))
    .catch((err) => console.log(err));

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

//Ajout des routes
app.use("/api", router);

// Permet de servir statiquement les assets
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


module.exports = app;