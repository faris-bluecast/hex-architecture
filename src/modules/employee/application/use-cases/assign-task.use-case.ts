import type { UseCase } from "../../../common/use-case/UseCase";
import type { AssignTaskDto } from "../dto/assign-task.dto";

export interface AssignTaskUseCase extends UseCase<AssignTaskDto, void> {}
