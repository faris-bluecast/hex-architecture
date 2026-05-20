export class EmployeeDITokens {
  // Use-cases
  public static readonly CreateEmployeeUseCase: unique symbol = Symbol(
    "CreateEmployeeUseCase",
  );
  public static readonly ListEmployeeUseCase: unique symbol = Symbol(
    "ListEmployeeUseCase",
  );
  public static readonly AssignTaskUseCase: unique symbol = Symbol(
    "AssignTaskUseCase",
  );

  // Repositories
  public static readonly EmployeeRepository: unique symbol =
    Symbol("EmployeeRepository");
}
