import { UseCase } from "../../../common/use-case/UseCase";
import { AssignTaskDto } from "../dto/assign-task.dto";

export interface AssignTaskUseCase extends UseCase<AssignTaskDto, void> {}
