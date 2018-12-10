import { PaginationResponse } from './paginationResponse';
export interface ReportingResponse<T> {
    pagination: PaginationResponse;
    rows: T[];
}
