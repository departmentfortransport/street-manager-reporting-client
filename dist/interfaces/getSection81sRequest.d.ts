import { Section81Status, Section81Severity, Section81SortColumn } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetSection81sRequest extends ReportingRequest {
    section_81_status?: Section81Status[];
    section_81_severity?: Section81Severity[];
    sort_column?: Section81SortColumn;
}
