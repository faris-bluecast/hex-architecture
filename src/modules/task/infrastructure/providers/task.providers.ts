import { TASK_REPOSITORY } from "../../task.tokens";
import { PrismaTaskRepository } from "../../adapters/outbound/persistence/prisma-task.repository";
import { PrismaService } from "../../../../prisma/prisma.service";
import { InMemoryTaskRepository } from "../../adapters/outbound/persistence/in-memory-task.repository";

export const taskProviders = [
  PrismaService,
  {
    provide: TASK_REPOSITORY,
    useFactory: (prisma: PrismaService) => {
      return new PrismaTaskRepository(prisma);
    },
    inject: [PrismaService],
  },

  // Uncomment this to switch to in-memory
  // {
  //   provide: TASK_REPOSITORY,
  //   useClass: InMemoryTaskRepository,
  // },
];
