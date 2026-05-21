import { Code } from "../../../common/code/Code";
import { Exception } from "../../../common/exception/Exception";
import { CoreAssert } from "../../../common/util/assert/Assert";
import type { AssignTaskDto } from "../../application/dto/assign-task.dto";
import type { TaskReaderPort } from "../../application/ports/task-reader.port";
import type { AssignTaskUseCase } from "../../application/use-cases/assign-task.use-case";
import type { EmployeeRepositoryPort } from "../../domain/ports/employee.repository.port";

export class AssignTaskService implements AssignTaskUseCase {
  constructor(
    private readonly employeeRepository: EmployeeRepositoryPort,
    private readonly taskReader: TaskReaderPort,
  ) {}

  async execute(dto: AssignTaskDto): Promise<void> {
    const user = CoreAssert.notEmpty(
      await this.employeeRepository.findById(dto.employeeId),
      Exception.new({
        code: Code.ENTITY_NOT_FOUND_ERROR,
        overrideMessage: "Employee not found",
      }),
    );

    CoreAssert.isTrue(
      !(await this.taskReader.exists(dto.taskId)),
      Exception.new({
        code: Code.ENTITY_NOT_FOUND_ERROR,
        overrideMessage: "Task not found",
      }),
    );

    user.assignTask(dto.taskId, dto.actualQty);

    this.employeeRepository.assignTask(dto.employeeId, user.getAssignedTasks());
  }
}
