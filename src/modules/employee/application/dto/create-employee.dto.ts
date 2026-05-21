import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateEmployeeSchema = z.object({
  employeeCode: z.string().min(1, "Employee code is required"),
  employeeName: z.string().min(1, "Employee name is required"),

  // Optional fields
  legacyId: z.string().optional(),
  email: z.email().optional(),
  phoneNumber: z.string().optional(),

  biometricId: z.string().min(1, "Biometric ID is required"),
});

// Inferred TypeScript type
export class CreateEmployeeDto extends createZodDto(CreateEmployeeSchema) {}
