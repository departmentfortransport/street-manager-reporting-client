import { AxiosResponse } from 'axios';
import { RequestConfig } from '../interfaces/requestConfig';
import { PermitReportingResponse, PermitSummaryResponse } from '../interfaces/permitReportingResponse';
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
import { GetWorksUpdatesRequest } from '../interfaces/getWorksUpdatesRequest';
import { WorkUpdateResponse } from '../interfaces/workUpdateResponse';
import { WorkstreamReportingResponse } from '../interfaces/workstreamReportingResponse';
import { GetWorkstreamsRequest } from '../interfaces/getWorkstreamsRequest';
import { PermitSearchRequest } from '../interfaces/permitSearchRequest';
import { ReinstatementReportingResponse } from '../interfaces/reinstatementReportingResponse';
import { GetReinstatementsRequest } from '../interfaces/getReinstatementsRequest';
import { AlterationReportingResponse } from '../interfaces/alterationReportingResponse';
import { GetAlterationsRequest } from '../interfaces/getAlterationsRequest';
import { GetChargeableItemsRequest } from '../interfaces/getChargeableItemsRequest';
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
    getPermitSummaries(config: RequestConfig, request: PermitSearchRequest): Promise<PermitSummaryResponse[]>;
    getInspections(config: RequestConfig, request: GetInspectionsRequest): Promise<InspectionReportingResponse>;
    getAlterations(config: RequestConfig, request: GetAlterationsRequest): Promise<AlterationReportingResponse>;
    getInspectionsAsCSV(config: RequestConfig, request: GetInspectionsRequest): Promise<AxiosResponse<string>>;
    getPermitsAsCSV(config: RequestConfig, request: GetPermitsRequest): Promise<AxiosResponse<string>>;
    getFPNsAsCSV(config: RequestConfig, request: GetFPNsRequest): Promise<AxiosResponse<string>>;
    getSites(config: RequestConfig, request: GetSitesRequest): Promise<SiteSummaryResponse[]>;
    getFPNs(config: RequestConfig, request: GetFPNsRequest): Promise<FPNReportingResponse>;
    getWorkstreams(config: RequestConfig, request: GetWorkstreamsRequest): Promise<WorkstreamReportingResponse>;
    getComments(config: RequestConfig, request: GetCommentsRequest): Promise<CommentReportingResponse>;
    getWorksUpdates(config: RequestConfig, request: GetWorksUpdatesRequest): Promise<WorkUpdateResponse[]>;
    getReinstatements(config: RequestConfig, request: GetReinstatementsRequest): Promise<ReinstatementReportingResponse>;
    getChargeableItemsAsCSV(config: RequestConfig, request: GetChargeableItemsRequest): Promise<AxiosResponse<string>>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
