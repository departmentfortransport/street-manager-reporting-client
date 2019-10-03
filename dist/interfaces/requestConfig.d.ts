import { ResponseType } from 'axios';
export interface RequestConfig {
    token?: string;
    requestId: string;
    timeout?: number;
    frontendToken?: string;
    responseType?: ResponseType;
}
