import { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";
import { Employee } from "../../domain/entities/employee.entity";
import { ListEmployeeUseCase } from "../../application/use-cases/list-employees.use-case";

export class ListEmployeeService implements ListEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepositoryPort) {}

  async execute(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }
}
