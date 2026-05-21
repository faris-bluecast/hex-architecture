import { Logger } from "@nestjs/common";
import type { PrismaService } from "../../../../../prisma/prisma.service";

import { Task } from "../../../domain/entities/task.entity";
import type { TaskRepositoryPort } from "../../../domain/ports/task.repository.port";

export class PrismaTaskRepository implements TaskRepositoryPort {
  private readonly logger = new Logger(PrismaTaskRepository.name);
  constructor(private readonly prisma: PrismaService) {
    this.logger.log("Prisma client initialized");
  }

  async save(task: Task): Promise<void> {
    await this.prisma.task.create({
      data: {
        id: task.id,
        title: task.title,
      },
    });
  }

  async findById(id: string): Promise<Task | null> {
    const task = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!task) {
      return null;
    }

    return new Task(task.id, task.title);
  }

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();

    return tasks.map((task) => new Task(task.id, task.title));
  }

  async exists(id: string): Promise<boolean> {
    const count = await this.prisma.task.count({
      where: { id },
    });
    return count > 1;
  }
}
