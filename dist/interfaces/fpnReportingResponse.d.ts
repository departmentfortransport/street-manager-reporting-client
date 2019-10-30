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
    street_name: string;
    issue_date: Date;
    status: FPNStatus;
}
