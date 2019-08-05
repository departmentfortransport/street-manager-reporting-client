import { ReinstatementStatus, SiteSortColumn } from './referenceTypes';
export interface GetSitesRequest {
    status?: ReinstatementStatus[];
    sort_column?: SiteSortColumn;
    swa_code?: string;
}
