import { AxiosResponse } from 'axios';
import { RequestConfig } from '../interfaces/requestConfig';
import { PermitReportingResponse, PermitSummaryResponse } from '../interfaces/permitReportingResponse';
import { GetPermitsRequest } from '../interfaces/getPermitsRequest';
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
import { GetFeesRequest } from '../interfaces/getFeesRequest';
import { GetForwardPlansRequest } from '../interfaces/getForwardPlansRequest';
import { ForwardPlanReportingResponse } from '../interfaces/forwardPlanReportingResponse';
import { Stream } from 'stream';
import { GetSection81sRequest } from '../interfaces/getSection81sRequest';
import { Section81ReportingResponse } from '../interfaces/section81ReportingResponse';
import { UsersReportingResponse } from '../interfaces/usersResponse';
import { GetUsersRequest } from '../interfaces/getUsersRequest';
export interface StreetManagerReportingClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerReportingClient {
    private config;
    private axios;
    constructor(config: StreetManagerReportingClientConfig);
    getAlterations(config: RequestConfig, request: GetAlterationsRequest): Promise<AlterationReportingResponse>;
    getComments(config: RequestConfig, request: GetCommentsRequest): Promise<CommentReportingResponse>;
    getFeesAsCSV(config: RequestConfig, request: GetFeesRequest): Promise<AxiosResponse<Stream>>;
    getFPNs(config: RequestConfig, request: GetFPNsRequest): Promise<FPNReportingResponse>;
    getFPNsAsCSV(config: RequestConfig, request: GetFPNsRequest): Promise<AxiosResponse<Stream>>;
    getForwardPlans(config: RequestConfig, request: GetForwardPlansRequest): Promise<ForwardPlanReportingResponse>;
    getForwardPlansAsCSV(config: RequestConfig, request: GetForwardPlansRequest): Promise<AxiosResponse<Stream>>;
    getInspections(config: RequestConfig, request: GetInspectionsRequest): Promise<InspectionReportingResponse>;
    getInspectionsAsCSV(config: RequestConfig, request: GetInspectionsRequest): Promise<AxiosResponse<Stream>>;
    getPermits(config: RequestConfig, request: GetPermitsRequest): Promise<PermitReportingResponse>;
    getPermitsAsCSV(config: RequestConfig, request: GetPermitsRequest): Promise<AxiosResponse<Stream>>;
    getPermitSummaries(config: RequestConfig, request: PermitSearchRequest): Promise<PermitSummaryResponse[]>;
    getReinstatements(config: RequestConfig, request: GetReinstatementsRequest): Promise<ReinstatementReportingResponse>;
    getSection81s(config: RequestConfig, request: GetSection81sRequest): Promise<Section81ReportingResponse>;
    status(): Promise<void>;
    getWorkstreams(config: RequestConfig, request: GetWorkstreamsRequest): Promise<WorkstreamReportingResponse>;
    getWorksUpdates(config: RequestConfig, request: GetWorksUpdatesRequest): Promise<WorkUpdateResponse[]>;
    getUsers(config: RequestConfig, request: GetUsersRequest, organisationReference: string): Promise<UsersReportingResponse>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
    private generateStreamRequestConfig;
}
