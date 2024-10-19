import { APP_HOST, APP_PORT } from "./config.js";
import { createRouter } from "./router.js";
import { defineRoutes } from "./routes.js";

const router = createRouter();
defineRoutes(router);

async function handleRequest(request) {
    return await router.route(request);
}

console.log(`Listening on port http://localhost:${APP_PORT}`);
Deno.serve({port: APP_PORT, host: APP_HOST}, handleRequest)