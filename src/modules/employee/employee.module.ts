import { Module } from "@nestjs/common";

import { employeeProviders } from "./infrastructure/providers/employee.providers";
import { CreateEmployeeUseCase } from "./application/use-cases/create-employee.use-case";
import { EmployeeController } from "./adapters/inbound/http/employee.controller";
import { ListEmployeeUseCase } from "./application/use-cases/list-employees.use-case";

@Module({
  controllers: [EmployeeController],
  providers: [...employeeProviders, CreateEmployeeUseCase, ListEmployeeUseCase],
})
export class EmployeeModule {}
