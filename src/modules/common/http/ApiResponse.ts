export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | null;
  errors: string | string[] | object | null;
  timestamp: string;
}
