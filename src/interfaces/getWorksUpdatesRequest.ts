export interface GetWorksUpdatesRequest {
  start_date?: Date
  end_date?: Date
  previous_minutes?: number
  exclude_events_from?: string
  swa_code?: string
}
