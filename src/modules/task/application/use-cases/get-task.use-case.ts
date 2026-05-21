import type { UseCase } from "../../../common/use-case/UseCase";
import type { Task } from "../../domain/entities/task.entity";

export interface GetTaskUseCase extends UseCase<string, Task | null> {}
