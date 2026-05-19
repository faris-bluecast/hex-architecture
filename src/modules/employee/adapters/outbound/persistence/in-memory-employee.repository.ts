import { Logger } from "@nestjs/common";
import { EmployeeRepositoryPort } from "../../../domain/ports/employee.repository.port";
import { Employee } from "../../../domain/entities/employee.entity";

export class InMemoryEmployeeRepository implements EmployeeRepositoryPort {
  private readonly logger = new Logger(InMemoryEmployeeRepository.name);

  constructor() {
    this.logger.log("In memory employee repo initialized");
  }
  private tasks: Employee[] = [];

  async save(task: Employee): Promise<void> {
    this.tasks.push(task);
  }

  async findById(id: string): Promise<Employee | null> {
    return this.tasks.find((task) => task.id === id) || null;
  }

  async findAll(): Promise<Employee[]> {
    return this.tasks;
  }

  async findByEmployeeCode(employeeCode: string): Promise<Employee | null> {
    return (
      this.tasks.find((task) => task.employeeCode === employeeCode) || null
    );
  }
}
