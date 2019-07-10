import { AlterationSortColumn, AlterationStatus, WorkStatus, WorkCategory } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetAlterationsRequest extends ReportingRequest {
    alteration_status?: AlterationStatus[];
    work_status?: WorkStatus[];
    work_category?: WorkCategory[];
    start_date_created?: Date;
    end_date_created?: Date;
    sort_column?: AlterationSortColumn;
    is_traffic_sensitive?: boolean;
    is_high_impact_traffic_management?: boolean;
    is_duration_extension?: boolean;
    is_early_start?: boolean;
}
