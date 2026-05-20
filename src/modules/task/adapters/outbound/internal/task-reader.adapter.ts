import { TaskReaderPort } from "../../../../employee/application/ports/task-reader.port";
import { TaskRepositoryPort } from "../../../domain/ports/task.repository.port";

export class TaskReaderAdapter implements TaskReaderPort {
  constructor(private readonly repository: TaskRepositoryPort) {}

  async exists(id: string): Promise<boolean> {
    return this.repository.exists(id);
  }
}
