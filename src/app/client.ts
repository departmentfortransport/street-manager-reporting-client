import * as qs from 'qs'
import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { RequestConfig } from '../interfaces/requestConfig'
import { PermitReportingResponse } from '../interfaces/permitReportingResponse'
import { GetPermitsRequest } from '../interfaces/getPermitsRequest'
import { GetSitesRequest } from '../interfaces/getSitesRequest'
import { SiteSummaryResponse } from '../interfaces/siteSummaryResponse'
import { PermitCountsResponse } from '../interfaces/permitCountsResponse'

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

  public getPermits(config: RequestConfig, request: GetPermitsRequest): Promise<PermitReportingResponse> {
    return this.httpHandler<PermitReportingResponse>(() => this.axios.get('/permits', this.generateRequestConfig(config, request)))
  }

  public getPermitCounts(config: RequestConfig): Promise<PermitCountsResponse> {
    return this.httpHandler<PermitCountsResponse>(() => this.axios.get('/permits/counts', this.generateRequestConfig(config)))
  }

  public getSites(config: RequestConfig, request: GetSitesRequest): Promise<SiteSummaryResponse[]> {
    return this.httpHandler<SiteSummaryResponse[]>(() => this.axios.get('/sites', this.generateRequestConfig(config, request)))
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

  private generateRequestConfig(config: RequestConfig, request?: any): AxiosRequestConfig {
    let requestConfig: AxiosRequestConfig = {
      headers: {
        token: config.token,
        'x-request-id': config.requestId
      }
    }

    if (!request) {
      requestConfig.params = {}
    } else {
      requestConfig.params = request
      requestConfig.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }

    return requestConfig
  }
}
