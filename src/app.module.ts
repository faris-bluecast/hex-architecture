import { Module } from "@nestjs/common";

import { TaskModule } from "./modules/task/task.module";
import { EmployeeModule } from "./modules/employee/employee.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    TaskModule,
    EmployeeModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
