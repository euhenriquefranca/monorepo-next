/* eslint-disable @typescript-eslint/no-empty-interface */
interface BaseResume {
  currentJobTitle: string;
  fullName: string;
}

export interface ResumePayload extends BaseResume {}
export interface ResumeUIProps extends BaseResume {}
