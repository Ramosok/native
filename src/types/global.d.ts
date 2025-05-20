declare global {
  interface ApiResponse<T = unknown> {
    data: T;
    error: null | string;
    success: boolean;
  }

  type ApiError = {
    message: string;
    code?: string | number;
    details?: Record<string, any>;
  };
}
