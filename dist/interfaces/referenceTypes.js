"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted_proposed"] = "granted_proposed";
    PermitStatus["permit_modification_request"] = "permit_modification_request";
    PermitStatus["refused"] = "refused";
    PermitStatus["granted_in_progress"] = "granted_in_progress";
    PermitStatus["closed"] = "closed";
    PermitStatus["cancelled"] = "cancelled";
    PermitStatus["revoked_proposed"] = "revoked_proposed";
    PermitStatus["revoked_in_progress"] = "revoked_in_progress";
    PermitStatus["deemed_proposed"] = "deemed_proposed";
    PermitStatus["deemed_in_progress"] = "deemed_in_progress";
    PermitStatus["granted_auto"] = "granted_auto";
    PermitStatus["refused_auto"] = "refused_auto";
    PermitStatus["cancelled_auto"] = "cancelled_auto";
    PermitStatus["awaiting_assessment_in_progress"] = "awaiting_assessment_in_progress";
    PermitStatus["revoked_closed"] = "revoked_closed";
    PermitStatus["deemed_closed"] = "deemed_closed";
})(PermitStatus = exports.PermitStatus || (exports.PermitStatus = {}));
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
})(AlterationStatus = exports.AlterationStatus || (exports.AlterationStatus = {}));
var AlterationSortColumn;
(function (AlterationSortColumn) {
    AlterationSortColumn["date_created"] = "date_created";
})(AlterationSortColumn = exports.AlterationSortColumn || (exports.AlterationSortColumn = {}));
var AlterationType;
(function (AlterationType) {
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
    ForwardPlanStatus["closed"] = "closed";
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
