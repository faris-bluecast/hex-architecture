import { UseCase } from "../../../common/use-case/UseCase";
import { Employee } from "../../domain/entities/employee.entity";

export interface ListEmployeeUseCase extends UseCase<void, Employee[]> {}
