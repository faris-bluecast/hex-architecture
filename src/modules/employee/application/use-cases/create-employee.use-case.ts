import type { UseCase } from "../../../common/use-case/UseCase";
import type { CreateEmployeeDto } from "../dto/create-employee.dto";

export interface CreateEmployeeUseCase extends UseCase<CreateEmployeeDto, void> {}
