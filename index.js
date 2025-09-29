import http from "http";
import { readFile } from "fs/promises";

const server = http.createServer(async (rec, res) => {
    switch (rec.url) {
        case '/':
            res.end(await readFile("pages/home.html", "utf-8"));
            break;
        case '/contacts':
            res.end(await readFile("pages/contacts.html", "utf-8"));
            break;
        case '/help':
            res.end(await readFile("pages/help.html", "utf-8"));
            break;
        default:
            res.end(await readFile("pages/notfound.html", "utf-8"));
    }
});

server.listen(4002); 