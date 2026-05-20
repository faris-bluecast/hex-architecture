import { randomUUID } from "crypto";

import { Task } from "../../domain/entities/task.entity";
import { TaskRepositoryPort } from "../../domain/ports/task.repository.port";
import { CreateTaskUseCase } from "../../application/use-cases/create-task.use-case";
import { CreateTaskDto } from "../../application/dto/create-task.dto";

export class CreateTaskService implements CreateTaskUseCase {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async execute(task: CreateTaskDto): Promise<void> {
    await this.repository.save(new Task(randomUUID(), task.title));
  }
}
