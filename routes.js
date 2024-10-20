import { EmployeesController } from "./controllers/employeesController.js";

export function defineRoutes(router) {
    router.add({method: "GET", path: "/employees", handler: EmployeesController.getEmployees});
    router.add({method: "GET", path: "/employees/:id", handler: EmployeesController.getEmployeeByID});
}