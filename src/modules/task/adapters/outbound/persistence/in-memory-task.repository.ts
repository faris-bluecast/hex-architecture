import { Logger } from "@nestjs/common";
import type { Task } from "../../../domain/entities/task.entity";
import type { TaskRepositoryPort } from "../../../domain/ports/task.repository.port";

export class InMemoryTaskRepository implements TaskRepositoryPort {
  private readonly logger = new Logger(InMemoryTaskRepository.name);

  constructor() {
    this.logger.log("In memory task repo initialized");
  }
  private tasks: Task[] = [];

  async save(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.find((task) => task.id === id) || null;
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }
}
