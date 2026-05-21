import type { ListEmployeeUseCase } from "../../application/use-cases/list-employees.use-case";
import type { Employee } from "../../domain/entities/employee.entity";
import type { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";

export class ListEmployeeService implements ListEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepositoryPort) {}

  async execute(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }
}
