import { Inject } from '@nestjs/common';
import { randomUUID } from 'crypto';

import { Task } from '../../domain/entities/task.entity';
import { TaskRepositoryPort } from '../../domain/ports/task.repository.port';
import { TASK_REPOSITORY } from '../../task.tokens';

export class CreateTaskUseCase {
  constructor(
    @Inject(TASK_REPOSITORY)
    private readonly repository: TaskRepositoryPort,
  ) {}

  async execute(title: string): Promise<Task> {
    const task = new Task(randomUUID(), title);

    await this.repository.save(task);

    return task;
  }
}
