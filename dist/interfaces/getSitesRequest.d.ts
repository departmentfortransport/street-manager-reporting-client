import { ReinstatementStatus, SiteSortColumn, SortDirection } from './referenceTypes';
export interface GetSitesRequest {
    status?: ReinstatementStatus[];
    sort_column?: SiteSortColumn;
    sort_direction?: SortDirection;
}
