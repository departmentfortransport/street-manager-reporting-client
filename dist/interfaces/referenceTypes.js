"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PermitStatus;
(function (PermitStatus) {
    PermitStatus["submitted"] = "submitted";
    PermitStatus["granted_proposed"] = "granted_proposed";
    PermitStatus["granted_with_changes"] = "granted_with_changes";
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
})(PermitSortColumn = exports.PermitSortColumn || (exports.PermitSortColumn = {}));
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
var InspectionType;
(function (InspectionType) {
    InspectionType["slg"] = "slg";
    InspectionType["reinstatement"] = "reinstatement";
    InspectionType["defect_inspection"] = "defect_inspection";
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
})(InspectionCategory = exports.InspectionCategory || (exports.InspectionCategory = {}));
var InspectionOutcome;
(function (InspectionOutcome) {
    InspectionOutcome["passed"] = "passed";
    InspectionOutcome["unable_to_complete_inspection"] = "unable_to_complete_inspection";
    InspectionOutcome["failed_low"] = "failed_low";
    InspectionOutcome["failed_high"] = "failed_high";
    InspectionOutcome["further_inspections_required"] = "further_inspections_required";
    InspectionOutcome["withdraw_defect"] = "withdraw_defect";
})(InspectionOutcome = exports.InspectionOutcome || (exports.InspectionOutcome = {}));
var InspectionSortColumn;
(function (InspectionSortColumn) {
    InspectionSortColumn["inspection_date"] = "inspection_date";
})(InspectionSortColumn = exports.InspectionSortColumn || (exports.InspectionSortColumn = {}));
