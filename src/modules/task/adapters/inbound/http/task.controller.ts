import { Body, Controller, Get, Inject, Param, Post } from "@nestjs/common";

import { CreateTaskDto } from "../../../application/dto/create-task.dto";

import { CreateTaskUseCase } from "../../../application/use-cases/create-task.use-case";
import { GetTaskUseCase } from "../../../application/use-cases/get-task.use-case";
import { ListTasksUseCase } from "../../../application/use-cases/list-tasks.use-case";
import { TaskDITokens } from "../../../di/task-di-tokens";

@Controller("tasks")
export class TaskController {
  constructor(
    @Inject(TaskDITokens.CreateTaskUseCase)
    private readonly createTaskUseCase: CreateTaskUseCase,
    @Inject(TaskDITokens.GetTaskUseCase)
    private readonly getTaskUseCase: GetTaskUseCase,
    @Inject(TaskDITokens.ListTasksUseCase)
    private readonly listTasksUseCase: ListTasksUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.createTaskUseCase.execute(dto);
  }

  @Get(":id")
  getById(@Param("id") id: string) {
    return this.getTaskUseCase.execute(id);
  }

  @Get()
  list() {
    return this.listTasksUseCase.execute();
  }
}
