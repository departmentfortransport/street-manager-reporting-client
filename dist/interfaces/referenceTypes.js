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
