import { APP_HOST, APP_PORT } from "./config.js";
import client from "./db.js";

function handleRequest(request) {
    const url = new URL(request.url);

    if (url.pathname === "/hello" && request.method === 'GET') {
        console.log('hello there');
        return new Response("Hello to you too!");
    }

    if (url.pathname === "/employees") {
        return new Response(client.queryArray
            `SELECT * FROM employees`);
    }
    return new Response("Banana");
}

console.log(`Listening on port http://localhost:${APP_PORT}`);
Deno.serve({port: APP_PORT}, handleRequest)