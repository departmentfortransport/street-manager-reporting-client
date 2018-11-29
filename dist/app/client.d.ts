import { RequestConfig } from '../interfaces/requestConfig';
import { PermitSummaryResponse } from '../interfaces/permitSummaryResponse';
import { GetPermitsRequest } from '../interfaces/getPermitsRequest';
import { GetSitesRequest } from '../interfaces/getSitesRequest';
import { SiteSummaryResponse } from '../interfaces/siteSummaryResponse';
export interface StreetManagerReportingClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerReportingClient {
    private config;
    private axios;
    constructor(config: StreetManagerReportingClientConfig);
    status(): Promise<void>;
    getPermits(config: RequestConfig, request: GetPermitsRequest): Promise<PermitSummaryResponse[]>;
    getSites(config: RequestConfig, request: GetSitesRequest): Promise<SiteSummaryResponse[]>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
