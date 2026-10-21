const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const urlPath = new URL(req.url, `http://${req.headers.host}`);
    const pathName = urlPath.pathname;
    const fileName = urlPath.searchParams.get("fname");
    const content = urlPath.searchParams.get("content");
    const fileDir = path.join(__dirname, "files");
    if (!fileName) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("File name not found");
        return;
    }
    const filePath = path.join(fileDir, fileName);
    if (pathName === "/write" && req.method === "POST") {
        if (!content) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Content not found");
            return;
        }
        if (fs.existsSync(filePath)) { //if file exist
            res.writeHead(409, { "Content-Type": "text/plain" });
            res.end("File already exists");
            return;
        }
        fs.writeFile(filePath, content, "utf8", (error) => {
            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Unable to write file");
                return;
            }
            res.writeHead(201, { "Content-Type": "text/plain" });
            res.end("File written successfully");
        });
        return;
    }
    if (pathName === "/append" && req.method === "PUT") {
        if (!content) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Content not found");
            return;
        }
        // File must already exist
        if (!fs.existsSync(filePath)) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("File not found");
            return;
        }

        fs.appendFile(filePath, content, "utf8", (error) => {

            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Unable to append content");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Content appended successfully");
        });

        return;
    }



    if (pathName === "/read" && req.method === "GET") {

        fs.readFile(filePath, "utf8", (error, data) => {

            if (error) {
                res.writeHead(404, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    error: "File not found"
                }));

                return;
            }
            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end("<pre>" + data + "</pre>");
        });

        return;
    }



    if (pathName === "/delete" && req.method === "DELETE") {

        if (!fs.existsSync(filePath)) {
            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            res.end("File not found");
            return;
        }

        fs.unlink(filePath, (error) => {

            if (error) {
                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });

                res.end("Unable to delete file");
                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/plain"
            });

            res.end("File deleted successfully");
        });

        return;
    }


    if (pathName === "/readfile" && req.method === "GET") {

        fs.readFile(filePath, "utf8", (error, data) => {

            if (error) {
                res.writeHead(404, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    error: "File not found"
                }));

                return;
            }

            res.writeHead(200, {
                "Content-Type": "text/html"
            });

            res.end("<pre>" + data + "</pre>");
        });

        return;
    }

    res.writeHead(404, {
        "Content-Type": "text/plain"
    });

    res.end("Route not found");
});


// Start server
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});