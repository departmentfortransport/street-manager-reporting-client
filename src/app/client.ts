import * as qs from 'qs'
import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { RequestConfig } from '../interfaces/requestConfig'
import { PermitReportingResponse } from '../interfaces/permitReportingResponse'
import { GetPermitsRequest } from '../interfaces/getPermitsRequest'
import { GetSitesRequest } from '../interfaces/getSitesRequest'
import { SiteSummaryResponse } from '../interfaces/siteSummaryResponse'
import { PermitCountsResponse } from '../interfaces/permitCountsResponse'
import { GetFPNsRequest } from '../interfaces/getFPNsRequest'
import { FPNReportingResponse } from '../interfaces/fpnReportingResponse'
import { CommentReportingResponse } from '../interfaces/commentReportingResponse'
import { GetCommentsRequest } from '../interfaces/getCommentsRequest'
import { InspectionReportingResponse } from '../interfaces/inspectionReportingResponse'
import { GetInspectionsRequest } from '../interfaces/getInspectionsRequest'

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

  public getInspections(config: RequestConfig, request: GetInspectionsRequest): Promise<InspectionReportingResponse> {
    return this.httpHandler<InspectionReportingResponse>(() => this.axios.get('/inspections', this.generateRequestConfig(config, request)))
  }

  public async getInspectionsAsCSV(config: RequestConfig, request: GetInspectionsRequest): Promise<AxiosResponse<string>> {
    try {
      return await this.axios.get('/inspections/csv', this.generateRequestConfig(config, request))
    } catch (err) {
      return this.handleError(err)
    }
  }

  public async getPermitsAsCSV(config: RequestConfig, request: GetPermitsRequest): Promise<AxiosResponse<string>> {
    try {
      return await this.axios.get('/permits/csv', this.generateRequestConfig(config, request))
    } catch (err) {
      return this.handleError(err)
    }
  }

  public async getFPNsAsCSV(config: RequestConfig, request: GetFPNsRequest): Promise<AxiosResponse<string>> {
    try {
      return await this.axios.get('/fixed-penalty-notices/csv', this.generateRequestConfig(config, request))
    } catch (err) {
      return this.handleError(err)
    }
  }

  public getSites(config: RequestConfig, request: GetSitesRequest): Promise<SiteSummaryResponse[]> {
    return this.httpHandler<SiteSummaryResponse[]>(() => this.axios.get('/sites', this.generateRequestConfig(config, request)))
  }

  public getFPNs(config: RequestConfig, request: GetFPNsRequest): Promise<FPNReportingResponse> {
    return this.httpHandler<FPNReportingResponse>(() => this.axios.get('/fixed-penalty-notices', this.generateRequestConfig(config, request)))
  }

  public getComments(config: RequestConfig, request: GetCommentsRequest): Promise<CommentReportingResponse> {
    return this.httpHandler<CommentReportingResponse>(() => this.axios.get('/comments', this.generateRequestConfig(config, request)))
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
