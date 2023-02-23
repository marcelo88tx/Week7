const http = require("http");

const server = http.createServer((req, res) => {
    console.log("Server created")
})

const PORT = 4000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))