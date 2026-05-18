import { Inject } from '@nestjs/common';

import { TaskRepositoryPort } from '../../domain/ports/task.repository.port';
import { TASK_REPOSITORY } from '../../task.tokens';

export class ListTasksUseCase {
  constructor(
    @Inject(TASK_REPOSITORY)
    private readonly repository: TaskRepositoryPort,
  ) {}

  async execute() {
    return this.repository.findAll();
  }
}
