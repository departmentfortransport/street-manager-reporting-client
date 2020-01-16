"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qs = require("qs");
const axios_1 = require("axios");
const http_status_codes_1 = require("http-status-codes");
class StreetManagerReportingClient {
    constructor(config) {
        this.config = config;
        this.axios = axios_1.default.create({
            baseURL: this.config.baseURL,
            timeout: this.config.timeout
        });
    }
    getAlterations(config, request) {
        return this.httpHandler(() => this.axios.get('/alterations', this.generateRequestConfig(config, request)));
    }
    getComments(config, request) {
        return this.httpHandler(() => this.axios.get('/comments', this.generateRequestConfig(config, request)));
    }
    async getFeesAsCSV(config, request) {
        try {
            return await this.axios.get('/fees/csv', this.generateStreamRequestConfig(config, request));
        }
        catch (err) {
            return this.handleError(err);
        }
    }
    getFPNs(config, request) {
        return this.httpHandler(() => this.axios.get('/fixed-penalty-notices', this.generateRequestConfig(config, request)));
    }
    async getFPNsAsCSV(config, request) {
        try {
            return await this.axios.get('/fixed-penalty-notices/csv', this.generateStreamRequestConfig(config, request));
        }
        catch (err) {
            return this.handleError(err);
        }
    }
    getForwardPlans(config, request) {
        return this.httpHandler(() => this.axios.get('/forward-plans', this.generateRequestConfig(config, request)));
    }
    async getForwardPlansAsCSV(config, request) {
        try {
            return await this.axios.get('/forward-plans/csv', this.generateStreamRequestConfig(config, request));
        }
        catch (err) {
            return this.handleError(err);
        }
    }
    getInspections(config, request) {
        return this.httpHandler(() => this.axios.get('/inspections', this.generateRequestConfig(config, request)));
    }
    async getInspectionsAsCSV(config, request) {
        try {
            return await this.axios.get('/inspections/csv', this.generateStreamRequestConfig(config, request));
        }
        catch (err) {
            return this.handleError(err);
        }
    }
    getPermits(config, request) {
        return this.httpHandler(() => this.axios.get('/permits', this.generateRequestConfig(config, request)));
    }
    async getPermitsAsCSV(config, request) {
        try {
            return await this.axios.get('/permits/csv', this.generateStreamRequestConfig(config, request));
        }
        catch (err) {
            return this.handleError(err);
        }
    }
    getPermitSummaries(config, request) {
        return this.httpHandler(() => this.axios.post('/permits/search', request, this.generateRequestConfig(config)));
    }
    getReinstatements(config, request) {
        return this.httpHandler(() => this.axios.get('/reinstatements', this.generateRequestConfig(config, request)));
    }
    getSection81s(config, request) {
        return this.httpHandler(() => this.axios.get('/section-81s', this.generateRequestConfig(config, request)));
    }
    status() {
        return this.httpHandler(() => this.axios.get('/status'));
    }
    getWorkstreams(config, request) {
        return this.httpHandler(() => this.axios.get('/workstreams', this.generateRequestConfig(config, request)));
    }
    getWorksUpdates(config, request) {
        return this.httpHandler(() => this.axios.get('/works/updates', this.generateRequestConfig(config, request)));
    }
    async getUsers(config, request, organisationReference) {
        return this.httpHandler(() => this.axios.get(`/organisations/${organisationReference}/users`, this.generateRequestConfig(config, request)));
    }
    async httpHandler(request) {
        try {
            const response = await request();
            if (response.data) {
                return response.data;
            }
        }
        catch (err) {
            return this.handleError(err);
        }
    }
    handleError(err) {
        err.status = err.response ? err.response.status : http_status_codes_1.INTERNAL_SERVER_ERROR;
        return Promise.reject(err);
    }
    generateRequestConfig(config, request) {
        const requestConfig = {
            headers: {
                token: config.token,
                'x-request-id': config.requestId
            }
        };
        if (config.frontendToken) {
            requestConfig.headers.frontendToken = config.frontendToken;
        }
        if (!request) {
            requestConfig.params = {};
        }
        else {
            requestConfig.params = request;
            requestConfig.paramsSerializer = (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            };
        }
        if (config.timeout) {
            requestConfig.timeout = config.timeout;
        }
        return requestConfig;
    }
    generateStreamRequestConfig(config, request) {
        return Object.assign({}, this.generateRequestConfig(config, request), { responseType: 'stream', transformResponse: data => data });
    }
}
exports.StreetManagerReportingClient = StreetManagerReportingClient;
