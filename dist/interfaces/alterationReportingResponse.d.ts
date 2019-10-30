import { AlterationStatus, WorkCategory, WorkStatus, AlterationType, LaneRentalAssessmentOutcome } from './referenceTypes';
import { ReportingResponse } from './reportingResponse';
export interface AlterationReportingResponse extends ReportingResponse {
    rows: AlterationSummaryResponse[];
}
export interface AlterationSummaryResponse {
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
    proposed_start_time?: Date;
    proposed_end_time?: Date;
    work_category: WorkCategory;
    alteration_status: AlterationStatus;
    alteration_type: AlterationType;
    date_created: Date;
    deadline_date: Date;
    status_changed_date: Date;
    lane_rental_assessment_outcome?: LaneRentalAssessmentOutcome;
    lane_rental_charges_not_agreed: boolean;
    lane_rental_charges_potentially_apply: boolean;
}
