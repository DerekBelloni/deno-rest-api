import client from "../db/database.js";

class EmployeesManager {
    getAll() {
        return client.queryArray`SELECT * FROM employees`
    }
}

const employeesManager = new EmployeesManager();
export default employeesManager