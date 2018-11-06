import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { AuthenticatedRequest } from '../interfaces/request'
import { WorkSummaryResponse } from '../interfaces/workSummaryResponse'

export interface StreetManagerReportingClientConfig {
  baseURL: string,
  timeout?: number
}

export class StreetManagerReportingClient {
  private axios: AxiosInstance

  public constructor(private config: StreetManagerReportingClientConfig) {
    this.axios = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    })
  }

  public status(): Promise<void> {
    return this.httpHandler<void>(() => this.axios.get('/status'))
  }

  public getWorks(request: AuthenticatedRequest): Promise<WorkSummaryResponse[]> {
    return this.httpHandler<WorkSummaryResponse[]>(() => this.axios.get('/works', this.generateRequestConfig(request)))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      return this.handleError(err)
    }
  }

  private handleError(err) {
    err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR
    return Promise.reject(err)
  }

  private generateRequestConfig(request: AuthenticatedRequest): AxiosRequestConfig {
    let headers: any = {
      token: request.token,
      'x-request-id': request.request_id
    }

    return { headers: headers, params: {} }
  }
}
