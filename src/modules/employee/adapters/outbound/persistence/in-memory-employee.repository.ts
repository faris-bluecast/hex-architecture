import { Logger } from "@nestjs/common";
import { EmployeeRepositoryPort } from "../../../domain/ports/employee.repository.port";
import {
  Employee,
  TaskAssignment,
} from "../../../domain/entities/employee.entity";

export class InMemoryEmployeeRepository implements EmployeeRepositoryPort {
  private readonly logger = new Logger(InMemoryEmployeeRepository.name);

  constructor() {
    this.logger.log("In memory employee repo initialized");
  }
  private employees: Employee[] = [];

  async save(task: Employee): Promise<void> {
    this.employees.push(task);
  }

  async findById(id: string): Promise<Employee | null> {
    return this.employees.find((task) => task.id === id) || null;
  }

  async findAll(): Promise<Employee[]> {
    return this.employees;
  }

  async findByEmployeeCode(employeeCode: string): Promise<Employee | null> {
    return (
      this.employees.find((task) => task.employeeCode === employeeCode) || null
    );
  }

  async assignTask(
    employeeId: string,
    assignedTask: TaskAssignment[],
  ): Promise<void> {
    const employee = this.employees.find((e) => e.id === employeeId);

    if (!employee) throw new Error("Employee not found");

    assignedTask.map((t) => employee.assignTask(t.taskId, t.doneQty));
  }
}
