export declare enum PermitStatus {
    submitted = "submitted",
    granted_proposed = "granted_proposed",
    granted_with_changes = "granted_with_changes",
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
    revoked_closed = "revoked_closed"
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
    deadline_date = "deadline_date"
}
export declare enum FPNSortColumn {
    issue_date_time = "issue_date_time"
}
export declare enum WorkstreamSortColumn {
    status = "status"
}
export declare enum CommentSortColumn {
    date_created = "date_created"
}
export declare enum SiteSortColumn {
    date_created = "date_created"
}
export declare enum InspectionType {
    slg = "slg",
    reinstatement = "reinstatement",
    defect_inspection = "defect_inspection"
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
    follow_up_completion = "follow_up_completion"
}
export declare enum InspectionOutcome {
    passed = "passed",
    unable_to_complete_inspection = "unable_to_complete_inspection",
    failed_low = "failed_low",
    failed_high = "failed_high",
    further_inspections_required = "further_inspections_required",
    withdraw_defect = "withdraw_defect"
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
