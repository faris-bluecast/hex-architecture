import { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";
import { TaskReaderPort } from "../ports/task-reader.port";
import { AssignTaskDto } from "../../application/dto/assign-task.dto";
import { AssignTaskUseCase } from "../../application/use-cases/assign-task.use-case";

export class AssignTaskService implements AssignTaskUseCase {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryPort,
    private readonly taskReader: TaskReaderPort,
  ) {}

  async execute(dto: AssignTaskDto): Promise<void> {
    // NOTE: Handle exceptions
    if (!this.taskReader.exists(dto.taskId)) {
      throw new Error("Not Found");
    }

    this.employeeRepository.assignTask(dto);
  }
}
