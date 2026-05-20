import { UseCase } from "../../../common/use-case/UseCase";
import { CreateTaskDto } from "../dto/create-task.dto";

export interface CreateTaskUseCase extends UseCase<CreateTaskDto, void> {}
