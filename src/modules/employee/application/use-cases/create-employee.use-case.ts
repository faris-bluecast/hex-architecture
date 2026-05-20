import { UseCase } from "../../../common/use-case/UseCase";
import { CreateEmployeeDto } from "../dto/create-employee.dto";

export interface CreateEmployeeUseCase extends UseCase<
  CreateEmployeeDto,
  void
> {}
