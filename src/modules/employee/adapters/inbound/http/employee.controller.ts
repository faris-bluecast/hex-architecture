import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import type { AssignTaskDto } from "../../../application/dto/assign-task.dto";
import { CreateEmployeeDto } from "../../../application/dto/create-employee.dto";
import type { AssignTaskUseCase } from "../../../application/use-cases/assign-task.use-case";
import type { CreateEmployeeUseCase } from "../../../application/use-cases/create-employee.use-case";
import type { ListEmployeeUseCase } from "../../../application/use-cases/list-employees.use-case";
import { EmployeeDITokens } from "../../../di/employee-di-tokens";

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
