import { useEffect } from "react";

export const usePageTitle = (pageTitle: string) => {
  useEffect(() => {
    const domainName = toDomainName(document.location.hostname);
    const title = domainName.length > 0 ? `${pageTitle} (${domainName})` : pageTitle;
    if (document.title !== title) {
      document.title = title;
    }
  }, []);
};

const toDomainName = (hostname: string): string => {
  return hostname.split(".").slice(-2).join(".");
};
