import { Module } from "@nestjs/common";
import { TaskModule } from "../task/task.module";
import { EmployeeController } from "./adapters/inbound/http/employee.controller";
import {
  persistentProviders,
  useCaseProviders,
} from "./infrastructure/providers/employee.providers";

@Module({
  controllers: [EmployeeController],
  imports: [TaskModule],
  providers: [...persistentProviders, ...useCaseProviders],
})
export class EmployeeModule {}
