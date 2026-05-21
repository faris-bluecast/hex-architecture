import type { Employee } from "../../../employee/domain/entities/employee.entity";

export type EmployeeReaderPort = (id: string) => Promise<Employee | null>;
