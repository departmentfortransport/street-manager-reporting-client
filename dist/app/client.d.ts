import { AxiosResponse } from 'axios';
import { RequestConfig } from '../interfaces/requestConfig';
import { PermitReportingResponse } from '../interfaces/permitReportingResponse';
import { GetPermitsRequest } from '../interfaces/getPermitsRequest';
import { GetSitesRequest } from '../interfaces/getSitesRequest';
import { SiteSummaryResponse } from '../interfaces/siteSummaryResponse';
import { PermitCountsResponse } from '../interfaces/permitCountsResponse';
import { GetFPNsRequest } from '../interfaces/getFPNsRequest';
import { FPNReportingResponse } from '../interfaces/fpnReportingResponse';
import { CommentReportingResponse } from '../interfaces/commentReportingResponse';
import { GetCommentsRequest } from '../interfaces/getCommentsRequest';
import { InspectionReportingResponse } from '../interfaces/inspectionReportingResponse';
import { GetInspectionsRequest } from '../interfaces/getInspectionsRequest';
export interface StreetManagerReportingClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerReportingClient {
    private config;
    private axios;
    constructor(config: StreetManagerReportingClientConfig);
    status(): Promise<void>;
    getPermits(config: RequestConfig, request: GetPermitsRequest): Promise<PermitReportingResponse>;
    getPermitCounts(config: RequestConfig): Promise<PermitCountsResponse>;
    getInspections(config: RequestConfig, request: GetInspectionsRequest): Promise<InspectionReportingResponse>;
    getPermitsAsCSV(config: RequestConfig, request: GetPermitsRequest): Promise<AxiosResponse<string>>;
    getSites(config: RequestConfig, request: GetSitesRequest): Promise<SiteSummaryResponse[]>;
    getFPNs(config: RequestConfig, request: GetFPNsRequest): Promise<FPNReportingResponse>;
    getComments(config: RequestConfig, request: GetCommentsRequest): Promise<CommentReportingResponse>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
