export interface IHttpSuccessResponse<T = any> {
  data: T;
  message: string;
  success: boolean;
  timestamp: Date;
}
