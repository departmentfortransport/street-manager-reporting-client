export interface Request {
    request_id: string;
}
export interface AuthenticatedRequest extends Request {
    token: string;
}
