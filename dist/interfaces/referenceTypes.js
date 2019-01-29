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
})(InspectionCategory = exports.InspectionCategory || (exports.InspectionCategory = {}));
var InspectionOutcome;
(function (InspectionOutcome) {
    InspectionOutcome["passed"] = "passed";
    InspectionOutcome["unable_to_complete"] = "unable_to_complete";
    InspectionOutcome["failed_standard"] = "failed_standard";
    InspectionOutcome["failed_2_hour"] = "failed_2_hour";
    InspectionOutcome["failed_4_hour"] = "failed_4_hour";
})(InspectionOutcome = exports.InspectionOutcome || (exports.InspectionOutcome = {}));
