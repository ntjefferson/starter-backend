import type { BadRequestStatus } from '../errors/BadRequestError';
import type { UnauthorizedStatus } from '../errors/UnauthorizedError';

export type AdditionalDetailsError = {
    details?: string;
    hint?: string;
    missing?: string[];
} | null;

export type StatusErrorCodes = 500 | BadRequestStatus | UnauthorizedStatus;

export type HttpRequestError = Error & {
    details?: string;
    status?: StatusErrorCodes;
    additionalDetails?: AdditionalDetailsError;
    uiMessage?: string;
}
