import { AuditEventType } from './referenceTypes';
export interface WorkUpdateResponse {
    work_reference_number: string;
    update_date_time: Date;
    update_id: number;
    event_type: AuditEventType;
}
