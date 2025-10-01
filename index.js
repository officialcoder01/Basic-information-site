import { createServer } from "http";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 8080;

createServer(async (req, res) => {
    try {
        if (req.url === "/") {
            const data = await fs.readFile(path.join(__dirname,"views","index.html"));
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } else if (req.url === "/about") {
            const data = await fs.readFile(path.join(__dirname, "views", "about.html"));
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } else if (req.url === "/contact") {
            const data = await fs.readFile(path.join(__dirname, "views", "contact-me.html"));
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        } else {
            const data = await fs.readFile(path.join(__dirname, "views", "404.html"));
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(data);
        }
    } catch (error) {
        console.error("Error reading file:", error);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
    }
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});