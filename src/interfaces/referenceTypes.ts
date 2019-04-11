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
  deemed_in_progress = 'deemed_in_progress',
  granted_auto = 'granted_auto',
  refused_auto = 'refused_auto',
  cancelled_auto = 'cancelled_auto',
  awaiting_assessment_in_progress = 'awaiting_assessment_in_progress',
  revoked_closed = 'revoked_closed'
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

export enum WorkstreamStatus {
  active = 'active',
  deactivated = 'deactivated'
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

export enum WorkstreamSortColumn {
  status = 'status'
}

export enum CommentSortColumn {
  date_created = 'date_created'
}

export enum SiteSortColumn {
  date_created = 'date_created'
}

export enum InspectionType {
  slg = 'slg',
  reinstatement = 'reinstatement',
  defect_inspection = 'defect_inspection'
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
  routine = 'routine',
  joint_site_visit = 'joint_site_visit',
  follow_up = 'follow_up',
  follow_up_completion = 'follow_up_completion'
}

export enum InspectionOutcome {
  passed = 'passed',
  unable_to_complete_inspection = 'unable_to_complete_inspection',
  failed_low = 'failed_low',
  failed_high = 'failed_high',
  further_inspections_required = 'further_inspections_required',
  withdraw_defect = 'withdraw_defect'
}

export enum InspectionSortColumn {
  inspection_date = 'inspection_date'
}
