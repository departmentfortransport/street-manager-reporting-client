export declare enum PermitStatus {
    submitted = "submitted",
    granted_proposed = "granted_proposed",
    permit_modification_request = "permit_modification_request",
    refused = "refused",
    granted_in_progress = "granted_in_progress",
    closed = "closed",
    cancelled = "cancelled",
    revoked_proposed = "revoked_proposed",
    revoked_in_progress = "revoked_in_progress",
    deemed_proposed = "deemed_proposed",
    deemed_in_progress = "deemed_in_progress",
    granted_auto = "granted_auto",
    refused_auto = "refused_auto",
    cancelled_auto = "cancelled_auto",
    awaiting_assessment_in_progress = "awaiting_assessment_in_progress",
    revoked_closed = "revoked_closed",
    deemed_closed = "deemed_closed"
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
    start_date = "start_date"
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
    non_compliance_follow_up = "non_compliance_follow_up"
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
    paa = "paa"
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
    PROMOTER_IMPOSED_REQUEST = "PROMOTER_IMPOSED_CHANGE",
    PROMOTER_CHANGE_REQUEST = "PROMOTER_CHANGE_REQUEST",
    HA_CHANGE_REQUEST = "HA_CHANGE_REQUEST",
    HA_IMPOSED_CHANGE = "HA_IMPOSED_CHANGE",
    WORK_EXTENSION = "WORK_EXTENSION"
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
    closed = "closed"
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
