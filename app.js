const express = require('express')
const router = require("./app/routes/index.js");
const app = express()

const db = require("./app/models/index.js");
db.sequelize
    .authenticate()
    .then(() => console.log("Database connected ..."))
    .catch((err) => console.log(err));

app.use(express.json())

//Ajout des routes
app.use("/api", router);

module.exports = app;