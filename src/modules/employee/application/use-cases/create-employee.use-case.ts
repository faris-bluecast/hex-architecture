import { Inject, Injectable } from "@nestjs/common";
import { CreateEmployeeDto } from "../dto/create-employee.dto";
import { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";
import { Employee } from "../../domain/entities/employee.entity";
import { EMPLOYEE_REPOSITORY } from "../../employee.tokens";

@Injectable()
export class CreateEmployeeUseCase {
  constructor(
    @Inject(EMPLOYEE_REPOSITORY)
    private readonly employeeRepository: EmployeeRepositoryPort,
  ) {}

  async execute(dto: CreateEmployeeDto): Promise<void> {
    const employee = new Employee({
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
