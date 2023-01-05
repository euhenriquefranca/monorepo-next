import type {FC} from "react";
import {ResumeHeader} from "../ResumeHeader";
import {ResumeTabs} from "../ResumeTabs";
import type {ResumeUIProps} from "@monorepo-next/curriculo/model";

export const Resume: FC<ResumeUIProps> = (
  {
    currentJobTitle,
    fullName
  }
) => (
  <>
    <ResumeHeader currentJobTitle={currentJobTitle} fullName={fullName} />
    <ResumeTabs />
  </>
);
