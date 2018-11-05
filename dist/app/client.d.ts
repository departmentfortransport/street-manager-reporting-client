import { AuthenticatedRequest } from '../interfaces/request';
import { WorkSummaryResponse } from '../interfaces/workSummaryResponse';
export interface StreetManagerReportingClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerReportingClient {
    private config;
    private axios;
    constructor(config: StreetManagerReportingClientConfig);
    status(): Promise<void>;
    getWorks(request: AuthenticatedRequest): Promise<WorkSummaryResponse[]>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
