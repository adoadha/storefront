export interface BaseResponse<T extends object> {
  code: string;
  totalCount: number;
  data?: T;
  pagination?: BasePaginationResponse<T>;
}
