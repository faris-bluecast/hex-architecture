export class TaskDITokens {
  // Use-cases
  public static readonly CreateTaskUseCase: unique symbol =
    Symbol("CreateTaskUseCase");
  public static readonly ListTasksUseCase: unique symbol =
    Symbol("ListTaskUseCase");
  public static readonly GetTaskUseCase: unique symbol =
    Symbol("GetTaskUseCase");

  public static readonly TaskReaderPort: unique symbol =
    Symbol("TaskReaderPort");

  // Repositories
  public static readonly TaskRepository: unique symbol =
    Symbol("TaskRepository");
}
