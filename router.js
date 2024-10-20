export class Router {
    constructor() {
        this.routes = [];
    }

    add(route) {
        this.routes.push(route);
    }

    extractParams(route, url) {
        const params = {};
        const routeParts = route.path.split('/');
        const urlParts = url.pathname.split('/');
        
        if (routeParts.length != urlParts.length) {
            return null;
        }

        for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
                const paramName = routeParts[i].slice(1);
                params[paramName] = urlParts[i];
            }
        }
        url.pathname = route.path;
        return params;
    }

    async route(request) {
        const url = new URL(request.url);
        for (const route of this.routes) {
            const params = this.extractParams(route, url);
          
            if (params) {
                Object.defineProperty(request, 'params', {
                    value: params,
                    enumerable: true,
                    writable: true,
                    configurable: true
                });
            }
 
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