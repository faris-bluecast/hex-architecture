import { Body, Controller, Get, Inject, Post } from "@nestjs/common";

import { CreateEmployeeUseCase } from "../../../application/use-cases/create-employee.use-case";
import { CreateEmployeeDto } from "../../../application/dto/create-employee.dto";
import { ListEmployeeUseCase } from "../../../application/use-cases/list-employees.use-case";
import { EmployeeDITokens } from "../../../di/employee-di-tokens";
import { AssignTaskUseCase } from "../../../application/use-cases/assign-task.use-case";
import { AssignTaskDto } from "../../../application/dto/assign-task.dto";

@Controller("employees")
export class EmployeeController {
  constructor(
    @Inject(EmployeeDITokens.CreateEmployeeUseCase)
    private readonly createEmployeeUseCase: CreateEmployeeUseCase,

    @Inject(EmployeeDITokens.ListEmployeeUseCase)
    private readonly listEmployeeUseCase: ListEmployeeUseCase,

    @Inject(EmployeeDITokens.AssignTaskUseCase)
    private readonly assignTaskUseCase: AssignTaskUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.createEmployeeUseCase.execute(dto);
  }

  @Get()
  findAll() {
    return this.listEmployeeUseCase.execute();
  }

  @Post("assign-task")
  assignTask(@Body() dto: AssignTaskDto) {
    return this.assignTaskUseCase.execute(dto);
  }
}
