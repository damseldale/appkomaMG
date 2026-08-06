export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data: T;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  statusCode: number;
  timestamp: string;
}

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginationQuery {
  page?: number;
  limit?: number;
  search?: string;
}
