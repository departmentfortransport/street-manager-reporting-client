import { SortDirection } from './referenceTypes';
export interface ReportingRequest {
    before?: string;
    after?: string;
    query?: string;
    sort_direction?: SortDirection;
}
