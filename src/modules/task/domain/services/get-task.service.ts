import type { GetTaskUseCase } from "../../application/use-cases/get-task.use-case";
import type { TaskRepositoryPort } from "../../domain/ports/task.repository.port";

export class GetTaskService implements GetTaskUseCase {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async execute(id: string) {
    return this.repository.findById(id);
  }
}
