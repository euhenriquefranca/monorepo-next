import type {FC} from "react";
import {Resume} from "@monorepo-next/curriculo/ui";
import {resumeFixture} from "@monorepo-next/curriculo/data-access";

export const ResumePage: FC = () => (
  <Resume {...resumeFixture} />
);
