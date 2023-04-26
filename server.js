require('dotenv').config()
const app = require("./app.js")
const port = process.env.PORT
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}
// Pour tester les cors il faut absolument un front

app.use(cors(corsOptions))

app.get((req, res) => {
    res.send('Hello World ! (server.js)')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})