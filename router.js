export class Router {
    constructor() {
        this.routes = [];
    }

    add(method, path, handler) {
        this.routes.push(method, path, handler);
    }

    async route(request) {
        const url = new URL(request.url);
        for (const route of this.routes) {
            if (route.method === request.method && route.path === url.pathname) {
                const response = await route.handler(request);
                return new Response(JSON.stringify(response), {
                    status: 200,
                    headers: {"Content-Type": "application/json"}
                });
            }
        }
        return new Response("Not Found", { status: 404 });
    }
}

export function createRouter() {
    return new Router();
}