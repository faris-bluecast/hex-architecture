import { Module } from '@nestjs/common';

import { TaskController } from './adapters/inbound/http/task.controller';

import { CreateTaskUseCase } from './application/use-cases/create-task.use-case';
import { GetTaskUseCase } from './application/use-cases/get-task.use-case';
import { ListTasksUseCase } from './application/use-cases/list-tasks.use-case';

import { taskProviders } from './infrastructure/providers/task.providers';

@Module({
  controllers: [TaskController],
  providers: [
    ...taskProviders,

    CreateTaskUseCase,
    GetTaskUseCase,
    ListTasksUseCase,
  ],
})
export class TaskModule {}
