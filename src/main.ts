import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { AllExceptionsFilter } from "./modules/common/filters/AllExceptionFilter";
import { TransformInterceptor } from "./modules/common/interceptors/TransformInterceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new TransformInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000, () => {
    Logger.log("Server running on http://localhost:3000", AppModule.name);
  });
}

bootstrap();
