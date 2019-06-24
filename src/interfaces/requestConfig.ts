import { ResponseType } from 'axios'

export interface RequestConfig {
  token?: string
  requestId: string
  timeout?: number
  responseType?: ResponseType
}
