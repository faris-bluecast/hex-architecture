import type { Provider } from "@nestjs/common";
import { PrismaService } from "../../../../prisma/prisma.service";
import { TaskDITokens } from "../../../task/di/task-di-tokens";
import { PrismaEmployeeRepository } from "../../adapters/outbound/persistence/prisma-employee.repository";
import { EmployeeDITokens } from "../../di/employee-di-tokens";
import type { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";
import type { TaskReaderPort } from "../../domain/ports/task-reader.port";
import { AssignTaskService } from "../../domain/services/assign-task.service";
import { CreateEmployeeService } from "../../domain/services/create-employee.service";
import { ListEmployeeService } from "../../domain/services/list-employee.service";

export const persistentProviders: Provider[] = [
  PrismaService,
  {
    provide: EmployeeDITokens.EmployeeRepository,
    useFactory: (prisma: PrismaService) => {
      return new PrismaEmployeeRepository(prisma);
    },
    inject: [PrismaService],
  },
];

export const useCaseProviders: Provider[] = [
  {
    provide: EmployeeDITokens.CreateEmployeeUseCase,
    useFactory: (repo: EmployeeRepositoryPort) => {
      return new CreateEmployeeService(repo);
    },
    inject: [EmployeeDITokens.EmployeeRepository],
  },
  {
    provide: EmployeeDITokens.ListEmployeeUseCase,
    useFactory: (repo: EmployeeRepositoryPort) => {
      return new ListEmployeeService(repo);
    },
    inject: [EmployeeDITokens.EmployeeRepository],
  },
  {
    provide: EmployeeDITokens.AssignTaskUseCase,
    useFactory: (repo: EmployeeRepositoryPort, taskReader: TaskReaderPort) => {
      return new AssignTaskService(repo, taskReader);
    },
    inject: [EmployeeDITokens.EmployeeRepository, TaskDITokens.TaskReaderPort],
  },
];
