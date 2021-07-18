import type { AdditionalDetailsError } from '../types';

export type UnauthorizedStatus = 401;

class UnauthorizedError extends Error {
    readonly status: UnauthorizedStatus;
    readonly additionalDetails: AdditionalDetailsError;
    readonly uiMessage?: string;

    constructor(
      message: string = 'You are not authorized for this request.',
      additionalDetails: AdditionalDetailsError = null,
      uiMessage?: string,
    ) {
      super(message);
      this.status = 401;
      this.additionalDetails = additionalDetails;
      this.uiMessage = uiMessage;
      this.name = this.constructor.name;
    }
}

export default UnauthorizedError;
