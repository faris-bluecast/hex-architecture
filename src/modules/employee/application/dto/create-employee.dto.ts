import { IsEmail, IsOptional, IsString, IsNotEmpty } from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  employeeCode!: string;

  @IsString()
  @IsNotEmpty()
  employeeName!: string;

  @IsOptional()
  @IsString()
  legacyId?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsString()
  @IsNotEmpty()
  biometricId!: string;
}
