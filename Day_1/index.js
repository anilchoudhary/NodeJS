
const http = require('http');

const server = http.createServer((req, res) => {
    res.end("Server is running...");
});

server.listen("3000","127.0.0.1", () => {
    console.log("Server has started...");
})