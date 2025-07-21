export type ApiError<T> = Record<keyof T, string>;

const SERVER_ERROR_MIN = 500;
const SERVER_ERROR_MAX = 599;
const FORBIDDEN = 403;
const UNAUTHORIZED = 401;

export enum ResponseErrorCode {
  ServerMinError = SERVER_ERROR_MIN,
  ServerMaxError = SERVER_ERROR_MAX,
  Forbidden = FORBIDDEN,
  Unauthorized = UNAUTHORIZED,
}
