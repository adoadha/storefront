export interface BaseResponse<T extends object> {
  code: string;
  totalCount: number;
  totalPages: number;
  data?: T;
  pagination?: BasePaginationResponse<T>;
}
