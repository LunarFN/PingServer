const http = require("http");

const port = 3350;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("PONG");
});

server.listen(port, () => {
    console.log("[Server] Started listening for pings on port: " + port);
});