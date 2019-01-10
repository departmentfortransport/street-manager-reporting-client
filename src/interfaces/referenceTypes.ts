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
  deemed_in_progress = 'deemed_in_progress'
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
  FPN = 'FPN'
}
