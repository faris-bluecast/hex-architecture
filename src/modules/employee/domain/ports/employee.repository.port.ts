import { AssignTaskDto } from "../../application/dto/assign-task.dto";
import { Employee } from "../entities/employee.entity";

export interface EmployeeRepositoryPort {
  save(employee: Employee): Promise<void>;
  findById(id: string): Promise<Employee | null>;
  findAll(): Promise<Employee[]>;
  findByEmployeeCode(employeeCode: string): Promise<Employee | null>;

  assignTask(assignedTask: AssignTaskDto): Promise<void>;
}
