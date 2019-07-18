import { PermitStatus, WorkStatus, WorkCategory, PermitSortColumn, PermitCsvExportPrefix } from './referenceTypes';
import { ReportingRequest } from './reportingRequest';
export interface GetPermitsRequest extends ReportingRequest {
    status?: PermitStatus[];
    work_status?: WorkStatus[];
    work_category?: WorkCategory[];
    start_date?: Date;
    end_date?: Date;
    start_date_created?: Date;
    end_date_created?: Date;
    active_permit_only?: boolean;
    sort_column?: PermitSortColumn;
    csv_export_prefix?: PermitCsvExportPrefix;
    is_traffic_sensitive?: boolean;
    is_high_impact_traffic_management?: boolean;
    has_no_final_registration?: boolean;
    has_excavation?: boolean;
    is_early_start?: boolean;
    is_deemed?: boolean;
}
