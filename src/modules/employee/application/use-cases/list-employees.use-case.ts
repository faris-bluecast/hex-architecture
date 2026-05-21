import type { UseCase } from "../../../common/use-case/UseCase";
import type { Employee } from "../../domain/entities/employee.entity";

export interface ListEmployeeUseCase extends UseCase<void, Employee[]> {}
