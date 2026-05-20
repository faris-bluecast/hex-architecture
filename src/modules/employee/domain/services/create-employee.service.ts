import { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";
import { Employee } from "../../domain/entities/employee.entity";
import { CreateEmployeeDto } from "../../application/dto/create-employee.dto";
import { CreateEmployeeUseCase } from "../../application/use-cases/create-employee.use-case";
import { randomUUID } from "node:crypto";

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

    this.employeeRepository.save(employee);
  }
}
