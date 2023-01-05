import type {FC} from "react";
import {Tabs} from "@monorepo-next/shared/ui";

export const ResumeTabs: FC = () => (
  <Tabs.Root defaultValue={"history"}>
    <Tabs.List aria-label={"Abas do currículo"}>
      <Tabs.Trigger value={"history"}>Experiência profissional</Tabs.Trigger>
      <Tabs.Trigger value={"education"}>Formação acadêmica</Tabs.Trigger>
      <Tabs.Trigger value={"skills"}>Habilidades</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value={"history"}>
      <h3>Experiência profissional</h3>
    </Tabs.Content>
    <Tabs.Content value={"education"}>
      <h3>Formação acadêmica</h3>
    </Tabs.Content>
    <Tabs.Content value={"skills"}>
      <h3>Habilidades</h3>
    </Tabs.Content>
  </Tabs.Root>
)
