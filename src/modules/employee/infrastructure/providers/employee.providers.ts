import { PrismaService } from "../../../../prisma/prisma.service";
import { InMemoryEmployeeRepository } from "../../adapters/outbound/persistence/in-memory-employee.repository";
import { PrismaEmployeeRepository } from "../../adapters/outbound/persistence/prisma-employee.repository";
import { EMPLOYEE_REPOSITORY } from "../../employee.tokens";

export const employeeProviders = [
  PrismaService,
  {
    provide: EMPLOYEE_REPOSITORY,
    useFactory: (prisma: PrismaService) => {
      return new PrismaEmployeeRepository(prisma);
    },
    inject: [PrismaService],
  },

  // Uncomment this to switch to in-memory
  // {
  //   provide: EMPLOYEE_REPOSITORY,
  //   useClass: InMemoryEmployeeRepository,
  // },
];
