import type { Provider } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/prisma.service";
import { TaskReaderAdapter } from "../../adapters/outbound/internal/task-reader.adapter";
import { PrismaTaskRepository } from "../../adapters/outbound/persistence/prisma-task.repository";
import { TaskDITokens } from "../../di/task-di-tokens";
import type { TaskRepositoryPort } from "../../domain/ports/task.repository.port";
import { CreateTaskService } from "../../domain/services/create-task.service";
import { GetTaskService } from "../../domain/services/get-task.service";
import { ListTasksService } from "../../domain/services/list-task.service";

export const persistentProviders: Provider[] = [
  PrismaService,
  {
    provide: TaskDITokens.TaskRepository,
    useFactory: (prisma: PrismaService) => {
      return new PrismaTaskRepository(prisma);
    },
    inject: [PrismaService],
  },
];

export const useCaseProviders: Provider[] = [
  {
    provide: TaskDITokens.CreateTaskUseCase,
    useFactory: (repo: TaskRepositoryPort) => {
      return new CreateTaskService(repo);
    },
    inject: [TaskDITokens.TaskRepository],
  },
  {
    provide: TaskDITokens.GetTaskUseCase,
    useFactory: (repo: TaskRepositoryPort) => {
      return new GetTaskService(repo);
    },
    inject: [TaskDITokens.TaskRepository],
  },
  {
    provide: TaskDITokens.ListTasksUseCase,
    useFactory: (repo: TaskRepositoryPort) => {
      return new ListTasksService(repo);
    },
    inject: [TaskDITokens.TaskRepository],
  },
];

export const internalAdapters: Provider[] = [
  {
    provide: TaskDITokens.TaskReaderPort,
    useFactory: (repo: TaskRepositoryPort) => new TaskReaderAdapter(repo),
    inject: [TaskDITokens.TaskRepository],
  },
];
