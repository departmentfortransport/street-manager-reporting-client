import { Section81Status, Section81Severity } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetSection81sRequest extends ReportingRequest {
    status?: Section81Status[];
    severity?: Section81Severity[];
}
