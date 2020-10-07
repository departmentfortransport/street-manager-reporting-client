import { ReportingResponse } from './reportingResponse';
import { FPNStatus, OffenceCode } from './referenceTypes';
export interface FPNReportingResponse extends ReportingResponse {
    rows: FPNSummaryResponse[];
}
export interface FPNSummaryResponse {
    fpn_reference_number: string;
    work_reference_number: string;
    promoter: string;
    highway_authority: string;
    offence_code: OffenceCode;
    offence_code_string: string;
    street_name: string;
    issue_date: Date;
    status: FPNStatus;
    status_string: string;
}
