import { Client } from "https://deno.land/x/postgres/mod.ts"

class Database {
    constructor() {
        this.connect();
    }

    async connect() {
        this.client = new Client({
            user: "derekbelloni",
            database: "Employees",
            hostname: "localhost",
            port: 5432
        });
        await this.client.connect();
    }
}

export default new Database().client;