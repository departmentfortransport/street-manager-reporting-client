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
    status() {
        return this.httpHandler(() => this.axios.get('/status'));
    }
    getWorks(config, request) {
        return this.httpHandler(() => this.axios.get('/works', this.generateRequestConfig(config, request)));
    }
    getSites(config, request) {
        return this.httpHandler(() => this.axios.get('/sites', this.generateRequestConfig(config, request)));
    }
    async httpHandler(request) {
        try {
            let response = await request();
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
        let requestConfig = {
            headers: {
                token: config.token,
                'x-request-id': config.requestId
            }
        };
        if (!request) {
            requestConfig.params = {};
        }
        else {
            requestConfig.params = request;
            requestConfig.paramsSerializer = (params) => {
                return qs.stringify(params, { arrayFormat: 'repeat' });
            };
        }
        return requestConfig;
    }
}
exports.StreetManagerReportingClient = StreetManagerReportingClient;
