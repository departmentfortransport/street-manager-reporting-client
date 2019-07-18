import { AlterationStatus, WorkCategory, WorkStatus, AlterationType } from './referenceTypes';
import { ReportingResponse, ReportingSummaryResponse } from './reportingResponse';
export interface AlterationReportingResponse extends ReportingResponse {
    rows: AlterationSummaryResponse[];
}
export interface AlterationSummaryResponse extends ReportingSummaryResponse {
    work_reference_number: string;
    permit_reference_number: string;
    alteration_reference_number: string;
    street: string;
    area: string;
    location_description: string;
    highway_authority: string;
    promoter: string;
    work_status: WorkStatus;
    proposed_start_date: Date;
    proposed_end_date: Date;
    work_category: WorkCategory;
    alteration_status: AlterationStatus;
    alteration_type: AlterationType;
    date_created: Date;
    deadline_date: Date;
    status_changed_date: Date;
}
