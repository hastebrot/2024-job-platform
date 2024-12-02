import { usePageTitle } from "../helpers/react";

export type PageLayoutProps = {
  children?: React.ReactNode;
};

export const PageLayout = (props: PageLayoutProps) => {
  usePageTitle("platform-app");

  return <div className="grid min-h-dvh">{props.children}</div>;
};
