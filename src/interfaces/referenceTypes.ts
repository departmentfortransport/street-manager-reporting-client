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
  revoked_closed = 'revoked_closed',
  deemed_closed = 'deemed_closed'
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
  deadline_date = 'deadline_date',
  end_date = 'end_date',
  permit_status = 'permit_status',
  start_date = 'start_date'
}

export enum PermitCsvExportPrefix {
  PA = 'PA',
  WR = 'WR',
  PAA = 'PAA'
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

export enum ReinstatementSortColumn {
  end_date = 'end_date'
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

export enum WorkCategory {
  minor = 'minor',
  standard = 'standard',
  major = 'major',
  immediate_urgent = 'immediate_urgent',
  immediate_emergency = 'immediate_emergency',
  paa = 'paa'
}

export enum TrafficManagementType {
  road_closure = 'road_closure',
  contra_flow = 'contra_flow',
  lane_closure = 'lane_closure',
  multi_way_signals = 'multi_way_signals',
  two_way_signals = 'two_way_signals',
  convoy_workings = 'convoy_workings',
  stop_go_boards = 'stop_go_boards',
  priority_working = 'priority_working',
  give_and_take = 'give_and_take',
  some_carriageway_incursion = 'some_carriageway_incursion',
  no_carriageway_incursion = 'no_carriageway_incursion'
}

export enum AlterationStatus {
  submitted = 'submitted',
  granted = 'granted',
  granted_with_duration_challenge = 'granted_with_duration_challenge',
  refused = 'refused',
  deemed = 'deemed',
  cancelled = 'cancelled',
  revoked = 'revoked'
}

export enum AlterationSortColumn {
  date_created = 'date_created'
}

export enum AlterationType {
  PROMOTER_CHANGE_REQUEST = 'PROMOTER_CHANGE_REQUEST',
  HA_CHANGE_REQUEST = 'HA_CHANGE_REQUEST',
  HA_IMPOSED_CHANGE = 'HA_IMPOSED_CHANGE',
  WORK_EXTENSION = 'WORK_EXTENSION'
}

export enum WorkStatus {
  planned = 'planned',
  in_progress = 'in_progress',
  completed = 'completed',
  cancelled = 'cancelled'
}

export enum PermitConditionType {
  NCT01a = 'NCT01a',
  NCT01b = 'NCT01b',
  NCT02a = 'NCT02a',
  NCT02b = 'NCT02b',
  NCT04a = 'NCT04a',
  NCT04b = 'NCT04b',
  NCT05a = 'NCT05a',
  NCT06a = 'NCT06a',
  NCT07a = 'NCT07a',
  NCT08a = 'NCT08a',
  NCT08b = 'NCT08b',
  NCT09a = 'NCT09a',
  NCT09b = 'NCT09b',
  NCT09c = 'NCT09c',
  NCT10a = 'NCT10a',
  NCT11a = 'NCT11a',
  NCT11b = 'NCT11b',
  NCT12a = 'NCT12a'
}
