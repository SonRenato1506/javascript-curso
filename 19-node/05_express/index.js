let express = require("express")
let app = express()

app.get("/", function(req, res) {
    res.send("Primeira rota com Express")
})

app.listen(3000, function() {
    console.log("A aplicação  está funcoinando na porta 3000")
})