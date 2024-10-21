import employeesManager from "../repositories/employeesManager.js";

export class EmployeesController {
    static async getEmployees(_req) {
        return await employeesManager.getAll();
    }

    static async getEmployeeByID(_req) {
        const id = _req.params.id;
        return await employeesManager.getById(id);
    }

    static async getEmployeeBirthdate(_req) {
        const id = _req.params.id;
        const firstName = _req.params.first_name;
        return await employeesManager.getBirthDate(id, firstName);
    }

   static async getEmployeeHireDate(_req) {
        console.log("_req: ", _req); 
        const id = _req.params.id;
        const lastName = _req.params.last_name;
        return await employeesManager.getHireDate(id, lastName);
    }

    static async getEmployeeGender(_req) {
        const id = _req.params.id;
        return await employeesManager.getGender(id);
    }
}