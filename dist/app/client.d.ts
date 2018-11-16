import { RequestConfig } from '../interfaces/requestConfig';
import { WorkSummaryResponse } from '../interfaces/workSummaryResponse';
import { GetWorksRequest } from '../interfaces/getWorksRequest';
export interface StreetManagerReportingClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerReportingClient {
    private config;
    private axios;
    constructor(config: StreetManagerReportingClientConfig);
    status(): Promise<void>;
    getWorks(config: RequestConfig, request: GetWorksRequest): Promise<WorkSummaryResponse[]>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
