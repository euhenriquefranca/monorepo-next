import type {FC, ReactNode} from "react";
import {Header} from "../Header";
import {Footer} from "../Footer";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
  return <>
    <Header />
    <main className="app" role={"main"} tabIndex={-1}>{children}</main>
    <Footer />
  </>;
};
