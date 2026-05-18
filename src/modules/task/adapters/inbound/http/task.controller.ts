import {
  Body,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { CreateTaskDto } from '../../../application/dto/create-task.dto';

import { CreateTaskUseCase } from '../../../application/use-cases/create-task.use-case';
import { GetTaskUseCase } from '../../../application/use-cases/get-task.use-case';
import { ListTasksUseCase } from '../../../application/use-cases/list-tasks.use-case';

@Controller('tasks')
export class TaskController {
  constructor(
    private readonly createTaskUseCase: CreateTaskUseCase,
    private readonly getTaskUseCase: GetTaskUseCase,
    private readonly listTasksUseCase: ListTasksUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.createTaskUseCase.execute(dto.title);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.getTaskUseCase.execute(id);
  }

  @Get()
  list() {
    return this.listTasksUseCase.execute();
  }
}
