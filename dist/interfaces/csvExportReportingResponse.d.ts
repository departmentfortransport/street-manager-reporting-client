import { ReportingResponse } from './reportingResponse';
import { CSVExportStatus } from './referenceTypes';
export interface CSVExportReportingResponse extends ReportingResponse {
    rows: CSVExportSummaryResponse[];
}
export interface CSVExportSummaryResponse {
    filename: string;
    s3_key: string;
    date_created: Date;
    csv_export_status: CSVExportStatus;
    username: string;
    file_id: number;
}
