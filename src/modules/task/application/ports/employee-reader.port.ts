import { Employee } from "../../../employee/domain/entities/employee.entity";

export interface EmployeeReaderPort {
  (id: string): Promise<Employee | null>;
}
