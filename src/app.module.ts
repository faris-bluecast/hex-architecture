import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EmployeeModule } from "./modules/employee/employee.module";
import { TaskModule } from "./modules/task/task.module";

@Module({
  imports: [TaskModule, EmployeeModule, ConfigModule.forRoot({ isGlobal: true })],
})
export class AppModule {}
