import { Inject, Injectable } from "@nestjs/common";
import { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";
import { Employee } from "../../domain/entities/employee.entity";
import { EMPLOYEE_REPOSITORY } from "../../employee.tokens";

@Injectable()
export class ListEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: EmployeeRepositoryPort,
  ) {}

  async execute(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }
}
