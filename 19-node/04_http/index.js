const {createServer} = require("http")

let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
    <h1></h1>
    `)
})