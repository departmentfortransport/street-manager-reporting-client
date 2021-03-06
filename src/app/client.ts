import * as qs from 'qs'
import axios, { AxiosInstance, AxiosResponse, AxiosPromise, AxiosRequestConfig } from 'axios'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import { RequestConfig } from '../interfaces/requestConfig'
import { PermitReportingResponse, PermitSummaryResponse } from '../interfaces/permitReportingResponse'
import { GetPermitsRequest } from '../interfaces/getPermitsRequest'
import { GetFPNsRequest } from '../interfaces/getFPNsRequest'
import { FPNReportingResponse } from '../interfaces/fpnReportingResponse'
import { CommentReportingResponse } from '../interfaces/commentReportingResponse'
import { GetCommentsRequest } from '../interfaces/getCommentsRequest'
import { InspectionReportingResponse } from '../interfaces/inspectionReportingResponse'
import { GetInspectionsRequest } from '../interfaces/getInspectionsRequest'
import { GetWorksUpdatesRequest } from '../interfaces/getWorksUpdatesRequest'
import { WorkUpdateResponse } from '../interfaces/workUpdateResponse'
import { WorkstreamReportingResponse } from '../interfaces/workstreamReportingResponse'
import { GetWorkstreamsRequest } from '../interfaces/getWorkstreamsRequest'
import { PermitSearchRequest } from '../interfaces/permitSearchRequest'
import { ReinstatementReportingResponse } from '../interfaces/reinstatementReportingResponse'
import { GetReinstatementsRequest } from '../interfaces/getReinstatementsRequest'
import { AlterationReportingResponse } from '../interfaces/alterationReportingResponse'
import { GetAlterationsRequest } from '../interfaces/getAlterationsRequest'
import { GetForwardPlansRequest } from '../interfaces/getForwardPlansRequest'
import { ForwardPlanReportingResponse } from '../interfaces/forwardPlanReportingResponse'
import { GetSection81sRequest } from '../interfaces/getSection81sRequest'
import { Section81ReportingResponse } from '../interfaces/section81ReportingResponse'
import { UsersReportingResponse } from '../interfaces/usersResponse'
import { GetUsersRequest } from '../interfaces/getUsersRequest'
import { GetCSVExportsRequest } from '../interfaces/getCSVExportsRequest'
import { CSVExportReportingResponse } from '../interfaces/csvExportReportingResponse'
import { GeographicalAreaResponse } from '../interfaces/geographicalAreaResponse'
import { GetSampleInspectionTargetsRequest } from '../interfaces/getSampleInspectionTargetsRequest'
import { SampleInspectionTargetReportingResponse } from '../interfaces/sampleInspectionTargetReportingResponse'
import { SampleInspectionReportingResponse } from '../interfaces/sampleInspectionReportingResponse'
import { GetSampleInspectionsRequest } from '../interfaces/getSampleInspectionsRequest'

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

  public getAlterations(config: RequestConfig, request: GetAlterationsRequest): Promise<AlterationReportingResponse> {
    return this.httpHandler<AlterationReportingResponse>(
      () => this.axios.get('/alterations', this.generateRequestConfig(config, request))
    )
  }

  public getComments(config: RequestConfig, request: GetCommentsRequest): Promise<CommentReportingResponse> {
    return this.httpHandler<CommentReportingResponse>(
      () => this.axios.get('/comments', this.generateRequestConfig(config, request))
    )
  }

  public getFPNs(config: RequestConfig, request: GetFPNsRequest): Promise<FPNReportingResponse> {
    return this.httpHandler<FPNReportingResponse>(
      () => this.axios.get('/fixed-penalty-notices', this.generateRequestConfig(config, request))
    )
  }

  public getForwardPlans(config: RequestConfig, request: GetForwardPlansRequest): Promise<ForwardPlanReportingResponse> {
    return this.httpHandler<ForwardPlanReportingResponse>(
      () => this.axios.get('/forward-plans', this.generateRequestConfig(config, request))
    )
  }

  public getInspections(config: RequestConfig, request: GetInspectionsRequest): Promise<InspectionReportingResponse> {
    return this.httpHandler<InspectionReportingResponse>(
      () => this.axios.get('/inspections', this.generateRequestConfig(config, request))
    )
  }

  public getPermits(config: RequestConfig, request: GetPermitsRequest): Promise<PermitReportingResponse> {
    return this.httpHandler<PermitReportingResponse>(
      () => this.axios.get('/permits', this.generateRequestConfig(config, request))
    )
  }

  public getPermitSummaries(config: RequestConfig, request: PermitSearchRequest): Promise<PermitSummaryResponse[]> {
    return this.httpHandler<PermitSummaryResponse[]>(
      () => this.axios.post('/permits/search', request, this.generateRequestConfig(config))
    )
  }

  public getReinstatements(config: RequestConfig, request: GetReinstatementsRequest): Promise<ReinstatementReportingResponse> {
    return this.httpHandler<ReinstatementReportingResponse>(
      () => this.axios.get('/reinstatements', this.generateRequestConfig(config, request))
    )
  }

  public getSection81s(config: RequestConfig, request: GetSection81sRequest): Promise<Section81ReportingResponse> {
    return this.httpHandler<Section81ReportingResponse>(
      () => this.axios.get('/section-81s', this.generateRequestConfig(config, request))
    )
  }

  public status(): Promise<void> {
    return this.httpHandler<void>(() => this.axios.get('/status'))
  }

  public getWorkstreams(config: RequestConfig, request: GetWorkstreamsRequest): Promise<WorkstreamReportingResponse> {
    return this.httpHandler<WorkstreamReportingResponse>(
      () => this.axios.get('/workstreams', this.generateRequestConfig(config, request))
    )
  }

  public getWorksUpdates(config: RequestConfig, request: GetWorksUpdatesRequest): Promise<WorkUpdateResponse[]> {
    return this.httpHandler<WorkUpdateResponse[]>(
      () => this.axios.get('/works/updates', this.generateRequestConfig(config, request))
    )
  }

  public async getUsers(config: RequestConfig, request: GetUsersRequest, organisationReference: string): Promise<UsersReportingResponse> {
    return this.httpHandler<UsersReportingResponse>(
      () => this.axios.get(`/organisations/${organisationReference}/users`, this.generateRequestConfig(config, request))
    )
  }

  public getCSVExports(config: RequestConfig, request: GetCSVExportsRequest): Promise<CSVExportReportingResponse> {
    return this.httpHandler<CSVExportReportingResponse>(
      () => this.axios.get('/csv-exports', this.generateRequestConfig(config, request))
    )
  }

  public getGeographicalAreas(config: RequestConfig): Promise<GeographicalAreaResponse[]> {
    return this.httpHandler<GeographicalAreaResponse[]>(
      () => this.axios.get('/geographical-areas', this.generateRequestConfig(config))
    )
  }

  public getSampleInspectionTargets(config: RequestConfig, request: GetSampleInspectionTargetsRequest): Promise<SampleInspectionTargetReportingResponse> {
    return this.httpHandler<SampleInspectionTargetReportingResponse>(
      () => this.axios.get('/sample-inspection-targets', this.generateRequestConfig(config, request))
    )
  }

  public getSampleInspections(config: RequestConfig, request: GetSampleInspectionsRequest): Promise<SampleInspectionReportingResponse> {
    return this.httpHandler<SampleInspectionReportingResponse>(
      () => this.axios.get('/sample-inspections', this.generateRequestConfig(config, request))
    )
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      const response: AxiosResponse<T> = await request()
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
    const requestConfig: AxiosRequestConfig = {
      headers: {
        token: config.token,
        'x-request-id': config.requestId
      }
    }

    if (config.frontendToken) {
      requestConfig.headers.frontendToken = config.frontendToken
    }

    if (!request) {
      requestConfig.params = {}
    } else {
      requestConfig.params = request
      requestConfig.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }

    if (config.timeout) {
      requestConfig.timeout = config.timeout
    }

    return requestConfig
  }
}
