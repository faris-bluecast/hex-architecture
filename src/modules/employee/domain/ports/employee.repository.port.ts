import { Employee, TaskAssignment } from "../entities/employee.entity";

export interface EmployeeRepositoryPort {
  save(employee: Employee): Promise<void>;
  findById(id: string): Promise<Employee | null>;
  findAll(): Promise<Employee[]>;
  findByEmployeeCode(employeeCode: string): Promise<Employee | null>;

  assignTask(employeeId: string, assignedTask: TaskAssignment[]): Promise<void>;
}
