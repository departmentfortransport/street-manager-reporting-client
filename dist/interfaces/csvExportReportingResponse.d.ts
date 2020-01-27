import { ReportingResponse } from './reportingResponse';
import { CSVExportStatus } from './referenceTypes';
export interface CSVExportReportingResponse extends ReportingResponse {
    rows: CSVExportSummaryResponse[];
}
export interface CSVExportSummaryResponse {
    csv_export_id: number;
    filename: string;
    date_created: Date;
    csv_export_status: CSVExportStatus;
    username: string;
}
