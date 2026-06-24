import { UseCase } from "../../../../common/use-case/UseCase";
import type { CreateTaskDto } from "../dto/create-task.dto";

export interface CreateTaskUseCase extends UseCase<CreateTaskDto, void> {}
