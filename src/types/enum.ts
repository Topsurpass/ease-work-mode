export enum Status {
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED',
}

export enum TrxnStatus {
    All = '',
    Fraudulent = 'Fraudulent',
    'Not Fraudulent' = 'Not Fraudulent',
    Escalated = 'Escalated',
}

export enum RequestMethod {
    POST = 'POST',
    PUT = 'PUT',
    PATCH = 'PATCH',
    DELETE = 'DELETE',
}

export enum EntityType {
    JOB_DETAILS = 'JOBDETAILS',
}
