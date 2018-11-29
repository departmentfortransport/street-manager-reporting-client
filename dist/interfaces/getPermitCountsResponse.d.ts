export interface GetPermitCountsResponse {
    applications: ApplicationCounts;
    permits: PermitCounts;
}
export interface ApplicationCounts {
    total: ApplicationCountsEntry;
}
export interface ApplicationCountsEntry {
    refused: number;
    awaiting_assessment: number;
}
export interface PermitCounts {
    total: PermitCountsEntry;
}
export interface PermitCountsEntry {
    granted_not_started: number;
    in_progress: number;
    closed: number;
}
