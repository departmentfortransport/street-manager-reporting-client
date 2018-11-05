"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    getWorks(request) {
        return this.httpHandler(() => this.axios.get('/works', this.generateRequestConfig(request)));
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
    generateRequestConfig(request) {
        let headers = {
            token: request.token,
            'x-request-id': request.request_id
        };
        return { headers: headers, params: {} };
    }
}
exports.StreetManagerReportingClient = StreetManagerReportingClient;
