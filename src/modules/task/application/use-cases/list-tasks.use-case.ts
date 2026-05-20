import { UseCase } from "../../../common/use-case/UseCase";
import { Task } from "../../domain/entities/task.entity";

export interface ListTasksUseCase extends UseCase<void, Task[]> {}
