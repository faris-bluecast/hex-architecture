import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ZodValidationPipe } from "nestjs-zod";
import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./modules/common/filters/AllExceptionFilter";
import { TransformInterceptor } from "./modules/common/interceptors/transform.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ZodValidationPipe());

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000, () => {
    Logger.log("Server running on http://localhost:3000", AppModule.name);
  });
}

bootstrap();
