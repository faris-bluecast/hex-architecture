import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const isHttpException = exception instanceof HttpException;

    const status = isHttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = isHttpException ? exception.getResponse() : "Internal server error";

    // Log only unexpected errors
    if (!isHttpException) {
      this.logger.error(exception instanceof Error ? exception.stack : String(exception));
    }

    // Format the error to match your success envelope
    response.status(status).json({
      success: false,
      message: exceptionResponse,
      data: null,
      errors: exceptionResponse, // This will contain your Zod/Validation details
      timestamp: new Date().toISOString(),
    });
  }
}
