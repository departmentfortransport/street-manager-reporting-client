import { FPNStatus } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetFPNsRequest extends ReportingRequest {
  status?: FPNStatus[]
}
