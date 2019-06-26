import { AlterationSortColumn, WorkCategory } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetAlterationsRequest extends ReportingRequest {
    work_category?: WorkCategory[];
    start_date_created?: Date;
    end_date_created?: Date;
    sort_column?: AlterationSortColumn;
}
