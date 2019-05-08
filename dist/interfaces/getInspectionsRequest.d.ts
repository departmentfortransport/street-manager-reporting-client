import { InspectionResponseType, InspectionSortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetInspectionsRequest extends ReportingRequest {
    inspection_response_type?: InspectionResponseType[];
    sort_column?: InspectionSortColumn;
    start_date?: Date;
    end_date?: Date;
}
