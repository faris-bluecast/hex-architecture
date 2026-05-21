import { randomUUID } from "crypto";
import type { CreateTaskDto } from "../../application/dto/create-task.dto";
import type { CreateTaskUseCase } from "../../application/use-cases/create-task.use-case";
import { Task } from "../../domain/entities/task.entity";
import type { TaskRepositoryPort } from "../../domain/ports/task.repository.port";

export class CreateTaskService implements CreateTaskUseCase {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async execute(task: CreateTaskDto): Promise<void> {
    await this.repository.save(new Task(randomUUID(), task.title));
  }
}
