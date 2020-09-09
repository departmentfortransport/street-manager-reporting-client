import { InspectionResponseType, InspectionSortColumn, InspectionType, InspectionOutcome } from './referenceTypes'
import { ReportingRequest } from './reportingRequest'

export interface GetInspectionsRequest extends ReportingRequest {
  inspection_response_type?: InspectionResponseType[]
  sort_column?: InspectionSortColumn
  start_date?: Date
  end_date?: Date
  inspection_type?: InspectionType[]
  inspection_outcome?: InspectionOutcome[]
  start_date_created?: Date
  end_date_created?: Date
}
