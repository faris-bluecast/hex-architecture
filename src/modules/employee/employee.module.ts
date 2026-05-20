import { Module } from "@nestjs/common";

import {
  persistentProviders,
  useCaseProviders,
} from "./infrastructure/providers/employee.providers";
import { EmployeeController } from "./adapters/inbound/http/employee.controller";
import { TaskModule } from "../task/task.module";

@Module({
  controllers: [EmployeeController],
  imports: [TaskModule],
  providers: [...persistentProviders, ...useCaseProviders],
})
export class EmployeeModule {}
