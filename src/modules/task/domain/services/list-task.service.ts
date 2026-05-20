import { ListTasksUseCase } from "../../application/use-cases/list-tasks.use-case";
import { TaskRepositoryPort } from "../../domain/ports/task.repository.port";

export class ListTasksService implements ListTasksUseCase {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async execute() {
    return this.repository.findAll();
  }
}
