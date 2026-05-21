import { createZodDto } from "nestjs-zod";
import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z.string().min(1, "Title is required"),
});

export class CreateTaskDto extends createZodDto(CreateTaskSchema) {}
