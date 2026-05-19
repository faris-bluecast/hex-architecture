import { randomUUID } from "crypto";

import { Task } from "../../domain/entities/task.entity";
import { TaskRepositoryPort } from "../../domain/ports/task.repository.port";
import { CreateTaskUseCase } from "../../application/use-cases/create-task.use-case";

export class CreateTaskService implements CreateTaskUseCase {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async execute(title: string): Promise<Task> {
    const task = new Task(randomUUID(), title);

    await this.repository.save(task);

    return task;
  }
}
