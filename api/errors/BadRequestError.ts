import type { AdditionalDetailsError } from '../types';

export type BadRequestStatus = 400;

class BadRequestError extends Error {
    status: BadRequestStatus;
    additionalDetails: AdditionalDetailsError;

    constructor(message: string, additionalDetails: AdditionalDetailsError = null) {
      super(message);
      this.status = 400;
      this.additionalDetails = additionalDetails;
      this.name = this.constructor.name;
    }
}

export default BadRequestError;
