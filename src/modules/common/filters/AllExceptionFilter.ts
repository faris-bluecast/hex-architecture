import {
  type ArgumentsHost,
  Catch,
  type ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse =
      exception instanceof HttpException ? exception.getResponse() : "Internal server error";

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
