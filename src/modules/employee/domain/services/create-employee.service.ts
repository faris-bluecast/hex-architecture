import { randomUUID } from "node:crypto";
import type { CreateEmployeeDto } from "../../application/dto/create-employee.dto";
import type { CreateEmployeeUseCase } from "../../application/use-cases/create-employee.use-case";
import { Employee } from "../../domain/entities/employee.entity";
import type { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";

export class CreateEmployeeService implements CreateEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepositoryPort) {}

  async execute(dto: CreateEmployeeDto): Promise<void> {
    const employee = new Employee({
      id: randomUUID(),
      employeeCode: dto.employeeCode,
      employeeName: dto.employeeName,
      legacyId: dto.legacyId,
      email: dto.email,
      phoneNumber: dto.phoneNumber,
      biometricId: dto.biometricId,
    });

    await this.employeeRepository.save(employee);
  }
}
