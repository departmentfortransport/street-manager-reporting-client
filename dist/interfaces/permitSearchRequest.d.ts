export interface PermitSearchRequest {
    /** Array values must be unique
     * Must not contain null or undefined values
     * Array max length 1000
     * Work reference numbers have a max length 24 characters
     */
    work_reference_numbers?: string[];
}
