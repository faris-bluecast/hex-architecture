import { Module } from "@nestjs/common";

import { TaskController } from "./adapters/inbound/http/task.controller";
import {
  persistentProviders,
  useCaseProviders,
} from "./infrastructure/providers/task.providers";

@Module({
  controllers: [TaskController],
  providers: [...persistentProviders, ...useCaseProviders],
})
export class TaskModule {}
