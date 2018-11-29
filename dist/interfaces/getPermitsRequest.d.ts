import { PermitStatus } from './referenceTypes';
export interface GetPermitsRequest {
    status?: PermitStatus[];
}
