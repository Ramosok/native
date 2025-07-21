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

declare module '*.png' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpg' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.jpeg' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.svg' {
  const value: ImageSourcePropType;
  export default value;
}

declare module '*.webp' {
  const value: ImageSourcePropType;
  export default value;
}
