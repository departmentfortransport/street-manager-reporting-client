import { PermitStatus } from './referenceTypes';
import { ReportingResponse } from './reportingResponse';
export interface PermitSummaryResponse extends ReportingResponse {
    rows: PermitSummaryResult[];
}
export interface PermitSummaryResult {
    work_reference_number: string;
    location_description: string;
    street: string;
    area: string;
    proposed_start_date: Date;
    proposed_end_date: Date;
    actual_start_date?: Date;
    actual_end_date?: Date;
    status: PermitStatus;
    cursor: number;
}
