export declare enum PermitStatus {
    submitted = "submitted",
    granted = "granted",
    permit_modification_request = "permit_modification_request",
    refused = "refused",
    closed = "closed",
    cancelled = "cancelled",
    revoked = "revoked",
    progressed = "progressed"
}
export declare enum AssessmentStatus {
    granted = "granted",
    granted_auto = "granted_auto",
    refused = "refused",
    refused_auto = "refused_auto",
    permit_modification_request = "permit_modification_request",
    revoked = "revoked"
}
export declare enum ReinstatementStatus {
    interim = "interim",
    permanent = "permanent"
}
export declare enum FPNStatus {
    issued = "issued",
    accepted = "accepted",
    paid = "paid",
    paid_discounted = "paid_discounted",
    disputed = "disputed",
    withdrawn = "withdrawn"
}
export declare enum WorkstreamStatus {
    active = "active",
    deactivated = "deactivated"
}
export declare enum OffenceCode {
    offence_code_05 = "offence_code_05",
    offence_code_06 = "offence_code_06",
    offence_code_08 = "offence_code_08",
    offence_code_09 = "offence_code_09"
}
export declare enum CommentTopic {
    GENERAL = "GENERAL",
    SECTION_74 = "SECTION_74",
    INSPECTION = "INSPECTION",
    FPN = "FPN",
    OVERRUN = "OVERRUN"
}
export declare enum SortDirection {
    asc = "asc",
    desc = "desc"
}
export declare enum PermitSortColumn {
    date_created = "date_created",
    deadline_date = "deadline_date",
    end_date = "end_date",
    start_date = "start_date",
    status_changed_date = "status_changed_date"
}
export declare enum PermitCsvExportPrefix {
    PA = "PA",
    WR = "WR",
    PAA = "PAA"
}
export declare enum FPNSortColumn {
    issue_date_time = "issue_date_time"
}
export declare enum CommentSortColumn {
    date_created = "date_created"
}
export declare enum SiteSortColumn {
    date_created = "date_created"
}
export declare enum ReinstatementSortColumn {
    end_date = "end_date"
}
export declare enum InspectionType {
    live_site = "live_site",
    reinstatement = "reinstatement",
    non_compliance_follow_up = "non_compliance_follow_up",
    section_81 = "section_81"
}
export declare enum InspectionResponseType {
    inspection = "inspection",
    reinspection = "reinspection"
}
export declare enum InspectionCategory {
    a = "a",
    b = "b",
    c = "c",
    third_party = "third_party",
    routine = "routine",
    joint_site_visit = "joint_site_visit",
    follow_up = "follow_up",
    follow_up_completion = "follow_up_completion",
    site_occupancy = "site_occupancy",
    conditions = "conditions"
}
export declare enum InspectionOutcome {
    passed = "passed",
    unable_to_complete_inspection = "unable_to_complete_inspection",
    failed_low = "failed_low",
    failed_high = "failed_high",
    further_inspections_required = "further_inspections_required",
    agreed_site_compliance = "agreed_site_compliance",
    non_compliant_with_conditions = "non_compliant_with_conditions",
    works_stopped_apparatus_remaining = "works_stopped_apparatus_remaining",
    works_in_progress_no_carriageway_incursion = "works_in_progress_no_carriageway_incursion",
    works_in_progress = "works_in_progress",
    works_stopped = "works_stopped"
}
export declare enum InspectionSortColumn {
    inspection_date = "inspection_date"
}
export declare enum WorkCategory {
    minor = "minor",
    standard = "standard",
    major = "major",
    immediate_urgent = "immediate_urgent",
    immediate_emergency = "immediate_emergency",
    paa = "paa",
    hs2_highway = "hs2_highway"
}
export declare enum TrafficManagementType {
    road_closure = "road_closure",
    contra_flow = "contra_flow",
    lane_closure = "lane_closure",
    multi_way_signals = "multi_way_signals",
    two_way_signals = "two_way_signals",
    convoy_workings = "convoy_workings",
    stop_go_boards = "stop_go_boards",
    priority_working = "priority_working",
    give_and_take = "give_and_take",
    some_carriageway_incursion = "some_carriageway_incursion",
    no_carriageway_incursion = "no_carriageway_incursion"
}
export declare enum AlterationStatus {
    submitted = "submitted",
    granted = "granted",
    granted_with_duration_challenge = "granted_with_duration_challenge",
    refused = "refused",
    deemed = "deemed",
    cancelled = "cancelled",
    revoked = "revoked",
    auto_applied = "auto_applied"
}
export declare enum AlterationSortColumn {
    date_created = "date_created"
}
export declare enum AlterationType {
    PROMOTER_IMPOSED_CHANGE = "PROMOTER_IMPOSED_CHANGE",
    PROMOTER_CHANGE_REQUEST = "PROMOTER_CHANGE_REQUEST",
    HA_CHANGE_REQUEST = "HA_CHANGE_REQUEST",
    HA_IMPOSED_CHANGE = "HA_IMPOSED_CHANGE",
    WORK_EXTENSION = "WORK_EXTENSION",
    DURATION_CHALLENGE = "DURATION_CHALLENGE",
    MODIFIED_PERMIT = "MODIFIED_PERMIT"
}
export declare enum WorkStatus {
    planned = "planned",
    in_progress = "in_progress",
    completed = "completed",
    cancelled = "cancelled",
    unattributable = "unattributable",
    historical = "historical",
    non_notifiable = "non_notifiable",
    section_81 = "section_81"
}
export declare enum ForwardPlanStatus {
    raised = "raised",
    cancelled = "cancelled",
    progressed = "progressed"
}
export declare enum ForwardPlanSortColumn {
    start_date = "start_date",
    end_date = "end_date"
}
export declare enum PermitConditionType {
    NCT01a = "NCT01a",
    NCT01b = "NCT01b",
    NCT02a = "NCT02a",
    NCT02b = "NCT02b",
    NCT04a = "NCT04a",
    NCT04b = "NCT04b",
    NCT05a = "NCT05a",
    NCT06a = "NCT06a",
    NCT07a = "NCT07a",
    NCT08a = "NCT08a",
    NCT08b = "NCT08b",
    NCT09a = "NCT09a",
    NCT09b = "NCT09b",
    NCT09c = "NCT09c",
    NCT10a = "NCT10a",
    NCT11a = "NCT11a",
    NCT11b = "NCT11b",
    NCT12a = "NCT12a"
}
export declare enum LaneRentalAssessmentOutcome {
    chargeable = "chargeable",
    potentially_chargeable = "potentially_chargeable",
    charges_waived = "charges_waived",
    exempt = "exempt",
    charges_not_applicable = "charges_not_applicable"
}
export declare enum ReinstatementType {
    excavation = "excavation",
    bar_holes = "bar_holes",
    core_holes = "core_holes",
    pole_testing = "pole_testing"
}
export declare enum AdditionalSpecialDesignationCode {
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
export declare enum Section81Severity {
    high = "high",
    low = "low"
}
export declare enum Section81Status {
    issued = "issued",
    acknowledged = "acknowledged",
    accepted = "accepted",
    accepted_fixed = "accepted_fixed",
    rejected = "rejected",
    resolved_by_ha = "resolved_by_ha",
    cancelled = "cancelled"
}
export declare enum Section81SortColumn {
    status_changed_date = "status_changed_date"
}
export declare enum Role {
    Planner = "Planner",
    HighwayAuthority = "HighwayAuthority",
    Admin = "Admin",
    Contractor = "Contractor",
    API = "API",
    UI = "UI",
    DataExport = "DataExport"
}
export declare enum WorkstreamAccessLevel {
    read_only = "read_only",
    full_write = "full_write"
}
export declare enum CSVExportStatus {
    queued = "queued",
    in_progress = "in_progress",
    ready = "ready",
    failed = "failed"
}
export declare enum AuditEventType {
    historic_action = "historic_action",
    inspection_passed = "inspection_passed",
    inspection_failed = "inspection_failed",
    inspection_unable_to_carry_out = "inspection_unable_to_carry_out",
    inspection_further_required = "inspection_further_required",
    inspection_withdraw_defect = "inspection_withdraw_defect",
    activity_submitted = "activity_submitted",
    activity_edited = "activity_edited",
    activity_cancelled = "activity_cancelled",
    fpn_submitted = "fpn_submitted",
    fpn_issued = "fpn_issued",
    fpn_accepted = "fpn_accepted",
    fpn_paid = "fpn_paid",
    fpn_disputed = "fpn_disputed",
    fpn_withdrawn = "fpn_withdrawn",
    permit_granted = "permit_granted",
    permit_refused = "permit_refused",
    permit_cancelled = "permit_cancelled",
    permit_revoked = "permit_revoked",
    permit_deemed = "permit_deemed",
    paa_granted = "paa_granted",
    paa_refused = "paa_refused",
    paa_cancelled = "paa_cancelled",
    paa_revoked = "paa_revoked",
    alteration_submitted = "alteration_submitted",
    alteration_refused = "alteration_refused",
    alteration_granted = "alteration_granted",
    alteration_granted_with_duration_challenge = "alteration_granted_with_duration_challenge",
    alteration_deemed = "alteration_deemed",
    alteration_cancelled = "alteration_cancelled",
    lane_rental_assessed = "lane_rental_assessed",
    reinstatement_submitted = "reinstatement_submitted",
    file_uploaded = "file_uploaded",
    comment_submitted = "comment_submitted",
    work_start_logged = "work_start_logged",
    work_stop_logged = "work_stop_logged",
    work_start_reverted = "work_start_reverted",
    work_stop_reverted = "work_stop_reverted",
    forward_plan_submitted = "forward_plan_submitted",
    forward_plan_cancelled = "forward_plan_cancelled",
    user_removed = "user_removed",
    user_invited = "user_invited",
    inspection_units_logged = "inspection_units_logged",
    alteration_revoked = "alteration_revoked",
    permit_submitted = "permit_submitted",
    paa_submitted = "paa_submitted",
    forward_plan_edited = "forward_plan_edited",
    permit_discount_updated = "permit_discount_updated",
    paa_discount_updated = "paa_discount_updated",
    paa_deemed = "paa_deemed",
    organisation_contract_added = "organisation_contract_added",
    organisation_contract_removed = "organisation_contract_removed",
    organisation_updated = "organisation_updated",
    workstream_created = "workstream_created",
    workstream_updated = "workstream_updated",
    inspection_works_stopped = "inspection_works_stopped",
    inspection_works_stopped_apparatus_remaining = "inspection_works_stopped_apparatus_remaining",
    inspection_works_in_progress = "inspection_works_in_progress",
    inspection_works_in_progress_no_carriageway_incursion = "inspection_works_in_progress_no_carriageway_incursion",
    inspection_non_compliant_with_conditions = "inspection_non_compliant_with_conditions",
    permit_modification_request = "permit_modification_request",
    scheduled_inspection_cancelled = "scheduled_inspection_cancelled",
    scheduled_inspection_created = "scheduled_inspection_created",
    alteration_applied_auto = "alteration_applied_auto",
    section_81_submitted = "section_81_submitted",
    final_reinstatement_updated = "final_reinstatement_updated",
    section_81_acknowledged = "section_81_acknowledged",
    section_81_accepted = "section_81_accepted",
    section_81_accepted_fixed = "section_81_accepted_fixed",
    section_81_rejected = "section_81_rejected",
    section_81_resolved_by_ha = "section_81_resolved_by_ha",
    section_81_cancelled = "section_81_cancelled",
    user_roles_updated = "user_roles_updated",
    support_desk_action = "support_desk_action",
    user_name_updated = "user_name_updated",
    permit_hs2_acknowledged = "permit_hs2_acknowledged",
    geographical_area_created = "geographical_area_created",
    workstream_access_updated = "workstream_access_updated"
}
