const express   = require("express")
const exphbs    = require("express-handlebars")
const path      = require("path")
const app       = express()
const db        = require("./db/connection.js")
const bodyParse = require('body-parser')
const Job       = require("./models/Job")

const PORT = 3000

app.listen(PORT, function() {
    console.log(`O express está rodando na porta ${PORT}`)
}) 

//body parser
app.use(bodyParse.urlencoded({extended: false}))

//handle bars
app.set("views", path.join(__dirname, "views"));
app.engine('handlebars', exphbs.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")

// static folder
app.use(express.static(path.join(__dirname, "public")))


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
    Job.findAll({order: [
        ['createdAt', 'DESC']
    ]})
    .then(jobs => {
        res.render('index', {
            jobs
        })

    })
})

app.use("/jobs", require("./routes/jobs"))