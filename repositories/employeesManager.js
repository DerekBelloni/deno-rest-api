import client from "../db/database.js";

class EmployeesManager {
    getAll() {
        return client.queryArray`
            SELECT * FROM employees
        `;
    }

    getById(id) {
        return client.queryArray`
            SELECT * FROM employees
            WHERE ${id} = emp_no
        `;
    }
}

const employeesManager = new EmployeesManager();
export default employeesManager