import employeesManager from "../repositories/employeesManager.js";

export class EmployeesController {
    static async getEmployees() {
        return await employeesManager.getAll();
    }
}