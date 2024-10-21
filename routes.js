import { EmployeesController } from "./controllers/employeesController.js";

export function defineRoutes(router) {
    router.add({method: "GET", path: "/employees", handler: EmployeesController.getEmployees});
    router.add({method: "GET", path: "/employees/:id", handler: EmployeesController.getEmployeeByID});
    router.add({method: "GET", path: "/employees/:id/birth_date/:first_name", handler: EmployeesController.getEmployeeBirthdate});
    router.add({method: "GET", path: "/employees/:id/hire_date/:last_name", handler: EmployeesController.getEmployeeHireDate});
     
}