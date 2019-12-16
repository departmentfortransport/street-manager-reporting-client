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
import { GetForwardPlansRequest } from '../interfaces/getForwardPlansRequest';
import { ForwardPlanReportingResponse } from '../interfaces/forwardPlanReportingResponse';
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
    getPermitSummaries(config: RequestConfig, request: PermitSearchRequest): Promise<PermitSummaryResponse[]>;
    getInspections(config: RequestConfig, request: GetInspectionsRequest): Promise<InspectionReportingResponse>;
    getAlterations(config: RequestConfig, request: GetAlterationsRequest): Promise<AlterationReportingResponse>;
    getForwardPlans(config: RequestConfig, request: GetForwardPlansRequest): Promise<ForwardPlanReportingResponse>;
    getFPNs(config: RequestConfig, request: GetFPNsRequest): Promise<FPNReportingResponse>;
    getWorkstreams(config: RequestConfig, request: GetWorkstreamsRequest): Promise<WorkstreamReportingResponse>;
    getComments(config: RequestConfig, request: GetCommentsRequest): Promise<CommentReportingResponse>;
    getWorksUpdates(config: RequestConfig, request: GetWorksUpdatesRequest): Promise<WorkUpdateResponse[]>;
    getReinstatements(config: RequestConfig, request: GetReinstatementsRequest): Promise<ReinstatementReportingResponse>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
