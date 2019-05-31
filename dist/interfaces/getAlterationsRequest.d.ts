import { AlterationSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetAlterationsRequest extends ReportingRequest {
    start_date_created?: Date;
    end_date_created?: Date;
    sort_column?: AlterationSortColumn;
}
