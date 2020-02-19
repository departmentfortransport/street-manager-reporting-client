import { SortDirection } from './referenceTypes';
export interface ReportingRequest {
    offset?: number;
    query?: string;
    sort_direction?: SortDirection;
    swa_code?: string;
    geographical_area_reference_number?: string[];
}
