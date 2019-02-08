export enum PermitStatus {
  submitted = 'submitted',
  granted_proposed = 'granted_proposed',
  granted_with_changes = 'granted_with_changes',
  refused = 'refused',
  granted_in_progress = 'granted_in_progress',
  closed = 'closed',
  cancelled = 'cancelled',
  revoked_proposed = 'revoked_proposed',
  revoked_in_progress = 'revoked_in_progress',
  deemed_proposed = 'deemed_proposed',
  deemed_in_progress = 'deemed_in_progress'
}

export enum ReinstatementStatus {
  interim = 'interim',
  permanent = 'permanent'
}

export enum FPNStatus {
  issued = 'issued',
  accepted = 'accepted',
  paid = 'paid',
  paid_discounted = 'paid_discounted',
  disputed = 'disputed',
  withdrawn = 'withdrawn'
}

export enum OffenceCode {
  offence_code_05 = 'offence_code_05',
  offence_code_06 = 'offence_code_06',
  offence_code_08 = 'offence_code_08',
  offence_code_09 = 'offence_code_09'
}

export enum CommentTopic {
  GENERAL = 'GENERAL',
  SECTION_74 = 'SECTION_74',
  INSPECTION = 'INSPECTION',
  FPN = 'FPN',
  OVERRUN = 'OVERRUN'
}

export enum SortDirection {
  asc = 'asc',
  desc = 'desc'
}

export enum PermitSortColumn {
  date_created = 'date_created',
  deadline_date = 'deadline_date'
}

export enum FPNSortColumn {
  issue_date_time = 'issue_date_time'
}

export enum CommentSortColumn {
  date_created = 'date_created'
}

export enum SiteSortColumn {
  date_created = 'date_created'
}

export enum InspectionType {
  slg = 'slg',
  reinstatement = 'reinstatement'
}

export enum InspectionResponseType {
  inspection = 'inspection',
  reinspection = 'reinspection'
}

export enum InspectionCategory {
  a = 'a',
  b = 'b',
  c = 'c',
  third_party = 'third_party',
  routine = 'routine'
}

export enum InspectionOutcome {
  passed = 'passed',
  unable_to_complete = 'unable_to_complete',
  failed_standard = 'failed_standard',
  failed_2_hour = 'failed_2_hour',
  failed_4_hour = 'failed_4_hour'
}

export enum InspectionSortColumn {
  inspection_date = 'inspection_date'
}
