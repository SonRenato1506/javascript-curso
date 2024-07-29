const express   = require("express")
const exphbs    = require("express-handlebars")
const path      = require("path")
const app       = express()
const db        = require("./db/connection.js")
const bodyParse = require('body-parser')

const PORT = 3000

app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`)
}) 

//body parser
app.use(bodyParse.urlencoded({extended: false}))

//handle bars
app.set("views", path.join(__dirname, "views"));
app.engine('handlebars', exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")


// db connection
db.authenticate()
.then(() => {
    console.log("Conectou ao banco com sucesso")
})
.catch (err => {
    console.log("Ocorreu um erro ao conectar")
})

//routes
app.get("/", (req, res) => {
    res.send("Está funcionando")
})

app.use("/jobs", require("./routes/jobs"))