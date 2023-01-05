import type {FC} from "react";
import type {ResumeUIProps} from "@monorepo-next/curriculo/model";

export const ResumeHeader: FC<ResumeUIProps> = (
  {
    currentJobTitle,
    fullName
  }
) => (
  <header>
    <h2>{fullName}</h2>
    <p>{currentJobTitle}</p>
  </header>
);
