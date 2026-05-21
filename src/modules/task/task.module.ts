import { Module } from "@nestjs/common";

import { TaskController } from "./adapters/inbound/http/task.controller";
import { TaskDITokens } from "./di/task-di-tokens";
import {
  internalAdapters,
  persistentProviders,
  useCaseProviders,
} from "./infrastructure/providers/task.providers";

@Module({
  controllers: [TaskController],
  providers: [...persistentProviders, ...useCaseProviders, ...internalAdapters],
  exports: [TaskDITokens.TaskReaderPort],
})
export class TaskModule {}
