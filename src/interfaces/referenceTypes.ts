export enum PermitStatus {
  submitted = 'submitted',
  granted = 'granted',
  permit_modification_request = 'permit_modification_request',
  refused = 'refused',
  closed = 'closed',
  cancelled = 'cancelled',
  revoked = 'revoked',
  progressed = 'progressed'
}

export enum PermitStatusResponse {
  submitted = 'submitted',
  granted = 'granted',
  permit_modification_request = 'permit_modification_request',
  refused = 'refused',
  closed = 'closed',
  cancelled = 'cancelled',
  revoked = 'revoked',
  progressed = 'progressed',
  upcoming_enum = 'upcoming_enum'
}

export enum AssessmentStatus {
  granted = 'granted',
  granted_auto = 'granted_auto',
  refused = 'refused',
  refused_auto = 'refused_auto',
  permit_modification_request = 'permit_modification_request',
  revoked = 'revoked'
}

export enum AssessmentStatusResponse {
  granted = 'granted',
  granted_auto = 'granted_auto',
  refused = 'refused',
  refused_auto = 'refused_auto',
  permit_modification_request = 'permit_modification_request',
  revoked = 'revoked',
  upcoming_enum = 'upcoming_enum'
}

export enum ReinstatementStatus {
  interim = 'interim',
  permanent = 'permanent'
}

export enum ReinstatementStatusResponse {
  interim = 'interim',
  permanent = 'permanent',
  upcoming_enum = 'upcoming_enum'
}

export enum FPNStatus {
  issued = 'issued',
  accepted = 'accepted',
  paid = 'paid',
  paid_discounted = 'paid_discounted',
  disputed = 'disputed',
  withdrawn = 'withdrawn'
}

export enum FPNStatusResponse {
  issued = 'issued',
  accepted = 'accepted',
  paid = 'paid',
  paid_discounted = 'paid_discounted',
  disputed = 'disputed',
  withdrawn = 'withdrawn',
  upcoming_enum = 'upcoming_enum'
}

export enum WorkstreamStatus {
  active = 'active',
  deactivated = 'deactivated'
}

export enum WorkstreamStatusResponse {
  active = 'active',
  deactivated = 'deactivated',
  upcoming_enum = 'upcoming_enum'
}

export enum OffenceCode {
  offence_code_05 = 'offence_code_05',
  offence_code_06 = 'offence_code_06',
  offence_code_08 = 'offence_code_08',
  offence_code_09 = 'offence_code_09'
}

export enum OffenceCodeResponse {
  offence_code_05 = 'offence_code_05',
  offence_code_06 = 'offence_code_06',
  offence_code_08 = 'offence_code_08',
  offence_code_09 = 'offence_code_09',
  upcoming_enum = 'upcoming_enum'
}

export enum CommentTopic {
  GENERAL = 'GENERAL',
  SECTION_74 = 'SECTION_74',
  INSPECTION = 'INSPECTION',
  FPN = 'FPN',
  OVERRUN = 'OVERRUN',
  FORWARD_PLAN = 'FORWARD_PLAN',
  CHANGE_REQUEST = 'CHANGE_REQUEST',
  IMPOSED_VARIATION = 'IMPOSED_VARIATION',
  DURATION_CHALLENGE = 'DURATION_CHALLENGE',
  SECTION_81 = 'SECTION_81'
}

export enum CommentTopicResponse {
  GENERAL = 'GENERAL',
  SECTION_74 = 'SECTION_74',
  INSPECTION = 'INSPECTION',
  FPN = 'FPN',
  OVERRUN = 'OVERRUN',
  FORWARD_PLAN = 'FORWARD_PLAN',
  CHANGE_REQUEST = 'CHANGE_REQUEST',
  IMPOSED_VARIATION = 'IMPOSED_VARIATION',
  DURATION_CHALLENGE = 'DURATION_CHALLENGE',
  SECTION_81 = 'SECTION_81',
  upcoming_enum = 'upcoming_enum'
}

export enum SortDirection {
  asc = 'asc',
  desc = 'desc'
}

export enum PermitSortColumn {
  date_created = 'date_created',
  deadline_date = 'deadline_date',
  end_date = 'end_date',
  start_date = 'start_date',
  status_changed_date = 'status_changed_date'
}

export enum FPNSortColumn {
  issue_date_time = 'issue_date_time',
  status_changed_date = 'status_changed_date'
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
  live_site = 'live_site',
  reinstatement = 'reinstatement',
  non_compliance_follow_up = 'non_compliance_follow_up',
  section_81 = 'section_81'
}

export enum InspectionTypeResponse {
  live_site = 'live_site',
  reinstatement = 'reinstatement',
  non_compliance_follow_up = 'non_compliance_follow_up',
  section_81 = 'section_81',
  upcoming_enum = 'upcoming_enum'
}

export enum InspectionResponseType {
  inspection = 'inspection',
  reinspection = 'reinspection'
}

export enum InspectionResponseTypeResponse {
  inspection = 'inspection',
  reinspection = 'reinspection',
  upcoming_enum = 'upcoming_enum'
}

export enum InspectionCategory {
  a = 'a',
  b = 'b',
  c = 'c',
  third_party = 'third_party',
  routine = 'routine',
  joint_site_visit = 'joint_site_visit',
  follow_up = 'follow_up',
  follow_up_completion = 'follow_up_completion',
  site_occupancy = 'site_occupancy',
  conditions = 'conditions'
}

export enum InspectionCategoryResponse {
  a = 'a',
  b = 'b',
  c = 'c',
  third_party = 'third_party',
  routine = 'routine',
  joint_site_visit = 'joint_site_visit',
  follow_up = 'follow_up',
  follow_up_completion = 'follow_up_completion',
  site_occupancy = 'site_occupancy',
  conditions = 'conditions',
  upcoming_enum = 'upcoming_enum'
}

export enum InspectionOutcome {
  passed = 'passed',
  unable_to_complete_inspection = 'unable_to_complete_inspection',
  failed_low = 'failed_low',
  failed_high = 'failed_high',
  further_inspections_required = 'further_inspections_required',
  agreed_site_compliance = 'agreed_site_compliance',
  non_compliant_with_conditions = 'non_compliant_with_conditions',
  works_stopped_apparatus_remaining = 'works_stopped_apparatus_remaining',
  works_in_progress_no_carriageway_incursion = 'works_in_progress_no_carriageway_incursion',
  works_in_progress = 'works_in_progress',
  works_stopped = 'works_stopped'
}

export enum InspectionOutcomeResponse {
  passed = 'passed',
  unable_to_complete_inspection = 'unable_to_complete_inspection',
  failed_low = 'failed_low',
  failed_high = 'failed_high',
  further_inspections_required = 'further_inspections_required',
  agreed_site_compliance = 'agreed_site_compliance',
  non_compliant_with_conditions = 'non_compliant_with_conditions',
  works_stopped_apparatus_remaining = 'works_stopped_apparatus_remaining',
  works_in_progress_no_carriageway_incursion = 'works_in_progress_no_carriageway_incursion',
  works_in_progress = 'works_in_progress',
  works_stopped = 'works_stopped',
  upcoming_enum = 'upcoming_enum'
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
  paa = 'paa',
  hs2_highway = 'hs2_highway'
}

export enum WorkCategoryResponse {
  minor = 'minor',
  standard = 'standard',
  major = 'major',
  immediate_urgent = 'immediate_urgent',
  immediate_emergency = 'immediate_emergency',
  paa = 'paa',
  hs2_highway = 'hs2_highway',
  upcoming_enum = 'upcoming_enum'
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

export enum TrafficManagementTypeResponse {
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
  no_carriageway_incursion = 'no_carriageway_incursion',
  upcoming_enum = 'upcoming_enum'
}

export enum AlterationStatus {
  submitted = 'submitted',
  granted = 'granted',
  granted_with_duration_challenge = 'granted_with_duration_challenge',
  refused = 'refused',
  deemed = 'deemed',
  cancelled = 'cancelled',
  revoked = 'revoked',
  auto_applied = 'auto_applied'
}

export enum AlterationStatusResponse {
  submitted = 'submitted',
  granted = 'granted',
  granted_with_duration_challenge = 'granted_with_duration_challenge',
  refused = 'refused',
  deemed = 'deemed',
  cancelled = 'cancelled',
  revoked = 'revoked',
  auto_applied = 'auto_applied',
  upcoming_enum = 'upcoming_enum'
}

export enum AlterationSortColumn {
  date_created = 'date_created',
  proposed_start_date = 'proposed_start_date',
  proposed_end_date = 'proposed_end_date',
  status_changed_date = 'status_changed_date'
}

export enum AlterationType {
  PROMOTER_IMPOSED_CHANGE = 'PROMOTER_IMPOSED_CHANGE',
  PROMOTER_CHANGE_REQUEST = 'PROMOTER_CHANGE_REQUEST',
  HA_CHANGE_REQUEST = 'HA_CHANGE_REQUEST',
  HA_IMPOSED_CHANGE = 'HA_IMPOSED_CHANGE',
  WORK_EXTENSION = 'WORK_EXTENSION',
  DURATION_CHALLENGE = 'DURATION_CHALLENGE',
  MODIFIED_PERMIT = 'MODIFIED_PERMIT'
}

export enum AlterationTypeResponse {
  PROMOTER_IMPOSED_CHANGE = 'PROMOTER_IMPOSED_CHANGE',
  PROMOTER_CHANGE_REQUEST = 'PROMOTER_CHANGE_REQUEST',
  HA_CHANGE_REQUEST = 'HA_CHANGE_REQUEST',
  HA_IMPOSED_CHANGE = 'HA_IMPOSED_CHANGE',
  WORK_EXTENSION = 'WORK_EXTENSION',
  DURATION_CHALLENGE = 'DURATION_CHALLENGE',
  MODIFIED_PERMIT = 'MODIFIED_PERMIT',
  upcoming_enum = 'upcoming_enum'
}

export enum WorkStatus {
  planned = 'planned',
  in_progress = 'in_progress',
  completed = 'completed',
  cancelled = 'cancelled',
  unattributable = 'unattributable',
  historical = 'historical',
  non_notifiable = 'non_notifiable',
  section_81 = 'section_81'
}

export enum WorkStatusResponse {
  planned = 'planned',
  in_progress = 'in_progress',
  completed = 'completed',
  cancelled = 'cancelled',
  unattributable = 'unattributable',
  historical = 'historical',
  non_notifiable = 'non_notifiable',
  section_81 = 'section_81',
  upcoming_enum = 'upcoming_enum'
}

export enum ForwardPlanStatus {
  raised = 'raised',
  cancelled = 'cancelled',
  progressed = 'progressed'
}

export enum ForwardPlanStatusResponse {
  raised = 'raised',
  cancelled = 'cancelled',
  progressed = 'progressed',
  upcoming_enum = 'upcoming_enum'
}

export enum ForwardPlanSortColumn {
  start_date = 'start_date',
  end_date = 'end_date'
}

export enum PermitConditionTypeResponse {
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
  NCT12a = 'NCT12a',
  upcoming_enum = 'upcoming_enum'
}

export enum LaneRentalAssessmentOutcome {
  chargeable = 'chargeable',
  potentially_chargeable = 'potentially_chargeable',
  charges_waived = 'charges_waived',
  exempt = 'exempt',
  charges_not_applicable = 'charges_not_applicable'
}

export enum LaneRentalAssessmentOutcomeResponse {
  chargeable = 'chargeable',
  potentially_chargeable = 'potentially_chargeable',
  charges_waived = 'charges_waived',
  exempt = 'exempt',
  charges_not_applicable = 'charges_not_applicable',
  upcoming_enum = 'upcoming_enum'
}

export enum ReinstatementTypeResponse {
  excavation = 'excavation',
  bar_holes = 'bar_holes',
  core_holes = 'core_holes',
  pole_testing = 'pole_testing',
  upcoming_enum = 'upcoming_enum'
}

export enum AdditionalSpecialDesignationCode {
  protected_street = 1,
  traffic_sensitive = 2,
  special_engineering_difficulty = 3,
  proposed_special_engineering_difficulty = 6,
  level_crossing_safety_zone = 8,
  environmentally_sensitive_areas = 9,
  structures_not_designated_special_engineering_difficulty = 10,
  pipelines_and_specialist_cables = 12,
  priority_lanes = 13,
  lane_rental = 16,
  streets_subject_to_early_notification_of_immediate_activities = 17,
  special_events = 18,
  parking_bays_and_restrictions = 19,
  pedestrian_crossings_traffic_signals_and_traffic_sensors = 20,
  speed_limits = 21,
  transport_authority_critical_apparatus = 22,
  strategic_route = 23,
  street_lighting = 24,
  drainage_and_flood_risk = 25,
  unusual_traffic_layout = 26,
  local_considerations = 27,
  winter_maintenance_routes = 28,
  hgv_approved_routes = 29,
  emergency_services_routes = 30
}

export enum Section81Severity {
  high = 'high',
  low = 'low'
}

export enum Section81SeverityResponse {
  high = 'high',
  low = 'low',
  upcoming_enum = 'upcoming_enum'
}

export enum Section81Status {
  issued = 'issued',
  acknowledged = 'acknowledged',
  accepted = 'accepted',
  accepted_fixed = 'accepted_fixed',
  rejected = 'rejected',
  resolved_by_ha = 'resolved_by_ha',
  cancelled = 'cancelled'
}

export enum Section81StatusResponse {
  issued = 'issued',
  acknowledged = 'acknowledged',
  accepted = 'accepted',
  accepted_fixed = 'accepted_fixed',
  rejected = 'rejected',
  resolved_by_ha = 'resolved_by_ha',
  cancelled = 'cancelled',
  upcoming_enum = 'upcoming_enum'
}

export enum Section81SortColumn {
  status_changed_date = 'status_changed_date'
}

export enum RoleResponse {
  Planner = 'Planner',
  HighwayAuthority = 'HighwayAuthority',
  Admin = 'Admin',
  Contractor = 'Contractor',
  API = 'API',
  UI = 'UI',
  DataExport = 'DataExport',
  upcoming_enum = 'upcoming_enum'
}

export enum WorkstreamAccessLevelResponse {
  read_only = 'read_only',
  full_write = 'full_write',
  upcoming_enum = 'upcoming_enum'
}

export enum CSVExportStatusResponse {
  queued = 'queued',
  in_progress = 'in_progress',
  ready = 'ready',
  failed = 'failed',
  upcoming_enum = 'upcoming_enum'
}

export enum AuditEventType {
  historic_action = 'historic_action',
  inspection_passed = 'inspection_passed',
  inspection_failed = 'inspection_failed',
  inspection_unable_to_carry_out = 'inspection_unable_to_carry_out',
  inspection_further_required = 'inspection_further_required',
  inspection_withdraw_defect = 'inspection_withdraw_defect',
  activity_submitted = 'activity_submitted',
  activity_edited = 'activity_edited',
  activity_cancelled = 'activity_cancelled',
  fpn_submitted = 'fpn_submitted',
  fpn_issued = 'fpn_issued',
  fpn_accepted = 'fpn_accepted',
  fpn_paid = 'fpn_paid',
  fpn_disputed = 'fpn_disputed',
  fpn_withdrawn = 'fpn_withdrawn',
  permit_granted = 'permit_granted',
  permit_refused = 'permit_refused',
  permit_cancelled = 'permit_cancelled',
  permit_revoked = 'permit_revoked',
  permit_deemed = 'permit_deemed',
  paa_granted = 'paa_granted',
  paa_refused = 'paa_refused',
  paa_cancelled = 'paa_cancelled',
  paa_revoked = 'paa_revoked',
  alteration_submitted = 'alteration_submitted',
  alteration_refused = 'alteration_refused',
  alteration_granted = 'alteration_granted',
  alteration_granted_with_duration_challenge = 'alteration_granted_with_duration_challenge',
  alteration_deemed = 'alteration_deemed',
  alteration_cancelled = 'alteration_cancelled',
  lane_rental_assessed = 'lane_rental_assessed',
  reinstatement_submitted = 'reinstatement_submitted',
  file_uploaded = 'file_uploaded',
  comment_submitted = 'comment_submitted',
  work_start_logged = 'work_start_logged',
  work_stop_logged = 'work_stop_logged',
  work_start_reverted = 'work_start_reverted',
  work_stop_reverted = 'work_stop_reverted',
  forward_plan_submitted = 'forward_plan_submitted',
  forward_plan_cancelled = 'forward_plan_cancelled',
  user_removed = 'user_removed',
  user_invited = 'user_invited',
  inspection_units_logged = 'inspection_units_logged',
  alteration_revoked = 'alteration_revoked',
  permit_submitted = 'permit_submitted',
  paa_submitted = 'paa_submitted',
  forward_plan_edited = 'forward_plan_edited',
  permit_discount_updated = 'permit_discount_updated',
  paa_discount_updated = 'paa_discount_updated',
  paa_deemed = 'paa_deemed',
  organisation_contract_added = 'organisation_contract_added',
  organisation_contract_removed = 'organisation_contract_removed',
  organisation_updated = 'organisation_updated',
  workstream_created = 'workstream_created',
  workstream_updated = 'workstream_updated',
  inspection_works_stopped = 'inspection_works_stopped',
  inspection_works_stopped_apparatus_remaining = 'inspection_works_stopped_apparatus_remaining',
  inspection_works_in_progress = 'inspection_works_in_progress',
  inspection_works_in_progress_no_carriageway_incursion = 'inspection_works_in_progress_no_carriageway_incursion',
  inspection_non_compliant_with_conditions = 'inspection_non_compliant_with_conditions',
  permit_modification_request = 'permit_modification_request',
  scheduled_inspection_cancelled = 'scheduled_inspection_cancelled',
  scheduled_inspection_created = 'scheduled_inspection_created',
  alteration_applied_auto = 'alteration_applied_auto',
  section_81_submitted = 'section_81_submitted',
  final_reinstatement_updated = 'final_reinstatement_updated',
  section_81_acknowledged = 'section_81_acknowledged',
  section_81_accepted = 'section_81_accepted',
  section_81_accepted_fixed = 'section_81_accepted_fixed',
  section_81_rejected = 'section_81_rejected',
  section_81_resolved_by_ha = 'section_81_resolved_by_ha',
  section_81_cancelled = 'section_81_cancelled',
  user_roles_updated = 'user_roles_updated',
  support_desk_action = 'support_desk_action',
  user_name_updated = 'user_name_updated',
  permit_hs2_acknowledged =  'permit_hs2_acknowledged',
  geographical_area_created = 'geographical_area_created',
  geographical_area_updated = 'geographical_area_updated',
  workstream_access_updated = 'workstream_access_updated',
  planned_works_record_created = 'planned_works_record_created',
  in_progress_works_record_created = 'in_progress_works_record_created',
  historic_works_record_created = 'historic_works_record_created',
  non_notifiable_works_record_created = 'non_notifiable_works_record_created',
  section_81_works_record_created = 's81_works_record_created',
  unattributable_works_record_created = 'unattributable_works_record_created',
  upcoming_event = 'upcoming_event',
  sample_inspection_target_created = 'sample_inspection_target_created',
  sample_inspection_target_updated = 'sample_inspection_target_updated',
  sample_inspection_created = 'sample_inspection_created',
  sample_inspection_completed = 'sample_inspection_completed',
  sample_inspection_removed = 'sample_inspection_removed',
  sample_inspection_expired = 'sample_inspection_expired',
  internal_comment_submitted = 'internal_comment_submitted',
  comment_read = 'comment_read',
  excavation_carried_out_updated = 'excavation_carried_out_updated',
  section_81_linked_to_permit = 'section_81_linked_to_permit',
  section_81_unlinked_from_permit = 'section_81_unlinked_from_permit',
  section_81_reassigned = 'section_81_reassigned',
  permit_granted_with_duration_challenge = 'permit_granted_with_duration_challenge',
  inspection_withdrawn = 'inspection_withdrawn'
}

export enum AuditObjectTypeResponse {
  PERMIT = 'permit',
  REINSTATEMENT = 'reinstatement',
  INSPECTION = 'inspection',
  FPN = 'fpn',
  PAA = 'paa',
  WORKSTREAM = 'workstream',
  WORK = 'work',
  ORGANISATION = 'organisation',
  ACTIVITY = 'activity',
  FORWARD_PLAN = 'forward_plan',
  COMMENT = 'comment',
  SCHEDULED_INSPECTION = 'scheduled_inspection',
  SECTION_81 = 'section_81',
  USER = 'user',
  GEOGRAPHICAL_AREA = 'geographical_area',
  CHANGE_REQUEST = 'change_request',
  APPLICATION = 'application',
  upcoming_enum = 'upcoming_enum'
}

export enum SampleInspectionSortColumn {
  inspection_expiry = 'inspection_expiry'
}

export enum InspectionStatusResponse {
  recorded = 'recorded',
  withdrawn = 'withdrawn',
  scheduled = 'scheduled',
  upcoming_enum = 'upcoming_enum'
}
