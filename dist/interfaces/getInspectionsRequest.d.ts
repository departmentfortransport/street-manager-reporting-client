import { InspectionResponseType } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetInspectionsRequest extends ReportingRequest {
    inspection_response_type?: InspectionResponseType[];
}
