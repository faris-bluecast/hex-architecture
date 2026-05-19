import { Body, Controller, Get, Post } from "@nestjs/common";

import { CreateEmployeeUseCase } from "../../../application/use-cases/create-employee.use-case";
import { CreateEmployeeDto } from "../../../application/dto/create-employee.dto";
import { ListEmployeeUseCase } from "../../../application/use-cases/list-employees.use-case";

@Controller("employees")
export class EmployeeController {
  constructor(
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,
    private readonly listEmployeeUseCase: ListEmployeeUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.createEmployeeUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.listEmployeeUseCase.execute();
  }
}
