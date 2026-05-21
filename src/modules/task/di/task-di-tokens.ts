export const TaskDITokens = {
  // Use-cases
  CreateTaskUseCase: Symbol("CreateTaskUseCase"),
  ListTasksUseCase: Symbol("ListTaskUseCase"),
  GetTaskUseCase: Symbol("GetTaskUseCase"),

  TaskReaderPort: Symbol("TaskReaderPort"),

  // Repositories
  TaskRepository: Symbol("TaskRepository"),
} as const;
