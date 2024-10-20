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

    getBirthDate(id, firstName) {
        return client.queryArray`
            SELECT birth_date FROM employees
            WHERE ${id} = emp_no AND
            ${firstName} = first_name
        `;
    }
}

const employeesManager = new EmployeesManager();
export default employeesManager