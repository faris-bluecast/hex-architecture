import { TASK_REPOSITORY } from "../../task.tokens";
import { PrismaTaskRepository } from "../../adapters/outbound/persistence/prisma-task.repository";
import { PrismaService } from "../../../../prisma/prisma.service";
import { Provider } from "@nestjs/common";
import { CreateTaskUseCase } from "../../application/use-cases/create-task.use-case";
import { TaskRepositoryPort } from "../../domain/ports/task.repository.port";
import { GetTaskUseCase } from "../../application/use-cases/get-task.use-case";
import { ListTasksUseCase } from "../../application/use-cases/list-tasks.use-case";
import { CreateTaskService } from "../../domain/use-cases/create-task.service";
import { GetTaskService } from "../../domain/use-cases/get-task.service";
import { ListTasksService } from "../../domain/use-cases/list-task.service";

export const persistentProviders: Provider[] = [
  PrismaService,
  {
    provide: TASK_REPOSITORY,
    useFactory: (prisma: PrismaService) => {
      return new PrismaTaskRepository(prisma);
    },
    inject: [PrismaService],
  },
];

export const useCaseProviders: Provider[] = [
  {
    provide: CreateTaskUseCase,
    useFactory: (repo: TaskRepositoryPort) => {
      return new CreateTaskService(repo);
    },
    inject: [TASK_REPOSITORY],
  },
  {
    provide: GetTaskUseCase,
    useFactory: (repo: TaskRepositoryPort) => {
      return new GetTaskService(repo);
    },
    inject: [TASK_REPOSITORY],
  },
  {
    provide: ListTasksUseCase,
    useFactory: (repo: TaskRepositoryPort) => {
      return new ListTasksService(repo);
    },
    inject: [TASK_REPOSITORY],
  },
];
