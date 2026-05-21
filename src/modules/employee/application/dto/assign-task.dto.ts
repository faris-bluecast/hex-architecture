import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const AssignTaskSchema = z.object({
  employeeId: z.uuid(),
  taskId: z.uuid(),
  actualQty: z.int().optional(),
});

// Export the TypeScript type inferred from the schema
export class AssignTaskDto extends createZodDto(AssignTaskSchema) {}
