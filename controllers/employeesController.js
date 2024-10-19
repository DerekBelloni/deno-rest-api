import employeesManager from "../repositories/employeesManager.js";

export class EmployeesController {
    static async getEmployees() {
        const employees = await employeesManager.getAll();
        return new Response(JSON.stringify(employees), {
            status: 200,
            headers: {"Content-Type": "text/plain"}
        });
    }
}