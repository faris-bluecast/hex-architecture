import { Logger } from "@nestjs/common";
import { PrismaService } from "../../../../../prisma/prisma.service";
import { EmployeeRepositoryPort } from "../../../domain/ports/employee.repository.port";
import { Employee } from "../../../domain/entities/employee.entity";

export class PrismaEmployeeRepository implements EmployeeRepositoryPort {
  private readonly logger = new Logger(PrismaEmployeeRepository.name);
  constructor(private readonly prisma: PrismaService) {
    this.logger.log("Prisma client initialized");
  }

  async save(employee: Employee): Promise<void> {
    await this.prisma.employee.create({
      data: {
        employeeCode: employee.employeeCode,
        employeeName: employee.employeeName,
        phoneNumber: employee.phoneNumber,
        email: employee.email,
        biometricId: employee.biometricId,
        legacyId: employee.legacyId,
      },
    });
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      return null;
    }

    return new Employee({
      id: employee.id,
      employeeCode: employee.employeeCode,
      employeeName: employee.employeeName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      biometricId: employee.biometricId,
      legacyId: employee.legacyId,
    });
  }

  async findAll(): Promise<Employee[]> {
    const employees = await this.prisma.employee.findMany();

    return employees.map(
      (employee) =>
        new Employee({
          id: employee.id,
          employeeCode: employee.employeeCode,
          employeeName: employee.employeeName,
          email: employee.email,
          phoneNumber: employee.phoneNumber,
          biometricId: employee.biometricId,
          legacyId: employee.legacyId,
        }),
    );
  }

  async findByEmployeeCode(employeeCode: string): Promise<Employee | null> {
    const employee = await this.prisma.employee.findFirst({
      where: {
        employeeCode,
      },
    });

    if (!employee) return null;

    return new Employee({
      id: employee.id,
      employeeCode: employee.employeeCode,
      employeeName: employee.employeeName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      biometricId: employee.biometricId,
      legacyId: employee.legacyId,
    });
  }
}
