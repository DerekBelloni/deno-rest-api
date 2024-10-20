import employeesManager from "../repositories/employeesManager.js";

export class EmployeesController {
    static async getEmployees(_req) {
        return await employeesManager.getAll();
    }

    static async getEmployeeByID(_req) {
        const id = _req.params.id;
        return await employeesManager.getById(id);
    }
}