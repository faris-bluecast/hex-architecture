export interface EmployeeProps {
  id?: string;
  employeeCode: string;
  employeeName: string;
  legacyId?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  biometricId: string;
}

export class TaskAssignment {
  constructor(
    public readonly taskId: string,
    public readonly doneQty?: number,
  ) {}
}

export class Employee {
  public readonly id?: string;
  public employeeCode: string;
  public employeeName: string;
  public legacyId?: string | null;
  public email?: string | null;
  public phoneNumber?: string | null;
  public biometricId: string;
  private assignedTasks: TaskAssignment[] = [];

  constructor(props: EmployeeProps) {
    this.id = props.id;
    this.employeeCode = props.employeeCode;
    this.employeeName = props.employeeName;
    this.legacyId = props.legacyId;
    this.email = props.email;
    this.phoneNumber = props.phoneNumber;
    this.biometricId = props.biometricId;
  }

  assignTask(taskId: string, doneQty?: number): void {
    const assignment = new TaskAssignment(taskId, doneQty);
    this.assignedTasks.push(assignment);
  }

  getAssignedTasks(): TaskAssignment[] {
    return this.assignedTasks;
  }
}
