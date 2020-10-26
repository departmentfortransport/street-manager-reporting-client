import { AuditEventType, AuditObjectTypeResponse } from './referenceTypes';
export interface WorkUpdateResponse {
    work_reference_number: string;
    update_date_time: Date;
    update_id: number;
    event_type: AuditEventType;
    event_type_string: string;
    object_type: AuditObjectTypeResponse;
    object_type_string: string;
}
