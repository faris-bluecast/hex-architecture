import { IsOptional, IsNotEmpty, IsUUID, IsInt } from "class-validator";

export class AssignTaskDto {
  @IsUUID()
  @IsNotEmpty()
  employeeId!: string;

  @IsUUID()
  @IsNotEmpty()
  taskId!: string;

  @IsInt()
  @IsOptional()
  actualQty!: number;
}
