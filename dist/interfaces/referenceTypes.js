"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted"] = "granted";
    PermitStatus["permit_modification_request"] = "permit_modification_request";
    PermitStatus["refused"] = "refused";
    PermitStatus["closed"] = "closed";
    PermitStatus["cancelled"] = "cancelled";
    PermitStatus["revoked"] = "revoked";
    PermitStatus["progressed"] = "progressed";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
var AssessmentStatus;
(function (AssessmentStatus) {
    AssessmentStatus["granted"] = "granted";
    AssessmentStatus["granted_auto"] = "granted_auto";
    AssessmentStatus["refused"] = "refused";
    AssessmentStatus["refused_auto"] = "refused_auto";
    AssessmentStatus["permit_modification_request"] = "permit_modification_request";
    AssessmentStatus["revoked"] = "revoked";
})(AssessmentStatus = exports.AssessmentStatus || (exports.AssessmentStatus = {}));
var ReinstatementStatus;
(function (ReinstatementStatus) {
    ReinstatementStatus["interim"] = "interim";
    ReinstatementStatus["permanent"] = "permanent";
})(ReinstatementStatus = exports.ReinstatementStatus || (exports.ReinstatementStatus = {}));
var FPNStatus;
(function (FPNStatus) {
    FPNStatus["issued"] = "issued";
    FPNStatus["accepted"] = "accepted";
    FPNStatus["paid"] = "paid";
    FPNStatus["paid_discounted"] = "paid_discounted";
    FPNStatus["disputed"] = "disputed";
    FPNStatus["withdrawn"] = "withdrawn";
})(FPNStatus = exports.FPNStatus || (exports.FPNStatus = {}));
var WorkstreamStatus;
(function (WorkstreamStatus) {
    WorkstreamStatus["active"] = "active";
    WorkstreamStatus["deactivated"] = "deactivated";
})(WorkstreamStatus = exports.WorkstreamStatus || (exports.WorkstreamStatus = {}));
var OffenceCode;
(function (OffenceCode) {
    OffenceCode["offence_code_05"] = "offence_code_05";
    OffenceCode["offence_code_06"] = "offence_code_06";
    OffenceCode["offence_code_08"] = "offence_code_08";
    OffenceCode["offence_code_09"] = "offence_code_09";
})(OffenceCode = exports.OffenceCode || (exports.OffenceCode = {}));
var CommentTopic;
(function (CommentTopic) {
    CommentTopic["GENERAL"] = "GENERAL";
    CommentTopic["SECTION_74"] = "SECTION_74";
    CommentTopic["INSPECTION"] = "INSPECTION";
    CommentTopic["FPN"] = "FPN";
    CommentTopic["OVERRUN"] = "OVERRUN";
})(CommentTopic = exports.CommentTopic || (exports.CommentTopic = {}));
var SortDirection;
(function (SortDirection) {
    SortDirection["asc"] = "asc";
    SortDirection["desc"] = "desc";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
var PermitSortColumn;
(function (PermitSortColumn) {
    PermitSortColumn["date_created"] = "date_created";
    PermitSortColumn["deadline_date"] = "deadline_date";
    PermitSortColumn["end_date"] = "end_date";
    PermitSortColumn["start_date"] = "start_date";
    PermitSortColumn["status_changed_date"] = "status_changed_date";
})(PermitSortColumn = exports.PermitSortColumn || (exports.PermitSortColumn = {}));
var PermitCsvExportPrefix;
(function (PermitCsvExportPrefix) {
    PermitCsvExportPrefix["PA"] = "PA";
    PermitCsvExportPrefix["WR"] = "WR";
    PermitCsvExportPrefix["PAA"] = "PAA";
})(PermitCsvExportPrefix = exports.PermitCsvExportPrefix || (exports.PermitCsvExportPrefix = {}));
var FPNSortColumn;
(function (FPNSortColumn) {
    FPNSortColumn["issue_date_time"] = "issue_date_time";
})(FPNSortColumn = exports.FPNSortColumn || (exports.FPNSortColumn = {}));
var CommentSortColumn;
(function (CommentSortColumn) {
    CommentSortColumn["date_created"] = "date_created";
})(CommentSortColumn = exports.CommentSortColumn || (exports.CommentSortColumn = {}));
var SiteSortColumn;
(function (SiteSortColumn) {
    SiteSortColumn["date_created"] = "date_created";
})(SiteSortColumn = exports.SiteSortColumn || (exports.SiteSortColumn = {}));
var ReinstatementSortColumn;
(function (ReinstatementSortColumn) {
    ReinstatementSortColumn["end_date"] = "end_date";
})(ReinstatementSortColumn = exports.ReinstatementSortColumn || (exports.ReinstatementSortColumn = {}));
var InspectionType;
(function (InspectionType) {
    InspectionType["live_site"] = "live_site";
    InspectionType["reinstatement"] = "reinstatement";
    InspectionType["non_compliance_follow_up"] = "non_compliance_follow_up";
    InspectionType["section_81"] = "section_81";
})(InspectionType = exports.InspectionType || (exports.InspectionType = {}));
var InspectionResponseType;
(function (InspectionResponseType) {
    InspectionResponseType["inspection"] = "inspection";
    InspectionResponseType["reinspection"] = "reinspection";
})(InspectionResponseType = exports.InspectionResponseType || (exports.InspectionResponseType = {}));
var InspectionCategory;
(function (InspectionCategory) {
    InspectionCategory["a"] = "a";
    InspectionCategory["b"] = "b";
    InspectionCategory["c"] = "c";
    InspectionCategory["third_party"] = "third_party";
    InspectionCategory["routine"] = "routine";
    InspectionCategory["joint_site_visit"] = "joint_site_visit";
    InspectionCategory["follow_up"] = "follow_up";
    InspectionCategory["follow_up_completion"] = "follow_up_completion";
    InspectionCategory["site_occupancy"] = "site_occupancy";
    InspectionCategory["conditions"] = "conditions";
})(InspectionCategory = exports.InspectionCategory || (exports.InspectionCategory = {}));
var InspectionOutcome;
(function (InspectionOutcome) {
    InspectionOutcome["passed"] = "passed";
    InspectionOutcome["unable_to_complete_inspection"] = "unable_to_complete_inspection";
    InspectionOutcome["failed_low"] = "failed_low";
    InspectionOutcome["failed_high"] = "failed_high";
    InspectionOutcome["further_inspections_required"] = "further_inspections_required";
    InspectionOutcome["agreed_site_compliance"] = "agreed_site_compliance";
    InspectionOutcome["non_compliant_with_conditions"] = "non_compliant_with_conditions";
    InspectionOutcome["works_stopped_apparatus_remaining"] = "works_stopped_apparatus_remaining";
    InspectionOutcome["works_in_progress_no_carriageway_incursion"] = "works_in_progress_no_carriageway_incursion";
    InspectionOutcome["works_in_progress"] = "works_in_progress";
    InspectionOutcome["works_stopped"] = "works_stopped";
})(InspectionOutcome = exports.InspectionOutcome || (exports.InspectionOutcome = {}));
var InspectionSortColumn;
(function (InspectionSortColumn) {
    InspectionSortColumn["inspection_date"] = "inspection_date";
})(InspectionSortColumn = exports.InspectionSortColumn || (exports.InspectionSortColumn = {}));
var WorkCategory;
(function (WorkCategory) {
    WorkCategory["minor"] = "minor";
    WorkCategory["standard"] = "standard";
    WorkCategory["major"] = "major";
    WorkCategory["immediate_urgent"] = "immediate_urgent";
    WorkCategory["immediate_emergency"] = "immediate_emergency";
    WorkCategory["paa"] = "paa";
    WorkCategory["hs2_highway"] = "hs2_highway";
})(WorkCategory = exports.WorkCategory || (exports.WorkCategory = {}));
var TrafficManagementType;
(function (TrafficManagementType) {
    TrafficManagementType["road_closure"] = "road_closure";
    TrafficManagementType["contra_flow"] = "contra_flow";
    TrafficManagementType["lane_closure"] = "lane_closure";
    TrafficManagementType["multi_way_signals"] = "multi_way_signals";
    TrafficManagementType["two_way_signals"] = "two_way_signals";
    TrafficManagementType["convoy_workings"] = "convoy_workings";
    TrafficManagementType["stop_go_boards"] = "stop_go_boards";
    TrafficManagementType["priority_working"] = "priority_working";
    TrafficManagementType["give_and_take"] = "give_and_take";
    TrafficManagementType["some_carriageway_incursion"] = "some_carriageway_incursion";
    TrafficManagementType["no_carriageway_incursion"] = "no_carriageway_incursion";
})(TrafficManagementType = exports.TrafficManagementType || (exports.TrafficManagementType = {}));
var AlterationStatus;
(function (AlterationStatus) {
    AlterationStatus["submitted"] = "submitted";
    AlterationStatus["granted"] = "granted";
    AlterationStatus["granted_with_duration_challenge"] = "granted_with_duration_challenge";
    AlterationStatus["refused"] = "refused";
    AlterationStatus["deemed"] = "deemed";
    AlterationStatus["cancelled"] = "cancelled";
    AlterationStatus["revoked"] = "revoked";
    AlterationStatus["auto_applied"] = "auto_applied";
})(AlterationStatus = exports.AlterationStatus || (exports.AlterationStatus = {}));
var AlterationSortColumn;
(function (AlterationSortColumn) {
    AlterationSortColumn["date_created"] = "date_created";
})(AlterationSortColumn = exports.AlterationSortColumn || (exports.AlterationSortColumn = {}));
var AlterationType;
(function (AlterationType) {
    AlterationType["PROMOTER_IMPOSED_CHANGE"] = "PROMOTER_IMPOSED_CHANGE";
    AlterationType["PROMOTER_CHANGE_REQUEST"] = "PROMOTER_CHANGE_REQUEST";
    AlterationType["HA_CHANGE_REQUEST"] = "HA_CHANGE_REQUEST";
    AlterationType["HA_IMPOSED_CHANGE"] = "HA_IMPOSED_CHANGE";
    AlterationType["WORK_EXTENSION"] = "WORK_EXTENSION";
})(AlterationType = exports.AlterationType || (exports.AlterationType = {}));
var WorkStatus;
(function (WorkStatus) {
    WorkStatus["planned"] = "planned";
    WorkStatus["in_progress"] = "in_progress";
    WorkStatus["completed"] = "completed";
    WorkStatus["cancelled"] = "cancelled";
    WorkStatus["unattributable"] = "unattributable";
    WorkStatus["historical"] = "historical";
    WorkStatus["non_notifiable"] = "non_notifiable";
    WorkStatus["section_81"] = "section_81";
})(WorkStatus = exports.WorkStatus || (exports.WorkStatus = {}));
var ForwardPlanStatus;
(function (ForwardPlanStatus) {
    ForwardPlanStatus["raised"] = "raised";
    ForwardPlanStatus["cancelled"] = "cancelled";
    ForwardPlanStatus["progressed"] = "progressed";
})(ForwardPlanStatus = exports.ForwardPlanStatus || (exports.ForwardPlanStatus = {}));
var ForwardPlanSortColumn;
(function (ForwardPlanSortColumn) {
    ForwardPlanSortColumn["start_date"] = "start_date";
    ForwardPlanSortColumn["end_date"] = "end_date";
})(ForwardPlanSortColumn = exports.ForwardPlanSortColumn || (exports.ForwardPlanSortColumn = {}));
var PermitConditionType;
(function (PermitConditionType) {
    PermitConditionType["NCT01a"] = "NCT01a";
    PermitConditionType["NCT01b"] = "NCT01b";
    PermitConditionType["NCT02a"] = "NCT02a";
    PermitConditionType["NCT02b"] = "NCT02b";
    PermitConditionType["NCT04a"] = "NCT04a";
    PermitConditionType["NCT04b"] = "NCT04b";
    PermitConditionType["NCT05a"] = "NCT05a";
    PermitConditionType["NCT06a"] = "NCT06a";
    PermitConditionType["NCT07a"] = "NCT07a";
    PermitConditionType["NCT08a"] = "NCT08a";
    PermitConditionType["NCT08b"] = "NCT08b";
    PermitConditionType["NCT09a"] = "NCT09a";
    PermitConditionType["NCT09b"] = "NCT09b";
    PermitConditionType["NCT09c"] = "NCT09c";
    PermitConditionType["NCT10a"] = "NCT10a";
    PermitConditionType["NCT11a"] = "NCT11a";
    PermitConditionType["NCT11b"] = "NCT11b";
    PermitConditionType["NCT12a"] = "NCT12a";
})(PermitConditionType = exports.PermitConditionType || (exports.PermitConditionType = {}));
var LaneRentalAssessmentOutcome;
(function (LaneRentalAssessmentOutcome) {
    LaneRentalAssessmentOutcome["chargeable"] = "chargeable";
    LaneRentalAssessmentOutcome["potentially_chargeable"] = "potentially_chargeable";
    LaneRentalAssessmentOutcome["charges_waived"] = "charges_waived";
    LaneRentalAssessmentOutcome["exempt"] = "exempt";
    LaneRentalAssessmentOutcome["charges_not_applicable"] = "charges_not_applicable";
})(LaneRentalAssessmentOutcome = exports.LaneRentalAssessmentOutcome || (exports.LaneRentalAssessmentOutcome = {}));
var ReinstatementType;
(function (ReinstatementType) {
    ReinstatementType["excavation"] = "excavation";
    ReinstatementType["bar_holes"] = "bar_holes";
    ReinstatementType["core_holes"] = "core_holes";
    ReinstatementType["pole_testing"] = "pole_testing";
})(ReinstatementType = exports.ReinstatementType || (exports.ReinstatementType = {}));
var AdditionalSpecialDesignationCode;
(function (AdditionalSpecialDesignationCode) {
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["protected_street"] = 1] = "protected_street";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["traffic_sensitive"] = 2] = "traffic_sensitive";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["special_engineering_difficulty"] = 3] = "special_engineering_difficulty";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["proposed_special_engineering_difficulty"] = 6] = "proposed_special_engineering_difficulty";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["level_crossing_safety_zone"] = 8] = "level_crossing_safety_zone";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["environmentally_sensitive_areas"] = 9] = "environmentally_sensitive_areas";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["structures_not_designated_special_engineering_difficulty"] = 10] = "structures_not_designated_special_engineering_difficulty";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["pipelines_and_specialist_cables"] = 12] = "pipelines_and_specialist_cables";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["priority_lanes"] = 13] = "priority_lanes";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["lane_rental"] = 16] = "lane_rental";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["streets_subject_to_early_notification_of_immediate_activities"] = 17] = "streets_subject_to_early_notification_of_immediate_activities";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["special_events"] = 18] = "special_events";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["parking_bays_and_restrictions"] = 19] = "parking_bays_and_restrictions";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["pedestrian_crossings_traffic_signals_and_traffic_sensors"] = 20] = "pedestrian_crossings_traffic_signals_and_traffic_sensors";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["speed_limits"] = 21] = "speed_limits";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["transport_authority_critical_apparatus"] = 22] = "transport_authority_critical_apparatus";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["strategic_route"] = 23] = "strategic_route";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["street_lighting"] = 24] = "street_lighting";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["drainage_and_flood_risk"] = 25] = "drainage_and_flood_risk";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["unusual_traffic_layout"] = 26] = "unusual_traffic_layout";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["local_considerations"] = 27] = "local_considerations";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["winter_maintenance_routes"] = 28] = "winter_maintenance_routes";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["hgv_approved_routes"] = 29] = "hgv_approved_routes";
    AdditionalSpecialDesignationCode[AdditionalSpecialDesignationCode["emergency_services_routes"] = 30] = "emergency_services_routes";
})(AdditionalSpecialDesignationCode = exports.AdditionalSpecialDesignationCode || (exports.AdditionalSpecialDesignationCode = {}));
var Section81Severity;
(function (Section81Severity) {
    Section81Severity["high"] = "high";
    Section81Severity["low"] = "low";
})(Section81Severity = exports.Section81Severity || (exports.Section81Severity = {}));
var Section81Status;
(function (Section81Status) {
    Section81Status["issued"] = "issued";
    Section81Status["acknowledged"] = "acknowledged";
    Section81Status["accepted"] = "accepted";
    Section81Status["accepted_fixed"] = "accepted_fixed";
    Section81Status["rejected"] = "rejected";
    Section81Status["resolved_by_ha"] = "resolved_by_ha";
    Section81Status["cancelled"] = "cancelled";
})(Section81Status = exports.Section81Status || (exports.Section81Status = {}));
var Section81SortColumn;
(function (Section81SortColumn) {
    Section81SortColumn["status_changed_date"] = "status_changed_date";
})(Section81SortColumn = exports.Section81SortColumn || (exports.Section81SortColumn = {}));
var Role;
(function (Role) {
    Role["Planner"] = "Planner";
    Role["HighwayAuthority"] = "HighwayAuthority";
    Role["Admin"] = "Admin";
    Role["Contractor"] = "Contractor";
    Role["API"] = "API";
    Role["UI"] = "UI";
    Role["DataExport"] = "DataExport";
})(Role = exports.Role || (exports.Role = {}));
var WorkstreamAccessLevel;
(function (WorkstreamAccessLevel) {
    WorkstreamAccessLevel["read_only"] = "read_only";
    WorkstreamAccessLevel["full_write"] = "full_write";
})(WorkstreamAccessLevel = exports.WorkstreamAccessLevel || (exports.WorkstreamAccessLevel = {}));
var CSVExportStatus;
(function (CSVExportStatus) {
    CSVExportStatus["queued"] = "queued";
    CSVExportStatus["in_progress"] = "in_progress";
    CSVExportStatus["ready"] = "ready";
    CSVExportStatus["failed"] = "failed";
})(CSVExportStatus = exports.CSVExportStatus || (exports.CSVExportStatus = {}));
