import { PermitStatus, WorkCategory, TrafficManagementType, WorkStatus } from './referenceTypes';
import { ReportingResponse, ReportingSummaryResponse } from './reportingResponse';
import { PermitCondition } from './permitCondition';
export interface PermitReportingResponse extends ReportingResponse {
    rows: PermitSummaryResponse[];
}
export interface PermitSummaryResponse extends ReportingSummaryResponse {
    work_reference_number: string;
    permit_reference_number: string;
    promoter_swa_code: string;
    promoter_organisation: string;
    highway_authority: string;
    works_coordinates: any;
    location_description: string;
    street: string;
    area: string;
    work_category: WorkCategory;
    description_of_work: string;
    traffic_management_type: TrafficManagementType;
    assessment_status?: PermitStatus;
    proposed_start_date: Date;
    proposed_end_date: Date;
    proposed_start_time?: Date;
    proposed_end_time?: Date;
    actual_start_date?: Date;
    actual_end_date?: Date;
    status: PermitStatus;
    work_status: WorkStatus;
    deadline_date: Date;
    date_created: Date;
    status_changed_date: Date;
    usrn: number;
    is_active_permit: Boolean;
    permit_conditions?: PermitCondition[];
    road_category: number;
    is_traffic_sensitive: Boolean;
    has_final_reinstatement: boolean;
    is_deemed: Boolean;
    excavation_carried_out: boolean;
    is_early_start: boolean;
    is_high_impact_traffic_management: Boolean;
    is_lane_rental: boolean;
    workstream_prefix: string;
}
